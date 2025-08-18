import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Seydina Th.Diagne - Software Engineer & CCNA Certified",
  description:
    "Portfolio de Seydina Th.Diagne - Développeur Full Stack Premium et Expert Réseau CCNA certifié. Spécialisé en React, TypeScript, architecture réseau et sécurité. Basé à Dakar, Sénégal.",
  keywords:
    "Seydina Diagne, Software Engineer, CCNA, React, TypeScript, Développeur Full Stack, Réseau, Sécurité, Dakar, Sénégal",
  authors: [{ name: "Seydina Th.Diagne" }],
  creator: "Seydina Th.Diagne",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://seydina-portfolio.vercel.app",
    title: "Seydina Th.Diagne - Software Engineer & CCNA",
    description: "Portfolio professionnel - Développeur Full Stack et Expert Réseau",
    siteName: "Portfolio Seydina Diagne",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seydina Th.Diagne - Software Engineer",
    description: "Développeur Full Stack Premium et Expert Réseau CCNA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>

        {/* Schema.org JSON-LD */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Seydina Th.Diagne",
              jobTitle: "Software Engineer",
              description: "Développeur Full Stack Premium et Expert Réseau CCNA certifié",
              url: "https://seydina-portfolio.vercel.app",
              sameAs: ["https://github.com/seydinath", "https://www.linkedin.com/in/sthdiagne/"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dakar",
                addressCountry: "SN",
              },
              email: "seydinadiagne2@outlook.com",
              telephone: "+221772274920",
              knowsAbout: [
                "React",
                "TypeScript",
                "CCNA",
                "Network Security",
                "Full Stack Development",
                "OSPF",
                "VLANs",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
