import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Seydina Thioub Diagne - Développeur Full Stack & Spécialiste IT',
  description: 'Portfolio de Seydina Thioub Diagne - Développeur Full Stack certifié CCNA avec 4 ans d\'expérience en support technique, réseaux et cybersécurité. Spécialisé en React, Node.js, PHP et SQL.',
  icons: {
    icon: '/icon-dark-32x32.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
