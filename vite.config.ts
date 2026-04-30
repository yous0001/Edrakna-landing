import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

function seoStaticFilesPlugin(origin: string): Plugin {
  const base = origin.replace(/\/$/, '')
  return {
    name: 'edrakna-seo-static',
    closeBundle() {
      const outDir = resolve(__dirname, 'dist')
      const lastmod = new Date().toISOString().slice(0, 10)
      writeFileSync(
        resolve(outDir, 'robots.txt'),
        [
          'User-agent: *',
          'Allow: /',
          '',
          `# Sitemap (update VITE_SITE_URL before deploy if not ${base})`,
          `Sitemap: ${base}/sitemap.xml`,
          '',
        ].join('\n'),
      )
      writeFileSync(
        resolve(outDir, 'sitemap.xml'),
        [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          '  <url>',
          `    <loc>${base}/</loc>`,
          `    <lastmod>${lastmod}</lastmod>`,
          '    <changefreq>weekly</changefreq>',
          '    <priority>1</priority>',
          '  </url>',
          '  <url>',
          `    <loc>${base}/about</loc>`,
          `    <lastmod>${lastmod}</lastmod>`,
          '    <changefreq>monthly</changefreq>',
          '    <priority>0.8</priority>',
          '  </url>',
          '</urlset>',
          '',
        ].join('\n'),
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL ?? 'https://edrakna.com').replace(/\/$/, '')

  return {
    plugins: [react(), seoStaticFilesPlugin(siteUrl)],
  }
})
