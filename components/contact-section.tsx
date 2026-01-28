"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, MessageSquare, Zap } from "lucide-react"

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "seydinadiagne2@outlook.com",
      href: "mailto:seydinadiagne2@outlook.com",
      action: "M'envoyer un email",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+221 77 227 49 20",
      href: "tel:+221772274920",
      action: "Appeler maintenant",
      color: "from-emerald-500 to-green-400",
    },
    {
      icon: MessageSquare,
      title: "LinkedIn",
      value: "Discutons professionnellement",
      href: "https://www.linkedin.com/in/sthdiagne/",
      action: "Voir mon profil",
      color: "from-purple-500 to-pink-400",
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-400 to-green-300 bg-clip-text text-transparent">
            Discutons de votre projet
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Disponible pour missions freelance • Réponse rapide sous 24h
          </p>
        </div>

        {/* Quick Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/20 border border-emerald-500/20 rounded-full">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-300">Réponse 24h</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-black/20 border border-emerald-500/20 rounded-full">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-300">Devis gratuit</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-black/20 border border-emerald-500/20 rounded-full">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-300">Dakar, Sénégal</span>
          </div>
        </div>

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map(({ icon: Icon, title, value, href, action, color }, idx) => (
            <div
              key={title}
              className="group relative p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 overflow-hidden hover-lift animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 mb-4 min-h-[40px]">{value}</p>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-block w-full text-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 text-sm font-medium"
                >
                  {action}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-3">Prêt à collaborer ?</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Que ce soit pour du développement web, de l'architecture réseau ou de la sécurité, je suis là pour transformer vos idées en réalité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white border-0 px-6 py-3 font-semibold rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover-glow"
            >
              <a href="mailto:seydinadiagne2@outlook.com">
                <Mail className="w-4 h-4 mr-2" />
                Envoyer un message
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-gray-500/30 text-gray-300 hover:bg-emerald-500/10 hover:border-emerald-400/50 hover:text-emerald-300 px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover-lift"
            >
              <a href="tel:+221772274920">
                <Phone className="w-4 h-4 mr-2" />
                Appeler
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
