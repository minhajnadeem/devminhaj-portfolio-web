import type { APIRoute } from "astro";
import { execFileSync } from "node:child_process";
import { portfolioProjects } from "../data/portfolio";

/** Source files whose changes make a URL's content change. */
const shared = ["src/layouts/SiteLayout.astro"];
const sources: Record<string, string[]> = {
	"/": ["src/pages/index.astro", "src/data/portfolio.ts"],
	"/services": ["src/pages/services.astro"],
	"/portfolio": ["src/pages/portfolio.astro", "src/data/portfolio.ts"],
	"/about": ["src/pages/about.astro"],
	"/contact": ["src/pages/contact.astro", "src/data/contact.ts"],
};
const detailSources = (id: string) =>
	id === "sdrive"
		? ["src/pages/portfolio/sdrive.astro", "src/data/portfolio.ts"]
		: ["src/pages/portfolio/[id].astro", "src/data/portfolio.ts", "src/data/caseStudies.ts"];

/** Latest git commit date (YYYY-MM-DD) touching any of the files; undefined if unavailable. */
function lastModified(files: string[]): string | undefined {
	try {
		const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files, ...shared], {
			encoding: "utf8",
			stdio: ["ignore", "pipe", "ignore"],
		}).trim();
		return out ? out.slice(0, 10) : undefined;
	} catch {
		return undefined;
	}
}

export const GET: APIRoute = ({ site }) => {
	const pages = [
		...Object.entries(sources).map(([path, files]) => ({ path, files })),
		...portfolioProjects.map((project) => ({
			path: `/portfolio/${project.id}`,
			files: detailSources(project.id),
		})),
	];
	const escapeXml = (value: string) =>
		value
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&apos;");
	const entries = pages
		.map(({ path, files }) => {
			const lastmod = lastModified(files);
			return `<url><loc>${escapeXml(new URL(path, site).href)}</loc>${
				lastmod ? `<lastmod>${lastmod}</lastmod>` : ""
			}</url>`;
		})
		.join("");
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`,
		{ headers: { "Content-Type": "application/xml; charset=utf-8" } }
	);
};
