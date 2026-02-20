import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const DEFAULT_IMAGE = '/media-clear/home-ceteos.png'; // Default OG Image
const SITE_URL = 'https://www.ceteos.lat';
const SITE_NAME = 'Ceteos | Compañia De Soluciones Tecnológicas';

export const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords = 'software, infraestructura, soporte tecnico, licencias, tepic, sinaloa, jalisco, ceteos', 
  image = DEFAULT_IMAGE, 
  url = SITE_URL, 
  type = 'website',
  author = 'Ceteos Technologies Company'
}) => {
  
  const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const schemaOrg = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ceteos Technologies Company",
      "url": SITE_URL,
      "logo": `${SITE_URL}/media-clear/logo-ceteos.png`,
      "sameAs": [
        "https://www.facebook.com/ceteos.mx",
        "https://twitter.com/ceteos",
        "https://www.instagram.com/ceteos.mx",
        "https://www.linkedin.com/company/ceteos"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+52-56-3014-6357",
        "contactType": "customer service",
        "areaServed": "MX",
        "availableLanguage": ["es", "en"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE_NAME,
      "url": SITE_URL,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${SITE_URL}/?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>
    </Helmet>
  );
};
