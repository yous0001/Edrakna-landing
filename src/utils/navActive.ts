/** Resolve active nav state for RTL site links (`/`, `/about`, `/#programs`, etc.). */
export function isNavItemActive(pathname: string, hash: string, to: string): boolean {
  const h = hash || ''
  if (to === '/') {
    return pathname === '/' && (h === '' || h === '#home')
  }
  if (to.startsWith('/#')) {
    return pathname === '/' && h === to.slice(1)
  }
  return pathname === to
}
