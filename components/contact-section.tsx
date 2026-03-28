"use client"

import { useState } from "react"
import { Send, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "seydinadiagne2@outlook.com",
    href: "mailto:seydinadiagne2@outlook.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+221 77 227 49 20",
    href: "tel:+221772274920",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Zone de Captage, Dakar, Sénégal",
    href: "#",
  },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm text-muted-foreground font-mono">06</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Travaillons <span className="text-muted-foreground">ensemble</span>
          </h2>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Vous avez un projet en tête ? Discutons-en. Je suis disponible pour des missions 
          de développement web, support IT ou consulting technique.
        </p>

        <div className="grid lg:grid-cols-[1fr,400px] gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    placeholder="Votre nom"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Sujet
                </label>
                <Input
                  id="subject"
                  placeholder="Projet de développement web"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Envoyer le message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Link
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:bg-muted/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg border border-border bg-muted group-hover:bg-foreground group-hover:text-background transition-colors">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-medium text-foreground">{info.value}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>

            {/* Availability card */}
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-foreground">Disponible</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Actuellement disponible pour des missions freelance, CDI ou collaborations techniques.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Langues :</span>
                <span className="font-medium text-foreground">Français, Anglais</span>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="p-6 rounded-2xl border border-border bg-foreground text-background">
              <h3 className="font-semibold mb-4">Connectons-nous sur LinkedIn</h3>
              <p className="text-sm text-background/70 mb-4">
                Retrouvez mon parcours complet et restons en contact.
              </p>
              <Button variant="secondary" size="sm" asChild>
                <Link href="https://www.linkedin.com/in/sthdiagne" target="_blank" rel="noopener noreferrer">
                  Voir mon profil
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
