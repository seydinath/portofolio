
import "./globals.css";
import { Suspense } from "react";
import Script from "next/script";

export const metadata = {
  title: "Seydina Th.Diagne - Software Engineer & CCNA Certified",
  description: "Portfolio de Seydina Th.Diagne - Développeur Full Stack Premium et Expert Réseau CCNA certifié.",
};

function Footer() {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-900 text-center border-t border-gray-200 dark:border-gray-800">
      <div className="text-xs text-gray-400">© 2025 Seydinath. Tous droits réservés.</div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WH7E4SF2R9"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WH7E4SF2R9');
          `}
        </Script>
      </head>
      <body>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}