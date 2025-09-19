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
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8IS0tIENhcmJvbi1jb21wbGlhbnQgZmF2aWNvbiAtLT4KICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI2IiBmaWxsPSIjMGY2MmZlIi8+CiAgCiAgPCEtLSBOZXR3b3JrIHRvcG9sb2d5IC0tPgogIDxnIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiPgogICAgPCEtLSBDZW50cmFsIG5vZGUgLS0+CiAgICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIyLjUiLz4KICAgIDwhLS0gU2F0ZWxsaXRlIG5vZGVzIC0tPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjEwIiByPSIxLjUiLz4KICAgIDxjaXJjbGUgY3g9IjIzIiBjeT0iMTAiIHI9IjEuNSIvPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjIyIiByPSIxLjUiLz4KICAgIDxjaXJjbGUgY3g9IjIzIiBjeT0iMjIiIHI9IjEuNSIvPgogIDwvZz4KCiAgPCEtLSBDb25uZWN0aW9uIGxpbmVzIC0tPgogIDxnIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC44IiBvcGFjaXR5PSIwLjYiPgogICAgPGxpbmUgeDE9IjE2IiB5MT0iMTYiIHgyPSI5IiB5Mj0iMTAiLz4KICAgIDxsaW5lIHgxPSIxNiIgeTE9IjE2IiB4Mj0iMjMiIHkyPSIxMCIvPgogICAgPGxpbmUgeDE9IjE2IiB5MT0iMTYiIHgyPSI5IiB5Mj0iMjIiLz4KICAgIDxsaW5lIHgxPSIxNiIgeTE9IjE2IiB4Mj0iMjMiIHkyPSIyMiIvPgogIDwvZz4KCiAgPCEtLSBBY2NlbnQgZWxlbWVudHMgLS0+CiAgPGcgZmlsbD0iIzc4YTlmZiIgb3BhY2l0eT0iMC40Ij4KICAgIDxyZWN0IHg9IjUiIHk9IjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KICAgIDxyZWN0IHg9IjI1IiB5PSI1IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CiAgICA8cmVjdCB4PSI1IiB5PSIyNSIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgogICAgPHJlY3QgeD0iMjUiIHk9IjI1IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CiAgPC9nPgo8L3N2Zz4K" />

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
                  "reviewBody": "DeepTechLabs helped us cut our AWS costs from $5,200 to $1,390 per month — a 73% reduction. They also took full ownership of our AWS cloud and Kubernetes clusters, which freed our small team to focus on building AtomsLearning instead of firefighting infra issues.",
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
