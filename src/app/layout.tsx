import { Inter } from "next/font/google";
import Script from "next/script";

import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Heaps Smart - Technology for Good</title>

        <meta
          name="description"
          content="Heaps Smart is a creative technology agency helping non-profits and purpose-driven organizations by providing digital solutions, including AI, web, and mobile app development."
        />
        <meta property="og:title" content="Heaps Smart - Technology for Good" />
        <meta
          property="og:description"
          content="Heaps Smart is a creative technology agency helping non-profits and purpose-driven organizations by providing digital solutions, including AI, web, and mobile app development."
        />
        <meta property="og:image" content="/assets/img/hinchinbrook.webp" />
        <meta property="og:url" content="https://www.heaps-smart.com" />
        <meta property="og:type" content="website" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />

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
      <body className={inter.className}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
