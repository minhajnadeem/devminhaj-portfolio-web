import type { APIRoute } from 'astro';
import { portfolioProjects } from '../data/portfolio';

export const GET: APIRoute = ({ site }) => {
  const paths = ['/', '/services', '/portfolio', '/about', '/contact', ...portfolioProjects.map((project) => `/portfolio/${project.id}`)];
  const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  const entries = paths.map((path) => `<url><loc>${escapeXml(new URL(path, site).href)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
