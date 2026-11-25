// Static SEO audit of the built site. Run: npm run seo:audit  (builds first)
// Errors fail the run (exit 1); warnings are advisory.
import { readdir, readFile, access, stat } from 'node:fs/promises';
import path from 'node:path';

const dist = 'dist';
const SITE = 'https://www.devminhaj.me';
const errors = [];
const warns = [];
const decode = (s) =>
	s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'");

async function* walk(dir) {
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) yield* walk(p);
		else yield p;
	}
}
const exists = (p) => access(p).then(() => true, () => false);
const isFile = (p) => stat(p).then((s) => s.isFile(), () => false);
const urlToFile = async (urlPath) => {
	const clean = decodeURI(urlPath.split(/[?#]/)[0]).replace(/\/+$/, '') || '/';
	for (const c of [path.join(dist, clean), path.join(dist, clean, 'index.html'), path.join(dist, clean + '.html')]) {
		if (await isFile(c)) return c;
	}
	return null;
};

const pages = [];
for await (const f of walk(dist)) if (f.endsWith('.html')) pages.push(f);

const titles = new Map();
const descs = new Map();
const indexable = [];
for (const file of pages) {
	const rel = path.relative(dist, file);
	const html = await readFile(file, 'utf8');
	const body = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '');
	const err = (m) => errors.push(`${rel}: ${m}`);
	const warn = (m) => warns.push(`${rel}: ${m}`);
	const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);

	const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '');
	if (!title) err('missing <title>');
	else {
		if (title.length > 60) warn(`title is ${title.length} chars (>60): "${title}"`);
		if (titles.has(title)) err(`duplicate title also on ${titles.get(title)}`);
		titles.set(title, rel);
	}
	const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
	if (!desc) err('missing meta description');
	else {
		if (desc.length > 160) warn(`description is ${desc.length} chars (>160)`);
		if (desc.length < 70) warn(`description is short (${desc.length} chars)`);
		if (descs.has(desc)) err(`duplicate description also on ${descs.get(desc)}`);
		descs.set(desc, rel);
	}
	if (!noindex) {
		indexable.push(rel);
		if (!/<link rel="canonical" href="https:\/\/www\.devminhaj\.me[^"]*"/.test(html)) err('missing/invalid canonical');
	}
	const h1 = (body.match(/<h1[\s>]/g) ?? []).length;
	if (h1 !== 1) err(`expected exactly one <h1>, found ${h1}`);
	// heading order: no level may jump by more than one from the previous heading
	let prev = 0;
	for (const m of body.matchAll(/<h([1-6])[\s>]/g)) {
		const lvl = Number(m[1]);
		if (prev && lvl > prev + 1) warn(`heading jumps from h${prev} to h${lvl}`);
		prev = lvl;
	}
	for (const tag of ['og:title', 'og:description', 'og:image', 'og:url']) {
		if (!html.includes(`property="${tag}"`)) err(`missing ${tag}`);
	}
	const ogImage = html.match(/property="og:image" content="([^"]*)"/)?.[1];
	if (ogImage?.startsWith(SITE) && !(await exists(path.join(dist, new URL(ogImage).pathname)))) err(`og:image file missing: ${ogImage}`);
	for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
		try {
			JSON.parse(m[1]);
		} catch {
			err('invalid JSON-LD');
		}
	}
	for (const img of body.match(/<img\b[^>]*>/g) ?? []) {
		if (!/\salt=/.test(img)) err(`<img> without alt: ${img.slice(0, 80)}`);
	}
	for (const m of body.matchAll(/<(?:a|link|img|source)\b[^>]*?(?:href|src)="(\/[^"]*)"/g)) {
		const target = m[1];
		if (target.startsWith('//') || target.startsWith('/#')) continue;
		if (!(await urlToFile(target))) err(`broken internal reference: ${target}`);
	}
}

// Sitemap vs indexable pages
const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8').catch(() => '');
const locs = new Set([...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]));
for (const rel of indexable) {
	const route = '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/+$/, '');
	const url = SITE + (route === '/' ? '/' : route);
	if (!locs.has(url)) errors.push(`sitemap.xml: missing ${url}`);
}
for (const loc of locs) {
	const p = new URL(loc).pathname;
	if (!(await urlToFile(p))) errors.push(`sitemap.xml: ${loc} does not exist in build`);
}
const robots = await readFile(path.join(dist, 'robots.txt'), 'utf8').catch(() => '');
if (!/Sitemap:\s*https:\/\/www\.devminhaj\.me\/sitemap\.xml/.test(robots)) errors.push('robots.txt: missing Sitemap line');

console.log(`Audited ${pages.length} pages, ${locs.size} sitemap URLs.`);
for (const w of warns) console.log('WARN ', w);
for (const e of errors) console.log('ERROR', e);
console.log(`${errors.length} error(s), ${warns.length} warning(s).`);
process.exit(errors.length ? 1 : 0);
