"use client"

import { useRef, useEffect, useState } from "react"
import { Briefcase, Server, Code2, TrendingUp, CheckCircle2, Calendar, MapPin, Building2 } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "IT Technician",
    company: "Intelcia",
    location: "Dakar, Sénégal",
    period: "Mai 2021 - Août 2025",
    duration: "4 ans 4 mois",
    contract: "CDI",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    description: "Pilotage du support IT et gestion d'infrastructure pour un parc de 750+ postes avec un focus sur la performance, la sécurité réseau et la formation des équipes. Responsable de la disponibilité du système et de l'amélioration continue des processus IT.",
    responsibilities: [
      "Pilotage du support IT et amélioration du taux de résolution à 95% sous 24h",
      "Supervision d'un parc de 750 postes avec un taux de disponibilité supérieur à 99%",
      "Sécurité réseau : mise en place de VPN, ACL, VLAN, sensibilisation à la cybersécurité",
      "Formation : création de supports pédagogiques, animation de sessions sur Office 365 et sécurité",
      "Coordination IT : suivi des incidents via ticketing, reporting régulier, automatisation de processus",
      "Maintenance proactive et préventive du parc informatique",
    ],
    achievements: [
      { metric: "60%", label: "Réduction des pannes critiques via maintenance proactive", icon: TrendingUp },
      { metric: "95%", label: "Tickets résolus sous 24h grâce à documentation optimisée", icon: CheckCircle2 },
      { metric: "100+", label: "Collaborateurs formés sur outils bureautiques et sécurité", icon: Briefcase },
      { metric: "99%", label: "Taux de disponibilité du parc informatique maintenu", icon: Server },
    ],
    technologies: ["Windows Server", "Active Directory", "Office 365", "VPN", "VLAN", "ACL", "Cisco", "DHCP", "DNS", "Ticketing"],
  },
  {
    type: "work",
    title: "Développeur Full Stack",
    company: "SenGeoSystems",
    location: "Dakar, Sénégal",
    period: "2020 - 2021",
    duration: "1 an",
    contract: "CDI",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
    description: "Développement et maintenance de solutions techniques innovantes pour le suivi automobile GPS en temps réel et la gestion de contenu. Conception d'interfaces utilisateur intuitives et intégration d'APIs de géolocalisation.",
    responsibilities: [
      "Développement de solutions techniques pour le suivi automobile GPS en temps réel",
      "Mise en place de systèmes de gestion de contenu (CMS) personnalisés",
      "Intégration d'APIs de géolocalisation et cartographie (Google Maps API)",
      "Développement de tableaux de bord analytiques pour le suivi de flotte",
      "Optimisation des performances et de l'expérience utilisateur",
      "Maintenance et évolution des applications existantes",
    ],
    achievements: [
      { metric: "Real-time", label: "Système de tracking GPS fonctionnel et déployé en production", icon: Server },
      { metric: "Dashboard", label: "Tableaux de bord analytiques complets pour gestion de flotte", icon: TrendingUp },
      { metric: "API", label: "Intégration réussie des services de cartographie", icon: Code2 },
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "API REST", "Google Maps API", "WordPress", "CSS3", "HTML5", "AJAX"],
  },
  {
    type: "work",
    title: "Développeur & Chef de Projet",
    company: "New Kind of Development",
    location: "Dakar, Sénégal",
    period: "2018 - 2020",
    duration: "2 ans",
    contract: "CDI",
    icon: Briefcase,
    color: "from-green-500 to-emerald-500",
    description: "Gestion de projets web de A à Z avec leadership d'équipe, planification stratégique et développement technique. Application des principes Agile pour une livraison efficace et une satisfaction client optimale.",
    responsibilities: [
      "Définition, gestion et suivi du planning ainsi que de la répartition des tâches",
      "Gestion budgétaire : création et gestion des budgets, veille à la rentabilité des coûts",
      "Gestion des fournisseurs : négociation et gestion des relations avec prestataires externes",
      "Gestion d'équipe et conduite de projet en appliquant les principes de la méthode Agile",
      "Développement web front-end et back-end utilisant PHP, CSS, WordPress",
      "Communication client et suivi des livrables",
    ],
    achievements: [
      { metric: "Agile", label: "Méthodologie de gestion de projet appliquée avec succès", icon: TrendingUp },
      { metric: "Budget", label: "Gestion financière optimisée et rentabilité assurée", icon: CheckCircle2 },
      { metric: "Équipe", label: "Leadership et coordination d'équipes techniques", icon: Briefcase },
    ],
    technologies: ["PHP", "CSS", "WordPress", "MySQL", "JavaScript", "Git", "Scrum", "Agile", "HTML5"],
  },
]

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const activeExp = experiences[activeIndex]

  return (
    <section ref={sectionRef} id="experience" className="py-24 lg:py-32 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm text-muted-foreground font-mono">04</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Parcours & <span className="text-muted-foreground">Expérience</span>
          </h2>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Plus de 7 ans d&apos;expérience combinant support IT, développement Full Stack et gestion de projet 
          pour accompagner la transformation digitale des entreprises.
        </p>

        {/* Experience Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { label: "Années d'expérience", value: "7+" },
            { label: "Postes supervisés", value: "750+" },
            { label: "Collaborateurs formés", value: "100+" },
            { label: "Taux de résolution", value: "95%" },
          ].map((stat, index) => (
            <div key={index} className="p-4 rounded-xl border border-border bg-background text-center">
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[320px,1fr] gap-8">
          {/* Timeline Navigation */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-3">
              {experiences.map((exp, index) => {
                const Icon = exp.icon
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-full text-left pl-12 pr-4 py-4 rounded-xl transition-all ${
                      activeIndex === index
                        ? "bg-background border border-border shadow-sm"
                        : "hover:bg-muted/50"
                    } ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        activeIndex === index
                          ? `bg-gradient-to-br ${exp.color}`
                          : "bg-muted border-2 border-border"
                      }`}
                    >
                      <Icon className={`h-3 w-3 ${activeIndex === index ? "text-white" : "text-muted-foreground"}`} />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">{exp.contract}</span>
                      <span className="text-xs text-muted-foreground">{exp.duration}</span>
                    </div>
                    <div className="font-semibold text-foreground">{exp.title}</div>
                    <div className="text-sm text-muted-foreground">{exp.company}</div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Total Experience Card */}
            <div className={`mt-6 p-4 rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/10 border border-border transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "400ms" }}>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-foreground" />
                <span className="font-semibold text-sm">Expérience Totale</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xl font-bold text-foreground">7+</p>
                  <p className="text-xs text-muted-foreground">Années</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">3</p>
                  <p className="text-xs text-muted-foreground">Entreprises</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div
            className={`p-6 md:p-8 rounded-2xl border border-border bg-background transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-border">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${activeExp.color} text-white`}>
                    {activeExp.contract}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                    {activeExp.duration}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{activeExp.title}</h3>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{activeExp.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{activeExp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{activeExp.period}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {activeExp.description}
            </p>

            {/* Responsibilities */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-foreground">
                <Briefcase className="w-5 h-5" />
                Responsabilités
              </h4>
              <ul className="space-y-2">
                {activeExp.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-foreground">
                <TrendingUp className="w-5 h-5" />
                Résultats & Réalisations
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {activeExp.achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <div key={index} className="p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-foreground" />
                        <p className="text-xl font-bold text-foreground">{achievement.metric}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.label}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies & Outils</h4>
              <div className="flex flex-wrap gap-2">
                {activeExp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm bg-muted rounded-lg border border-border hover:border-foreground/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
