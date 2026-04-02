"use client"

import { useRef, useEffect, useState } from "react"
import { Code2, Server, Network, Shield, Monitor, Users, FileSpreadsheet, Globe, MessageSquare, Brain, Lightbulb, Heart, Target, Zap, Award } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/use-animations"

const skillCategories = [
  {
    icon: Code2,
    title: "Développement Frontend",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
    description: "Création d'interfaces utilisateur modernes, réactives et accessibles avec les technologies web actuelles.",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 85 },
      { name: "WordPress", level: 85 },
    ],
  },
  {
    icon: Server,
    title: "Développement Backend",
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.3)",
    description: "Architecture de serveurs robustes, APIs performantes et bases de données optimisées.",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "PHP", level: 80 },
      { name: "MySQL / MariaDB", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "API REST / GraphQL", level: 80 },
    ],
  },
  {
    icon: Network,
    title: "Réseaux & Infrastructure CCNA",
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.3)",
    description: "Configuration et administration d'infrastructures réseau complexes. Certifié CCNA (3 modules).",
    skills: [
      { name: "Configuration Cisco IOS", level: 90 },
      { name: "VLAN / Routage inter-VLAN", level: 85 },
      { name: "Protocoles OSPF / RIP", level: 85 },
      { name: "Adressage IPv4/IPv6 / Subnetting", level: 90 },
      { name: "Configuration LAN/WAN", level: 85 },
    ],
  },
  {
    icon: Shield,
    title: "Cybersécurité & Sécurité Réseau",
    color: "from-red-500 to-orange-500",
    glowColor: "rgba(239, 68, 68, 0.3)",
    description: "Mise en place de solutions de sécurité, protection des infrastructures et sensibilisation des équipes.",
    skills: [
      { name: "VPN / IPSec", level: 85 },
      { name: "ACL (Access Control Lists)", level: 85 },
      { name: "DHCP Snooping", level: 80 },
      { name: "Sécurisation WLAN", level: 80 },
      { name: "Redondance réseau", level: 80 },
    ],
  },
  {
    icon: Monitor,
    title: "Support IT & Administration",
    color: "from-yellow-500 to-amber-500",
    glowColor: "rgba(234, 179, 8, 0.3)",
    description: "Pilotage du support technique avec un taux de résolution de 95% sous 24h sur 750+ postes.",
    skills: [
      { name: "Windows Server / AD", level: 90 },
      { name: "Office 365 Administration", level: 95 },
      { name: "DHCP / DNS", level: 90 },
      { name: "Gestion de parc informatique", level: 90 },
      { name: "Ticketing / Documentation", level: 85 },
    ],
  },
  {
    icon: Users,
    title: "Gestion de Projet & Leadership",
    color: "from-teal-500 to-cyan-500",
    glowColor: "rgba(20, 184, 166, 0.3)",
    description: "Animation de sessions de formation, gestion d'équipe et conduite de projets en méthode Agile.",
    skills: [
      { name: "Méthodologie Agile / Scrum", level: 85 },
      { name: "Git / GitHub", level: 90 },
      { name: "Formation & Pédagogie", level: 90 },
      { name: "Gestion budgétaire", level: 75 },
      { name: "Coordination d'équipe", level: 85 },
    ],
  },
]

const softSkills = [
  { 
    name: "Communication pédagogique", 
    description: "Capacité à vulgariser des sujets complexes et former efficacement différents publics (100+ collaborateurs formés)",
    icon: MessageSquare 
  },
  { 
    name: "Leadership collaboratif", 
    description: "Aptitude à motiver, encadrer et accompagner les équipes vers leurs objectifs avec les principes Agile",
    icon: Users 
  },
  { 
    name: "Résolution de problèmes", 
    description: "Esprit analytique et pragmatique pour trouver des solutions rapides et durables (95% tickets résolus sous 24h)",
    icon: Brain 
  },
  { 
    name: "Adaptabilité multiculturelle", 
    description: "Aisance à évoluer dans des environnements exigeants et multiculturels, bilingue FR/EN",
    icon: Lightbulb 
  },
  { 
    name: "Gestion du stress", 
    description: "Maintien de la performance et de la qualité même en contexte de forte pression",
    icon: Heart 
  },
  { 
    name: "Pensée stratégique", 
    description: "Vision globale pour anticiper les besoins et piloter la transformation digitale",
    icon: Target 
  }
]

const languages = [
  { name: "Français", level: "Courant", percentage: 100, flag: "🇫🇷" },
  { name: "Anglais", level: "Courant (technique & conversationnel)", percentage: 90, flag: "🇬🇧" },
  { name: "Espagnol", level: "Débutant", percentage: 30, flag: "🇪🇸" }
]

