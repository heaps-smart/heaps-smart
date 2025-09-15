import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
import Script from "next/script";
import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Heaps Smart - Technology for Good",
    template: "%s | Heaps Smart"
  },
  description: "Heaps Smart is a creative technology agency helping non-profits and purpose-driven organisations by providing digital solutions, including AI, web, and mobile app development.",
  openGraph: {
    title: "Heaps Smart - Technology for Good",
    description: "Heaps Smart is a creative technology agency helping non-profits and purpose-driven organisations by providing digital solutions, including AI, web, and mobile app development.",
    url: "https://www.heaps-smart.com",
    siteName: "Heaps Smart",
    images: [
      {
        url: "https://www.heaps-smart.com/assets/img/heaps-smart-logo-og.png",
        width: 1200,
        height: 630,
        alt: "Heaps Smart - Technology for Good",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heaps Smart - Technology for Good",
    description: "Heaps Smart is a creative technology agency helping non-profits and purpose-driven organisations by providing digital solutions, including AI, web, and mobile app development.",
    images: ["https://www.heaps-smart.com/assets/img/heaps-smart-logo-og.png"],
  },
  icons: {
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
    icon: [
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GSZWGYD9XD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GSZWGYD9XD');
          `}
        </Script>
      </head>
      <body className="font-inter">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
