import { Inter } from "next/font/google";
import Script from "next/script";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Heaps Smart - Technology for Good</title>

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
