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
  title: "DeepTechLabs — Cloud Health & SaaS Integrations",
  description: "Stop burning money & time on cloud that doesn't work. Fixed-price cloud audits, 2-week integration sprints, and production-ready SaaS backends. Trusted by startups in US, UK & AU.",
  keywords: "cloud health audit, cloud cost optimization, SaaS integrations, cloud migration, AWS optimization, Azure optimization",
  openGraph: {
    title: "DeepTechLabs — Cloud Health & SaaS Integrations",
    description: "Stop burning money & time on cloud that doesn't work. Fixed-price cloud audits, 2-week integration sprints, and production-ready SaaS backends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
