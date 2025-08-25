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
                <span className="text-emerald-400 font-semibold">Software Engineer</span> et <span className="text-emerald-400 font-semibold">CCNA certifié</span>, je navigue avec aisance entre le monde des applications web modernes et les fondations réseau.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* Bulle Technicien IT Intelcia */}
                <div className="relative inline-block group">
                  <button
                    className="bg-emerald-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-300 font-semibold flex items-center gap-2 focus:outline-none"
                    tabIndex={0}
                  >
                    <Network className="w-5 h-5" />
                    Technicien IT
                    <span className="ml-2 bg-black/30 text-emerald-300 px-2 py-1 rounded text-xs">4 ans</span>
                    <span className="ml-2 bg-emerald-900/40 text-emerald-200 px-2 py-1 rounded text-xs">Intelcia</span>
                  </button>
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 mt-4 z-20 w-[340px] bg-black/90 border border-emerald-500/30 rounded-xl shadow-2xl p-6 text-left opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 scale-95 group-hover:scale-100"
                    style={{ top: '100%' }}
                  >
                    <h3 className="text-lg font-bold text-emerald-400 mb-2">Technicien IT — 4 ans chez Intelcia</h3>
                    <p className="text-gray-300 text-base leading-relaxed mb-2">
                      Gestion et maintenance d’un parc de <span className="font-semibold text-emerald-400">700 ordinateurs</span> et périphériques.
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-base space-y-1 mb-2">
                      <li>Support technique et assistance utilisateurs (dépannage, installation, configuration, formation)</li>
                      <li>Gestion proactive des incidents, résolution rapide des pannes matérielles et logicielles</li>
                      <li>Maintenance préventive et curative, optimisation des performances et de la sécurité</li>
                      <li>Déploiement d’images systèmes, gestion des mises à jour et des licences</li>
                      <li>Suivi et inventaire du parc, documentation technique et reporting</li>
                      <li>Collaboration avec les équipes réseau et sécurité pour garantir la fiabilité de l’infrastructure</li>
                      <li>Formation et accompagnement des utilisateurs pour une meilleure autonomie numérique</li>
                    </ul>
                    <p className="text-gray-300 text-base leading-relaxed">
                      <span className="italic text-emerald-400">“Un vrai chef d’orchestre du support, entre réactivité, pédagogie et organisation !”</span>
                    </p>
                  </div>
                </div>

                {/* Bulle Java Sen GeoSystems */}
                {/* Bulle Freelance New Kind of Development */}
                <div className="relative inline-block group">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 font-semibold flex items-center gap-2 focus:outline-none"
                    tabIndex={0}
                  >
                    <Palette className="w-5 h-5" />
                    Développeur Freelance
                    <span className="ml-2 bg-black/30 text-blue-300 px-2 py-1 rounded text-xs">2 ans</span>
                    <span className="ml-2 bg-blue-900/40 text-blue-200 px-2 py-1 rounded text-xs">New Kind of Development</span>
                  </button>
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 mt-4 z-20 w-[340px] bg-black/90 border border-blue-500/30 rounded-xl shadow-2xl p-6 text-left opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 scale-95 group-hover:scale-100"
                    style={{ top: '100%' }}
                  >
                    <h3 className="text-lg font-bold text-blue-400 mb-2">Développeur Freelance — 2 ans chez New Kind of Development</h3>
                    <p className="text-gray-300 text-base leading-relaxed mb-2">
                      Développement web sur <span className="font-semibold text-blue-400">PHP, WordPress, CSS</span> et gestion complète de projets digitaux.
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-base space-y-1 mb-2">
                      <li>Définition, gestion et suivi du planning, répartition des tâches</li>
                      <li>Gestion budgétaire : création et suivi des budgets, optimisation des coûts</li>
                      <li>Négociation et gestion des relations avec fournisseurs et prestataires externes</li>
                      <li>Gestion d’équipe et pilotage de projet en appliquant la méthode Agile</li>
                      <li>Développement et intégration sur WordPress, PHP, CSS</li>
                      <li>Veille à la rentabilité, la qualité et la satisfaction client</li>
                    </ul>
                    <p className="text-gray-300 text-base leading-relaxed">
                      <span className="italic text-blue-400">“Freelance, chef d’orchestre digital et stratège du web !”</span>
                    </p>
                  </div>
                </div>
                <div className="relative inline-block group">
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 font-semibold flex items-center gap-2 focus:outline-none"
                    tabIndex={0}
                  >
                    <Code2 className="w-5 h-5" />
                    Développeur Java
                    <span className="ml-2 bg-black/30 text-green-300 px-2 py-1 rounded text-xs">1 an</span>
                    <span className="ml-2 bg-green-900/40 text-green-200 px-2 py-1 rounded text-xs">Sen GeoSystems</span>
                  </button>
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 mt-4 z-20 w-[340px] bg-black/90 border border-green-500/30 rounded-xl shadow-2xl p-6 text-left opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 scale-95 group-hover:scale-100"
                    style={{ top: '100%' }}
                  >
                    <h3 className="text-lg font-bold text-green-400 mb-2">Développeur Java — 1 an chez Sen GeoSystems</h3>
                    <p className="text-gray-300 text-base leading-relaxed mb-2">
                      Participation à la mise en place d’une application de <span className="font-semibold text-green-400">surveillance et géolocalisation</span>.
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-base space-y-1 mb-2">
                      <li>Développement backend et frontend en Java (Spring, JavaFX)</li>
                      <li>Intégration de modules de cartographie et tracking GPS</li>
                      <li>Gestion des bases de données (PostgreSQL, MySQL)</li>
                      <li>Implémentation d’alertes et de rapports automatisés</li>
                      <li>Collaboration avec l’équipe projet pour le recueil des besoins et la validation fonctionnelle</li>
                      <li>Optimisation des performances et de la sécurité de l’application</li>
                    </ul>
                    <p className="text-gray-300 text-base leading-relaxed">
                      <span className="italic text-green-400">“Un projet innovant, entre code, cartographie et esprit d’équipe !”</span>
                    </p>
                  </div>
                </div>
              </div>

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
