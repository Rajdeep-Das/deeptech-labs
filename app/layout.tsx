import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://deeptechlabs.in'),
  title: "DeepTechLabs — Cloud Health & SaaS Integrations",
  description: "Stop burning money & time on cloud that doesn't work. Fixed-price cloud audits, 2-week integration sprints, and production-ready SaaS backends. Trusted by startups in US, UK & AU.",
  keywords: "cloud health audit, cloud cost optimization, SaaS integrations, cloud migration, AWS optimization, Azure optimization",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/icon.svg',
  },
  openGraph: {
    title: "DeepTechLabs — Cloud Health & SaaS Integrations",
    description: "Stop burning money & time on cloud that doesn't work. Fixed-price cloud audits, 2-week integration sprints, and production-ready SaaS backends.",
    type: "website",
    url: "https://deeptechlabs.in",
    siteName: "DeepTechLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepTechLabs — Cloud Health & SaaS Integrations",
    description: "Stop burning money & time on cloud that doesn't work. Fixed-price cloud audits, 2-week integration sprints, and production-ready SaaS backends.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        {/* Umami Analytics - Primary */}
        <script
          defer
          src="https://analytics.rajdeep-das.com/script.js"
          data-website-id="811b95a1-9ebf-45f9-a885-cbca7aa9ae22"
          data-do-not-track="true"
          data-cache="true"
        />

        {/* Google Analytics 4 - Backup (Optional) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    cookie_flags: 'SameSite=None;Secure',
                    anonymize_ip: true
                  });
                `,
              }}
            />
          </>
        )}

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "DeepTechLabs",
              "description": "Cloud Health & SaaS Integration Consulting for Series A Startups",
              "url": "https://deeptechlabs.in",
              "logo": "https://deeptechlabs.in/logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Multiple",
                "addressRegion": "US, UK, EU, AU, CA"
              },
              "serviceArea": [
                {
                  "@type": "Country",
                  "name": "United States"
                },
                {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
                {
                  "@type": "Country",
                  "name": "Australia"
                },
                {
                  "@type": "Country",
                  "name": "Canada"
                }
              ],
              "priceRange": "$300-$3000",
              "paymentAccepted": "Credit Card, Bank Transfer",
              "currenciesAccepted": "USD",
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                "https://deeptechlabs.in"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cloud Infrastructure Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cloud Health Audit",
                      "description": "7-day comprehensive cloud infrastructure audit identifying cost savings and optimization opportunities"
                    },
                    "price": "300",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2025-12-31",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Integration Sprint",
                      "description": "2-week focused sprint to rebuild or stabilize critical SaaS integrations"
                    },
                    "price": "1200",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2025-12-31",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SaaS Backend Starter",
                      "description": "3-4 week comprehensive SaaS backend development with multi-tenant auth, billing, and APIs"
                    },
                    "price": "3000",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2025-12-31",
                    "availability": "https://schema.org/InStock"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "1",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Dr. Sushanta Bhanja"
                  },
                  "reviewBody": "DeepTechLabs helped us cut our AWS costs from ~$5,800 to ~$1,400 per year — a ~75-80% reduction. They also took full ownership of our AWS cloud and Kubernetes clusters, which freed our small team to focus on building AtomsLearning instead of firefighting infra issues.",
                  "publisher": {
                    "@type": "Organization",
                    "name": "AtomsLearning"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
