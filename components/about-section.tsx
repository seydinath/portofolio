"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Network, Shield, Users, BookOpen, Palette } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const expertise = [
    {
      icon: Code2,
      title: "Développement Full Stack",
      description:
        "React, TypeScript, Sass CSS - Je façonne des environnements maintenables où chaque ligne a du sens.",
      skills: ["React", "TypeScript", "Node.js", "Sass CSS", "Next.js"],
    },
    {
      icon: Network,
      title: "Architecture Réseau",
      description: "CCNA certifié, je navigue entre OSPF, VLANs, ACLs pour des infrastructures robustes.",
      skills: ["OSPF", "VLANs", "ACLs", "LAN/WAN", "Network Security"],
    },
    {
      icon: Shield,
      title: "Sécurité & Fiabilité",
      description: "Des systèmes qui résistent aux imprévus, sécurisés par design et pensés pour durer.",
      skills: ["Security", "Monitoring", "DevOps", "CI/CD", "Testing"],
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Chaque pixel compte. Je soigne l'expérience utilisateur avec une attention aux détails.",
      skills: ["UI/UX", "Design Systems", "Responsive", "Accessibility", "Animation"],
    },
    {
      icon: BookOpen,
      title: "Documentation & Formation",
      description: "Vulgariser, documenter, transmettre - je rends la technique accessible et inspirante.",
      skills: ["Technical Writing", "Mentoring", "Training", "Documentation", "Communication"],
    },
    {
      icon: Users,
      title: "Leadership Technique",
      description: "Stratégie visuelle et technique - je joue sur plusieurs tableaux avec expertise.",
      skills: ["Team Lead", "Architecture", "Strategy", "Code Review", "Best Practices"],
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-green-300 bg-clip-text text-transparent">
            À Propos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-400 mx-auto mt-6 rounded-full shadow-lg shadow-emerald-500/50" />
        </div>

        {/* First Part - Introduction with Photo aligned to specific text */}
        <div className="mb-12">
          {/* Text with Photo - Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
            {/* Text Content - Left Side */}
            <div className="space-y-6">
              <p className="text-xl text-gray-400 leading-relaxed">
                <span className="text-emerald-400 font-semibold">Software Engineer</span> et{" "}
                <span className="text-emerald-400 font-semibold">CCNA certifié</span>, je navigue avec aisance entre le
                monde des applications web modernes et les fondations réseau.
              </p>

              {/* Philosophy Quote */}
              <blockquote className="text-lg md:text-xl font-light text-gray-300 italic leading-relaxed border-l-4 border-emerald-500/50 pl-6 py-4">
                "Je ne code pas pour remplir des pages — je façonne des environnements maintenables, sécurisés, et
                élégants, où <span className="text-emerald-400 font-semibold">chaque ligne a du sens</span> et{" "}
                <span className="text-emerald-400 font-semibold">chaque ombre CSS souligne une intention</span>."
              </blockquote>
            </div>

            {/* Profile Photo - Right Side, aligned with text */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500 rounded-2xl p-1 animate-pulse">
                    <div className="w-full h-full bg-black rounded-2xl" />
                  </div>

                  {/* Profile Image */}
                  <div className="absolute inset-2 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/profile.jpg"
                      alt="Seydina Th.Diagne - Software Engineer"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-green-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Floating Elements */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-emerald-400 rounded-full animate-bounce opacity-80" />
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-green-300 rounded-full animate-pulse opacity-60" />
                  <div className="absolute top-1/4 -left-4 w-3 h-3 bg-emerald-300 rounded-full animate-ping opacity-40" />
                </div>

                {/* Professional Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-2">
                  <span className="text-emerald-400 font-semibold text-sm">CCNA Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Stats - Separate row below */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div className="text-center p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all duration-300">
                <div className="text-3xl font-bold text-emerald-400 mb-2">5+</div>
                <div className="text-gray-400">Années d'Expérience</div>
              </div>
              <div className="text-center p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all duration-300">
                <div className="text-3xl font-bold text-emerald-400 mb-2">15+</div>
                <div className="text-gray-400">Technologies Maîtrisées</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Part - Expertise Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Domaines d'Expertise</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Une approche holistique alliant développement moderne, architecture réseau et excellence technique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <Card
                key={item.title}
                className={`group bg-black/20 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors duration-300 mr-4">
                      <item.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors duration-300 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Third Part - Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Certifications & Formation</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Software Engineering", type: "Formation", color: "from-blue-500 to-cyan-400" },
              { name: "CCNA Certified", type: "Cisco", color: "from-emerald-500 to-green-400" },
              { name: "Network Security", type: "Spécialisation", color: "from-purple-500 to-pink-400" },
            ].map((cert) => (
              <div
                key={cert.name}
                className="group p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} p-0.5`}>
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-400">{cert.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
