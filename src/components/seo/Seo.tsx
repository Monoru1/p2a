import { useEffect } from 'react';
function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let meta = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.append(meta);
  }
  meta.setAttribute('content', content);
}

export function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    const fullTitle = `${title} | P2A Formation`;
    const canonicalUrl = new URL(window.location.pathname, window.location.origin).href;
    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', `${window.location.origin}/p2a-logo.png`);
    upsertMeta('property', 'og:image:alt', 'P2A Formation');
    upsertMeta('name', 'twitter:card', 'summary');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.append(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [title, description]);

  return null;
}
