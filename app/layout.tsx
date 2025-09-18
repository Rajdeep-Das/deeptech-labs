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
      <head>
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDAxZDZjIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjMGY2MmZlIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzc4YTlmZiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdyIgY3g9IjUwJSIgY3k9IjMwJSIgcj0iNzAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzc4YTlmZiIgc3RvcC1vcGFjaXR5PSIwLjMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAxZDZjIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgoKICA8IS0tIE1haW4gc2hhcGUgLSBhYnN0cmFjdCBjbG91ZC9uZXR3b3JrIGdlb21ldHJ5IC0tPgogIDxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgcng9IjYiIGZpbGw9InVybCgjYmcpIi8+CiAgPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNiIgZmlsbD0idXJsKCNnbG93KSIvPgoKICA8IS0tIE5ldHdvcmsgbm9kZXMgYW5kIGNvbm5lY3Rpb25zIC0tPgogIDxnIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiPgogICAgPCEtLSBDZW50cmFsIG5vZGUgLS0+CiAgICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIyLjUiLz4KICAgIDwhLS0gU2F0ZWxsaXRlIG5vZGVzIC0tPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjEwIiByPSIxLjUiLz4KICAgIDxjaXJjbGUgY3g9IjIzIiBjeT0iMTAiIHI9IjEuNSIvPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjIyIiByPSIxLjUiLz4KICAgIDxjaXJjbGUgY3g9IjIzIiBjeT0iMjIiIHI9IjEuNSIvPgogIDwvZz4KCiAgPCEtLSBDb25uZWN0aW9uIGxpbmVzIC0tPgogIDxnIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC44IiBvcGFjaXR5PSIwLjYiPgogICAgPGxpbmUgeDE9IjE2IiB5MT0iMTYiIHgyPSI5IiB5Mj0iMTAiLz4KICAgIDxsaW5lIHgxPSIxNiIgeTE9IjE2IiB4Mj0iMjMiIHkyPSIxMCIvPgogICAgPGxpbmUgeDE9IjE2IiB5MT0iMTYiIHgyPSI5IiB5Mj0iMjIiLz4KICAgIDxsaW5lIHgxPSIxNiIgeTE9IjE2IiB4Mj0iMjMiIHkyPSIyMiIvPgogIDwvZz4KCiAgPCEtLSBBY2NlbnQgZWxlbWVudHMgZm9yIGRlcHRoIC0tPgogIDxnIGZpbGw9IiM3OGE5ZmYiIG9wYWNpdHk9IjAuNCIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxyZWN0IHg9IjUiIHk9IjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiLz4KICAgIDxyZWN0IHg9IjI1IiB5PSI1IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CiAgICA8cmVjdCB4PSI1IiB5PSIyNSIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPgogICAgPHJlY3QgeD0iMjUiIHk9IjI1IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+CiAgPC9nPgo8L3N2Zz4K" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
