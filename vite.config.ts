import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

function seoStaticFilesPlugin(origin: string): Plugin {
  const base = origin.replace(/\/$/, '')
  const sitemapRoutes: Array<{
    path: string
    changefreq: 'weekly' | 'monthly'
    priority: string
  }> = [
    { path: '/', changefreq: 'weekly', priority: '1' },
    { path: '/about', changefreq: 'monthly', priority: '0.8' },
    { path: '/services', changefreq: 'weekly', priority: '0.85' },
    { path: '/student-success', changefreq: 'weekly', priority: '0.8' },
    { path: '/contact', changefreq: 'monthly', priority: '0.75' },
    { path: '/privacy-policy', changefreq: 'monthly', priority: '0.5' },
    { path: '/terms-of-service', changefreq: 'monthly', priority: '0.5' },
    { path: '/help-center', changefreq: 'weekly', priority: '0.6' },
  ]

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
          ...sitemapRoutes.flatMap((route) => [
            '  <url>',
            `    <loc>${base}${route.path === '/' ? '/' : route.path}</loc>`,
            `    <lastmod>${lastmod}</lastmod>`,
            `    <changefreq>${route.changefreq}</changefreq>`,
            `    <priority>${route.priority}</priority>`,
            '  </url>',
          ]),
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
