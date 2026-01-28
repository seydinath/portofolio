"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Network, Shield, Users, BookOpen, Palette, ExternalLink, Briefcase, Award, Target } from "lucide-react"
import Image from "next/image"
import { useInView, useCountUp } from "@/hooks/use-animations"

export function AboutSection() {
  const { ref: statsRef, isInView: statsInView } = useInView()
  
  const stats = [
    { label: "Années d'expérience", value: 4, icon: Briefcase },
    { label: "Projets réalisés", value: 20, icon: Target },
    { label: "Certifications", value: 3, icon: Award },
  ]

  const timeline = [
    {
      year: "2025",
      title: "Technicien IT",
      company: "Intelcia",
      duration: "4 ans",
      description: "Support IT, gestion d'un parc de 700 ordinateurs, maintenance infrastructure",
      icon: Network,
    },
    {
      year: "2022",
      title: "Formation développement",
      company: "Auto-apprentissage",
      duration: "6 mois",
      description: "React, TypeScript, Next.js - Formation intensive en développement web",
      icon: Code2,
    },
    {
      year: "2025",
      title: "CCNA Certified",
      company: "Cisco",
      duration: "Certification",
      description: "Architecture réseau, OSPF, VLANs, Sécurité réseau",
      icon: Award,
    },
    {
      year: "2024",
      title: "Full Stack Developer",
      company: "Freelance",
      duration: "En cours",
      description: "Projets web modernes, architecture DevOps, solutions cloud",
      icon: Users,
    },
  ]

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
          <p className="text-gray-400 max-w-2xl mx-auto">Parcours, expertise et réalisations</p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-3 gap-4 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon
            const count = useCountUp(stat.value, 2000, statsInView)
            return (
              <div key={stat.label} className="p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl text-center hover:border-emerald-500/40 transition-all duration-300 hover-lift">
                <Icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-2">{count}+</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Parcours professionnel</h3>
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500/50 to-emerald-500/0" />

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, idx) => {
                const Icon = item.icon
                const isEven = idx % 2 === 0

                return (
                  <div 
                    key={item.year} 
                    className={`flex gap-6 md:gap-12 ${isEven ? "md:flex-row-reverse" : ""} animate-fade-in-up`}
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? "md:text-right" : ""}`}>
                      <div className="p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all duration-300 group">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-5 h-5 text-emerald-400" />
                          <span className="text-sm font-semibold text-emerald-400">{item.year}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400 mb-2">{item.company} • {item.duration}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex items-start pt-2">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900 shadow-lg shadow-emerald-500/50" />
                    </div>

                    {/* Spacer for mobile */}
                    <div className="md:hidden flex-1" />
                  </div>
                )
              })}
            </div>
          </div>
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
            <h3 className="text-3xl font-bold text-white mb-3">Expertise</h3>
            <p className="text-gray-400">Domaines clés de compétence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group p-4 bg-black/20 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 rounded-lg transition-all duration-300 hover:bg-emerald-500/10 cursor-pointer hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Icon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <h4 className="font-semibold text-white group-hover:text-emerald-300 transition-colors text-sm md:text-base">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-2 mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs bg-emerald-500/15 border border-emerald-500/20 rounded text-emerald-300 group-hover:bg-emerald-500/25 transition-colors">
                        {skill}
                      </span>
                    ))}
                    {item.skills.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-500">+{item.skills.length - 3}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Certifications & Formation</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Software Engineering", type: "Formation", color: "from-blue-500 to-cyan-400", link: null },
              { name: "CCNA Certified", type: "Cisco", color: "from-emerald-500 to-green-400", link: "https://www.credly.com/users/seydina-thioub-diagne/badges#credly" },
              { name: "Network Security", type: "Spécialisation", color: "from-purple-500 to-pink-400", link: null },
            ].map((cert) => {
              const content = (
                <>
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${cert.color} p-0.5`}>
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors text-sm md:text-base">
                      {cert.name}
                    </h4>
                    {cert.link && (
                      <ExternalLink className="w-3 h-3 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <p className="text-xs text-gray-400">{cert.type}</p>
                </>
              )

              return cert.link ? (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer hover-lift animate-fade-in-up"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={cert.name}
                  className="group p-4 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-all duration-300 animate-fade-in-up"
                >
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
