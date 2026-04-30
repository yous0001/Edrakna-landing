import { useLayoutEffect } from 'react'
import {
  SEO_KEYWORDS,
  SITE_NAME_AR,
  SITE_NAME_EN,
  SITE_TAGLINE,
  absoluteUrl,
} from './siteConfig'

export interface PageSeoInput {
  readonly title: string
  /** ~150–160 chars ideal for snippets */
  readonly description: string
  /** Path only, e.g. `/` or `/about` */
  readonly path: string
  /** Path to image under public/, e.g. `/hero-students.png` */
  readonly imagePath?: string
  /** Extra keywords merged with global list (optional) */
  readonly extraKeywords?: readonly string[]
}

function upsertMetaAttribute(
  selector: string,
  setAttrs: (el: HTMLMetaElement) => void,
  create: () => HTMLMetaElement,
) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  setAttrs(el)
}

function setMetaName(name: string, content: string) {
  upsertMetaAttribute(
    `meta[name="${name}"]`,
    (el) => el.setAttribute('content', content),
    () => {
      const m = document.createElement('meta')
      m.setAttribute('name', name)
      return m
    },
  )
}

function setMetaProperty(property: string, content: string) {
  upsertMetaAttribute(
    `meta[property="${property}"]`,
    (el) => el.setAttribute('content', content),
    () => {
      const m = document.createElement('meta')
      m.setAttribute('property', property)
      return m
    },
  )
}

function setLinkRel(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setHreflang(lang: string, href: string) {
  const selector = `link[rel="alternate"][hreflang="${lang}"]`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', lang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Updates document title, canonical, hreflang, Open Graph, Twitter, and core meta tags.
 */
export function usePageSeo(config: PageSeoInput) {
  useLayoutEffect(() => {
    const canonical = absoluteUrl(config.path === '/' ? '/' : config.path)
    const imageUrl = absoluteUrl(config.imagePath ?? '/hero-students.png')
    const keywords = [...SEO_KEYWORDS, ...(config.extraKeywords ?? [])].join(', ')

    document.title = config.title

    setMetaName('description', config.description)
    setMetaName('keywords', keywords)
    setMetaName('author', `${SITE_NAME_AR} · ${SITE_NAME_EN}`)
    setMetaName('robots', 'index, follow')
    setMetaName('googlebot', 'index, follow, max-image-preview:large')
    setMetaName('language', 'Arabic')
    setMetaProperty('og:site_name', `${SITE_NAME_AR} | ${SITE_NAME_EN}`)
    setMetaProperty('og:type', 'website')
    setMetaProperty('og:locale', 'ar_EG')
    setMetaProperty('og:url', canonical)
    setMetaProperty('og:title', config.title)
    setMetaProperty('og:description', config.description)
    setMetaProperty('og:image', imageUrl)
    setMetaProperty('og:image:alt', `${SITE_NAME_AR} — ${SITE_TAGLINE}`)

    setMetaName('twitter:card', 'summary_large_image')
    setMetaName('twitter:title', config.title)
    setMetaName('twitter:description', config.description)
    setMetaName('twitter:image', imageUrl)

    setLinkRel('canonical', canonical)
    setHreflang('ar', canonical)
    setHreflang('x-default', absoluteUrl('/'))
  }, [
    config.title,
    config.description,
    config.path,
    config.imagePath,
    config.extraKeywords,
  ])
}
