"use client"

import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from "lucide-react"

export function Footer() {
  const navLinks = [
    { label: "Accueil", href: "#home" },
    { label: "À Propos", href: "#about" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/seydinath", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sthdiagne/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:seydinadiagne2@outlook.com", label: "Email" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-t from-black via-slate-900/50 to-transparent border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Bio */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
              Seydina Th.Diagne
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Ingénieur Full Stack passionné par les solutions modernes, la sécurité réseau et le code propre.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 bg-black/30 border border-gray-500/20 rounded-lg hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-emerald-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-gray-400 hover:text-emerald-300 transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {label}
                    <ArrowUp className="w-3 h-3 opacity-0 group-hover:opacity-100 -rotate-90 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/seydinath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-emerald-300 transition-colors duration-300 inline-flex items-center gap-1 group"
                >
                  GitHub
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sthdiagne/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-emerald-300 transition-colors duration-300 inline-flex items-center gap-1 group"
                >
                  LinkedIn
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:seydinadiagne2@outlook.com"
                  className="text-sm text-gray-400 hover:text-emerald-300 transition-colors duration-300 inline-flex items-center gap-1 group"
                >
                  Contact
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-500/10 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-xs md:text-sm text-gray-500">
              © 2024 Seydina Th.Diagne. Tous droits réservés.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Conçu avec React & TypeScript • Déployé sur Vercel
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group p-2 bg-black/30 border border-gray-500/20 rounded-lg hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all duration-300"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-emerald-300 transition-colors" />
          </button>
        </div>
      </div>

      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}
