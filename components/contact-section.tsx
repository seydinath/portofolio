"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Créer le lien mailto avec les données du formulaire
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`)
      const body = encodeURIComponent(`
Nom: ${formData.name}
Email: ${formData.email}
Sujet: ${formData.subject}

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
        setFormData({ name: "", email: "", subject: "", message: "" })

        // Reset après 3 secondes
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
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
            <span className="text-emerald-400 font-semibold">élégance visuelle</span> ? Discutons de votre projet et
            créons quelque chose d'exceptionnel.
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

            <div className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-gray-400 text-sm">
                  <span className="text-emerald-400 font-semibold">Spécialités :</span> Front-End Development •
                  Architecture Full Stack • Sécurité Réseau
                </p>
              </div>
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
                  content: "Dakar, Sénégal",
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
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-black/20 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Votre email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-black/20 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      name="subject"
                      placeholder="Sujet"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-black/20 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Votre message..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-black/20 border-emerald-500/30 text-white placeholder:text-gray-500 focus:border-emerald-500/50 focus:ring-emerald-500/20 resize-none"
                    />
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
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
