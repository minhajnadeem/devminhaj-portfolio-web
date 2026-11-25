// Generates a 1200x630 share image per portfolio project into public/assets/og/.
// Run after changing project data: node --experimental-strip-types scripts/generate-og-images.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { contactDetails } from '../src/data/contact.ts';
import { portfolioProjects, getProjectImages } from '../src/data/portfolio.ts';

const out = 'public/assets/og';
await mkdir(out, { recursive: true });

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function wrap(text, max) {
	const lines = [];
	let line = '';
	for (const word of text.split(/\s+/)) {
		if ((line + ' ' + word).trim().length > max && line) {
			lines.push(line);
			line = word;
		} else line = (line + ' ' + word).trim();
	}
	if (line) lines.push(line);
	return lines.slice(0, 5);
}

const W = 1200, H = 630;
const boxW = 440, boxH = 500, boxX = 690, boxY = 65;

for (const p of portfolioProjects) {
	const shot = getProjectImages(p)[0];
	const shotPath = shot && `public${shot}`;
	const hasShot = shotPath && existsSync(shotPath);
	const pitch = wrap(p.pitch, hasShot ? 30 : 48);
	const nameSize = p.name.length > 16 ? 52 : 68;
	const svg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b3956"/><stop offset="1" stop-color="#16304a"/></linearGradient></defs>
<rect width="${W}" height="${H}" fill="url(#g)"/>
${hasShot ? `<rect x="${boxX - 10}" y="${boxY - 10}" width="${boxW + 20}" height="${boxH + 20}" rx="30" fill="#2f9983"/>` : ''}
<rect x="72" y="86" width="64" height="6" fill="#2f9983"/>
<text x="72" y="170" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="600" fill="#2f9983" letter-spacing="3">CASE STUDY · DEVMINHAJ.ME</text>
<text x="72" y="270" font-family="Helvetica, Arial, sans-serif" font-size="${nameSize}" font-weight="700" fill="#f7f0f0">${esc(p.name)}</text>
${pitch.map((l, i) => `<text x="72" y="${335 + i * 42}" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#d5dee8">${esc(l)}</text>`).join('\n')}
<text x="72" y="530" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="600" fill="#f7f0f0">Minhaj Nadeem · Full Stack Product Engineer</text>
<rect x="72" y="552" width="40" height="3" fill="#2f9983"/>
<text x="72" y="590" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="600" fill="#2f9983">www.devminhaj.me  ·  ${esc(contactDetails.email)}</text>
</svg>`);
	const layers = [];
	if (hasShot) {
		const mask = Buffer.from(`<svg width="${boxW}" height="${boxH}"><rect width="${boxW}" height="${boxH}" rx="22"/></svg>`);
		const img = await sharp(shotPath)
			.resize(boxW, boxH, { fit: 'cover', position: 'top' })
			.composite([{ input: mask, blend: 'dest-in' }])
			.png()
			.toBuffer();
		layers.push({ input: img, left: boxX, top: boxY });
	}
	await sharp(svg).composite(layers).png({ compressionLevel: 9 }).toFile(`${out}/${p.id}.png`);
	console.log(p.id, hasShot ? 'with screenshot' : 'text only');
}
