// One-off helper: converts portfolio PNG screenshots to WebP (max 1600px wide) and
// generates the 1200x630 social share image. Run: node --experimental-strip-types scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdir, rename, unlink, stat } from 'node:fs/promises';
import path from 'node:path';
import { contactDetails } from '../src/data/contact.ts';

const root = 'public/assets';

async function* walk(dir) {
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) yield* walk(p);
		else yield p;
	}
}

let before = 0;
let after = 0;
for await (const file of walk(`${root}/portfolio`)) {
	if (!file.endsWith('.png')) continue;
	const clean = file.replace(/\s+\.png$/, '.png'); // "speedfame_2 .png" -> "speedfame_2.png"
	const out = clean.replace(/\.png$/, '.webp');
	before += (await stat(file)).size;
	await sharp(file).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
	after += (await stat(out)).size;
	await unlink(file);
}
console.log(`portfolio: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB`);

// Profile photo for on-page use (WebP); PNG stays for og:image fallback/legacy.
await sharp(`${root}/profile_img.png`).webp({ quality: 85 }).toFile(`${root}/profile_img.webp`);

// Social share image 1200x630
const size = 420;
const circle = Buffer.from(`<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}"/></svg>`);
const photo = await sharp(`${root}/profile_img.png`)
	.resize(size, size)
	.composite([{ input: circle, blend: 'dest-in' }])
	.png()
	.toBuffer();
const bg = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b3956"/><stop offset="1" stop-color="#16304a"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#g)"/>
<circle cx="900" cy="315" r="222" fill="#2f9983"/>
<rect x="72" y="86" width="64" height="6" fill="#2f9983"/>
<text x="72" y="190" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="600" fill="#2f9983" letter-spacing="3">DEVMINHAJ.ME</text>
<text x="72" y="290" font-family="Helvetica, Arial, sans-serif" font-size="68" font-weight="700" fill="#f7f0f0">Minhaj Nadeem</text>
<text x="72" y="370" font-family="Helvetica, Arial, sans-serif" font-size="38" font-weight="500" fill="#f7f0f0">Full Stack Product Engineer</text>
<text x="72" y="430" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#a9b8c8">Mobile apps, web, backend &amp; cloud delivery</text>
<rect x="72" y="512" width="40" height="3" fill="#2f9983"/>
<text x="72" y="560" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="600" fill="#2f9983">www.devminhaj.me  ·  ${contactDetails.email}</text>
</svg>`);
await sharp(bg).composite([{ input: photo, left: 900 - size / 2, top: 315 - size / 2 }]).png({ compressionLevel: 9 }).toFile(`${root}/og-image.png`);
console.log('og-image.png created');
