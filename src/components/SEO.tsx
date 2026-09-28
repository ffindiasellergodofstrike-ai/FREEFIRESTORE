import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  structuredData?: Record<string, any> | Record<string, any>[];
}

const DEFAULT_TITLE = 'Garena Store – Style for Every Day | Premium Fashion & Lifestyle';
const DEFAULT_DESC = 'Discover premium Men’s and Women’s fashion, trending apparel, and lifestyle accessories with fast delivery across India at Garena Store.';
const BASE_URL = 'https://www.garenaofficialcostume.shop';
const DEFAULT_OG_IMAGE = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200';

function updateMetaTag(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  structuredData,
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Meta description
    updateMetaTag('description', description);

    // 3. Robots
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow, noarchive, nosnippet');
      updateMetaTag('googlebot', 'noindex, nofollow, noarchive, nosnippet');
    } else {
      updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    }

    // 4. Canonical URL
    const canonicalUrl = canonical || `${BASE_URL}${location.pathname}`;
    updateCanonical(canonicalUrl);

    // 5. OpenGraph
    updateMetaTag('og:site_name', 'Garena Store', true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', image, true);

    // 6. Twitter Cards
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // 7. Structured Data (JSON-LD)
    const scriptId = 'seo-structured-data-script';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (structuredData) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.text = JSON.stringify(structuredData);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    return () => {
      // Clean up dynamic structured data script when unmounting page
      const currentScript = document.getElementById(scriptId);
      if (currentScript) {
        currentScript.remove();
      }
    };
  }, [title, description, canonical, image, type, noindex, structuredData, location.pathname]);

  return null;
}
