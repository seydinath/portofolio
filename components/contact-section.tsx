"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, Send, CheckCircle, Clock, DollarSign, Globe } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Le nom est requis"
    if (!formData.email.trim()) newErrors.email = "L'email est requis"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email invalide"
    if (!formData.subject.trim()) newErrors.subject = "Le sujet est requis"
    if (!formData.message.trim()) newErrors.message = "Le message est requis"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Créer le lien mailto avec les données du formulaire
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`)
      const body = encodeURIComponent(`
Nom: ${formData.name}
Email: ${formData.email}
Sujet: ${formData.subject}
Type de projet: ${formData.projectType || "Non spécifié"}
Budget: ${formData.budget || "À discuter"}
Délais: ${formData.timeline || "Flexible"}

Message:
${formData.message}

---
Envoyé depuis le portfolio
      `)

      const mailtoLink = `mailto:seydinadiagne2@outlook.com?subject=${subject}&body=${body}`

      // Ouvrir le client email
      window.location.href = mailtoLink

      // Simuler un délai pour l'UX
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "", projectType: "", budget: "", timeline: "" })

        // Reset après 5 secondes
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }, 1000)
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-green-300 bg-clip-text text-transparent">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Prêt à concevoir ensemble des solutions qui allient{" "}
            <span className="text-emerald-400 font-semibold">excellence technique</span> et{" "}
            <span className="text-emerald-400 font-semibold">élégance visuelle</span> ? Discutons de votre projet !
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-400 mx-auto mt-6 rounded-full shadow-lg shadow-emerald-500/50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Restons en contact</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Je suis toujours ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour
                discuter de votre projet.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Réponse rapide</div>
                <div className="text-gray-400 text-xs">Sous 24h</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4 text-center">
                <DollarSign className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Devis gratuit</div>
                <div className="text-gray-400 text-xs">Sans engagement</div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "seydinadiagne2@outlook.com",
                  href: "mailto:seydinadiagne2@outlook.com",
                },
                {
                  icon: Phone,
                  title: "Téléphone",
                  content: "+221 77 227 49 20",
                  href: "tel:+22177227492",
                },
                {
                  icon: MapPin,
                  title: "Localisation",
                  content: "Dakar, Sénégal 🇸🇳",
                  href: "#",
                },
                {
                  icon: Globe,
                  title: "Langues",
                  content: "Français, Anglais, Wolof",
                  href: "#",
                },
              ].map(({ icon: Icon, title, content, href }) => (
                <a
                  key={title}
                  href={href}
                  className="group flex items-center space-x-4 p-4 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-3 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{title}</h4>
                    <p className="text-gray-400 group-hover:text-emerald-400 transition-colors duration-300">
                      {content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-semibold">Disponible pour missions freelance</span>
              </div>
              <p className="text-gray-400 text-sm">
                Spécialités : Développement Full Stack • Architecture Réseau • Sécurité CCNA
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-gray-400">
                    Votre client email s'est ouvert avec le message pré-rempli. Je vous répondrai rapidement !
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Votre nom *"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`bg-black/20 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500/50 focus:ring-emerald-500/20 ${
                          errors.name ? "border-red-500/50" : ""
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Votre email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`bg-black/20 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500/50 focus:ring-emerald-500/20 ${
                          errors.email ? "border-red-500/50" : ""
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <Input
                      name="subject"
                      placeholder="Sujet *"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`bg-black/20 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500/50 focus:ring-emerald-500/20 ${
                        errors.subject ? "border-red-500/50" : ""
                      }`}
                    />
                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Select onValueChange={(value) => handleSelectChange("projectType", value)}>
                      <SelectTrigger className="bg-black/20 border-emerald-500/30 text-white focus:border-emerald-500/50">
                        <SelectValue placeholder="Type de projet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Site Web</SelectItem>
                        <SelectItem value="app">Application</SelectItem>
                        <SelectItem value="network">Réseau</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select onValueChange={(value) => handleSelectChange("budget", value)}>
                      <SelectTrigger className="bg-black/20 border-emerald-500/30 text-white focus:border-emerald-500/50">
                        <SelectValue placeholder="Budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lessThan5k">{"< 500k FCFA"}</SelectItem>
                        <SelectItem value="5kTo10k">500k - 1M FCFA</SelectItem>
                        <SelectItem value="10kTo25k">1M - 2.5M FCFA</SelectItem>
                        <SelectItem value="moreThan25k">{"> 2.5M FCFA"}</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select onValueChange={(value) => handleSelectChange("timeline", value)}>
                      <SelectTrigger className="bg-black/20 border-emerald-500/30 text-white focus:border-emerald-500/50">
                        <SelectValue placeholder="Délais" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (&lt; 1 mois)</SelectItem>
                        <SelectItem value="normal">Normal (1-3 mois)</SelectItem>
                        <SelectItem value="flexible">Flexible (&gt; 3 mois)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Décrivez votre projet... *"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`bg-black/20 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500/50 focus:ring-emerald-500/20 resize-none ${
                        errors.message ? "border-red-500/50" : ""
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white border-0 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">* Champs obligatoires. Réponse garantie sous 24h.</p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
