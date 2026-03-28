import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const footerLinks = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Formation", href: "#formation" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sthdiagne", label: "LinkedIn" },
  { icon: Mail, href: "mailto:seydinadiagne2@outlook.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr,auto]">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background font-bold text-sm">SD</span>
              </div>
              <span className="font-semibold text-foreground">Seydina Diagne</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Développeur Full Stack et Spécialiste IT. Certifié CCNA, 
              spécialisé en React, Node.js et infrastructures réseau.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Seydina Thioub Diagne. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground">
            Conçu et développé avec{" "}
            <span className="text-foreground">passion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