const bureautique = [
  { name: "Excel", detail: "Avancé : formules complexes, TCD, automatisation VBA", level: 95 },
  { name: "Word", detail: "Mise en page professionnelle, modèles, publipostage", level: 90 },
  { name: "PowerPoint", detail: "Présentations dynamiques et pédagogiques", level: 90 },
]

const techStack = [
  "React", "Next.js", "Node.js", "TypeScript", "JavaScript", "PHP", "WordPress", 
  "MySQL", "PostgreSQL", "MongoDB", "HTML5", "CSS3", "Tailwind CSS", "Git", "GitHub",
  "Cisco IOS", "VLAN", "VPN", "OSPF", "RIP", "ACL", "DHCP", "DNS",
  "Windows Server", "Active Directory", "Office 365", "Linux",
  "Agile", "Scrum", "REST API", "Google Analytics", "SEO", "Canva"
]

export function SkillsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="skills" className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />

      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm text-primary font-mono px-3 py-1 rounded-full glass">02</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Compétences & <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        <p 
          className={`text-lg text-muted-foreground max-w-2xl mb-16 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Un profil polyvalent combinant développement Full Stack, administration réseau CCNA, 
          cybersécurité et gestion de projet pour des solutions IT complètes.
        </p>

        {/* Technical Skills Grid with Progress Bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl glass-card hover-lift transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                boxShadow: hoveredCard === index ? `0 20px 40px ${category.glowColor}` : "none"
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated border gradient */}
              <div 
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                  background: `linear-gradient(135deg, ${category.glowColor}, transparent)`,
                  filter: "blur(20px)",
                  zIndex: -1
                }}
              />
              
              <div className="flex items-start gap-4 mb-6">
                <div className={`relative p-3 rounded-xl bg-gradient-to-br ${category.color} text-white overflow-hidden`}>
                  <category.icon className="h-6 w-6 relative z-10" />
                  <div className="absolute inset-0 animate-shimmer" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{category.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">{skill.name}</span>
                      <span className="text-foreground font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + skillIndex * 80}ms`
                        }}
                      >
                        <div className="absolute inset-0 animate-shimmer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Credly Section */}
        <div 
          className={`mb-20 p-8 rounded-2xl glass-card border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 text-white">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">Certifications Professionnelles</h3>
              <p className="text-xs text-muted-foreground mt-1">Badges validés et vérifiables sur Credly</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://www.credly.com/users/seydina-thioub-diagne/badges#credly"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-muted/30 hover:bg-emerald-500/10 hover:border-emerald-500/50 border border-transparent transition-all duration-300 hover-lift"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-foreground group-hover:text-emerald-400 transition-colors">Cisco CCNA</span>
                <span className="text-xs text-muted-foreground">3 Modules • Networking Academy</span>
              </div>
              <Award className="h-5 w-5 text-emerald-500 group-hover:scale-110 transition-transform" />
            </Link>
            
            <Link
              href="https://www.credly.com/users/seydina-thioub-diagne/badges#credly"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-muted/30 hover:bg-emerald-500/10 hover:border-emerald-500/50 border border-transparent transition-all duration-300 hover-lift"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-foreground group-hover:text-emerald-400 transition-colors">Voir tous les badges</span>
                <span className="text-xs text-muted-foreground">Sur Credly • Vérifiables</span>
              </div>
              <Award className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Languages Section */}
        <div 
          className={`mb-16 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} 
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="p-2 rounded-lg glass">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            Langues
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl glass-card hover-lift group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{lang.flag}</span>
                    <span className="font-bold text-lg">{lang.name}</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">{lang.percentage}%</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{lang.level}</p>
                <div className="h-3 rounded-full bg-muted/50 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-500 transition-all duration-1000 relative overflow-hidden"
                    style={{ width: isVisible ? `${lang.percentage}%` : '0%' }}
                  >
                    <div className="absolute inset-0 animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bureautique Section */}
        <div 
          className={`mb-16 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} 
          style={{ transitionDelay: "700ms" }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="p-2 rounded-lg glass">
              <FileSpreadsheet className="h-5 w-5 text-primary" />
            </div>
            Bureautique Avancée
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {bureautique.map((tool, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl glass-card hover-lift group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-lg">{tool.name}</span>
                  <span className="text-2xl font-bold text-primary">{tool.level}%</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">{tool.detail}</p>
                <div className="h-3 rounded-full bg-muted/50 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000 relative overflow-hidden"
                    style={{ width: isVisible ? `${tool.level}%` : '0%' }}
                  >
                    <div className="absolute inset-0 animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div 
          className={`mb-20 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`} 
          style={{ transitionDelay: "800ms" }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="p-2 rounded-lg glass">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            Aptitudes Transversales
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl glass-card hover-lift group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <skill.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Technologies & Outils
          </h3>
          
          {/* Gradient masks */}
          <div className="absolute left-0 top-16 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-16 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            <div ref={scrollRef} className="flex gap-4 animate-marquee">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 rounded-full glass-card text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
