import "./globals.css";
import { Suspense } from "react";

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

import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NFT8SKWB');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NFT8SKWB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Footer />
        </div>
      </body>
    </html>
  );
}