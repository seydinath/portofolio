"use client"

import { useRef, useEffect, useState } from "react"
import { GraduationCap, Award, BookOpen, CheckCircle2, Calendar, MapPin, Network, Code2, Megaphone, Binary } from "lucide-react"

const formations = [
  {
    type: "certification",
    title: "Cisco Certified Network Associate (CCNA)",
    institution: "Cisco Networking Academy",
    location: "Certification Internationale",
    period: "2025",
    icon: Network,
    color: "from-blue-500 to-cyan-500",
    description: "Certification professionnelle en trois modules (CCNA1, CCNA2, CCNA3) couvrant l'ensemble des compétences réseau essentielles pour l'administration et la sécurité des infrastructures d'entreprise.",
    modules: [
      {
        name: "CCNA1 - Introduction aux Réseaux",
        topics: [
          "Types de réseaux (LAN, WAN, MAN)",
          "Modèles de transmission de données",
          "Câblage & Matériel réseau",
          "Configuration de Switches & Routeurs"
        ]
      },
      {
        name: "CCNA2 - Routage & Commutation",
        topics: [
          "Modèles OSI et TCP/IP en détail",
          "Protocoles réseau avancés",
          "Adressage IPv4/IPv6 et Subnetting",
          "Commutation Ethernet et STP",
          "Routage statique et dynamique (OSPF, RIP)"
        ]
      },
      {
        name: "CCNA3 - Sécurité & Avancé",
        topics: [
          "Access Control Lists (ACL)",
          "Configuration et gestion des VLANs",
          "Mise en place de VPN",
          "DHCP Snooping et sécurité",
          "Routage inter-VLAN",
          "Redondance réseau (HSRP, VRRP)",
          "Déploiement et sécurisation WLAN"
        ]
      }
    ],
    skills: [
      "Configuration et administration de réseaux LAN/WAN d'entreprise",
      "Mise en place de VPN site-à-site et accès distant sécurisé",
      "Implémentation de politiques de sécurité réseau (ACL, VLAN)",
      "Adressage IP avancé et conception de schémas de subnetting",
      "Configuration de routeurs et switches Cisco (CLI IOS)",
      "Déploiement et sécurisation de réseaux sans fil professionnels",
      "Mise en place de redondance pour haute disponibilité"
    ]
  },
  {
    type: "education",
    title: "Master Software Engineering",
    institution: "Woolf University",
    location: "En ligne - Accréditation Internationale",
    period: "2025",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
    description: "Formation universitaire avancée en génie logiciel couvrant le développement moderne Full Stack, l'architecture logicielle, les Design Patterns et la gestion de projet Agile avec les technologies les plus demandées du marché.",
    modules: [
      {
        name: "Développement Avancé",
        topics: [
          "Langages modernes : JavaScript, TypeScript",
          "Frameworks Frontend : React, Next.js",
          "Backend : Node.js, Express",
          "Bases de données : SQL, NoSQL",
          "Algorithmes et structures de données avancés"
        ]
      },
      {
        name: "Architecture Logicielle",
        topics: [
          "Design Patterns (GoF, SOLID)",
          "Architecture REST et GraphQL",
          "Microservices et conteneurisation",
          "Architecture Cloud et serverless",
          "Tests et qualité logicielle"
        ]
      },
      {
        name: "Gestion de Projet",
        topics: [
          "Méthodologies Agile (Scrum, Kanban)",
          "Gestion de version avec Git/GitHub",
          "CI/CD et DevOps",
          "Leadership technique",
          "Documentation et communication"
        ]
      }
    ],
    skills: [
      "Développement Full Stack moderne (Frontend React + Backend Node.js)",
      "Maîtrise de JavaScript, TypeScript et écosystème Node.js",
      "Conception d'APIs REST et GraphQL scalables",
      "Application des Design Patterns et principes SOLID",
      "Gestion de version avancée et collaboration Git/GitHub",
      "Leadership technique et gestion de projet Agile",
      "Architecture logicielle et bonnes pratiques de développement"
    ]
  },
  {
    type: "education",
    title: "Formation Accélérée Communication Digitale",
    institution: "Kebetu Digital Academy",
    location: "Dakar, Sénégal",
    period: "2017",
    icon: Megaphone,
    color: "from-orange-500 to-red-500",
    description: "Formation intensive en stratégie digitale, SEO, analytics et communication moderne pour accompagner la transformation numérique des entreprises et optimiser leur présence en ligne.",
    modules: [
      {
        name: "Outils de Communication",
        topics: [
          "Suite Microsoft Office avancée",
          "Design graphique avec Canva",
          "Gestion des plateformes sociales",
          "Création de contenu multimédia"
        ]
      },
      {
        name: "Analytics & SEO",
        topics: [
          "Google Analytics : configuration et analyse",
          "Search Engine Optimization (SEO)",
          "Analyse des performances digitales",
          "Reporting et KPIs marketing"
        ]
      },
      {
        name: "Stratégie Digitale",
        topics: [
          "Rédaction professionnelle et copywriting",
          "Content Marketing et storytelling",
          "Vulgarisation technique",
          "Personal Branding et e-réputation"
        ]
      }
    ],
    skills: [
      "Maîtrise des outils de communication moderne (Microsoft, Canva, réseaux sociaux)",
      "Configuration et analyse Google Analytics pour mesure de performance",
      "Compétences SEO pour optimiser la visibilité et le référencement",
      "Stratégie digitale et rédaction professionnelle orientée conversion",
      "Capacité à vulgariser des sujets techniques complexes",
      "Création de contenu technique et marketing engageant"
    ]
  },
  {
    type: "education",
    title: "Licence Génie Logiciel",
    institution: "Université Dakar Bourguiba",
    location: "Dakar, Sénégal",
    period: "2017",
    icon: Binary,
    color: "from-green-500 to-emerald-500",
    description: "Formation universitaire fondamentale en génie logiciel couvrant les bases de la programmation, l'algorithmique, les bases de données et le cycle de vie du développement logiciel.",
    modules: [
      {
        name: "Programmation",
        topics: [
          "Langages de programmation (C, Java, Python)",
          "Programmation orientée objet (POO)",
          "Structures de données avancées",
          "Algorithmique et complexité"
        ]
      },
      {
        name: "Bases de Données",
        topics: [
          "Modélisation de données (Merise, UML)",
          "SQL et langages de requêtes",
          "Administration de bases de données",
          "Optimisation et indexation"
        ]
      },
      {
        name: "Génie Logiciel",
        topics: [
          "Cycle de vie du logiciel",
          "Méthodes de développement (Waterfall, V-Model)",
          "Tests et assurance qualité",
          "Documentation technique"
        ]
      }
    ],
    skills: [
      "Programmation orientée objet et procédurale multi-langages",
      "Conception et administration de bases de données relationnelles",
      "Algorithmique avancée et optimisation de code",
      "Développement d'applications logicielles complètes",
      "Documentation technique et spécifications fonctionnelles",
      "Méthodologies de développement et cycle de vie logiciel"
    ]
  }
]

export function FormationSection() {
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

  const activeFormation = formations[activeIndex]
  const ActiveIcon = activeFormation.icon

  return (
    <section ref={sectionRef} id="formation" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm text-muted-foreground font-mono">05</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Formation & <span className="text-muted-foreground">Certifications</span>
          </h2>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Un parcours académique solide combinant certifications professionnelles internationales 
          et diplômes universitaires en génie logiciel et réseaux.
        </p>

        {/* Stats Cards */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { label: "Certifications", value: "2", icon: Award },
            { label: "Diplômes", value: "2", icon: GraduationCap },
            { label: "Années d'études", value: "8+", icon: BookOpen },
            { label: "Modules CCNA", value: "3", icon: Network },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="p-4 rounded-xl border border-border bg-muted/30 text-center">
                <Icon className="w-6 h-6 mx-auto mb-2 text-foreground" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-[380px,1fr] gap-8">
          {/* Formation Navigation */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-3">
              {formations.map((formation, index) => {
                const Icon = formation.icon
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-full text-left pl-12 pr-4 py-4 rounded-xl transition-all ${
                      activeIndex === index
                        ? "bg-muted border border-border shadow-sm"
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
                          ? `bg-gradient-to-br ${formation.color}`
                          : "bg-muted border-2 border-border"
                      }`}
                    >
                      <Icon className={`h-3 w-3 ${activeIndex === index ? "text-white" : "text-muted-foreground"}`} />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-1">
                      {formation.type === "certification" ? (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                          Certifié
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                          Diplôme
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground">{formation.period}</span>
                    </div>
                    <div className="font-semibold text-foreground line-clamp-1">{formation.title}</div>
                    <div className="text-sm text-muted-foreground">{formation.institution}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Formation Details */}
          <div
            className={`rounded-2xl border border-border bg-muted/30 overflow-hidden transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Header with gradient */}
            <div className={`p-6 md:p-8 bg-gradient-to-br ${activeFormation.color} text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {activeFormation.type === "certification" ? (
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                          Certification Professionnelle
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                          Diplôme Universitaire
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{activeFormation.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>{activeFormation.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{activeFormation.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{activeFormation.period}</span>
                      </div>
                    </div>
                  </div>
                  <ActiveIcon className="w-12 h-12 text-white/30 hidden md:block" />
                </div>
                <p className="mt-4 text-white/90 text-sm leading-relaxed">
                  {activeFormation.description}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 bg-background">
              {/* Modules */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-foreground">
                  <BookOpen className="w-5 h-5" />
                  Modules de Formation
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {activeFormation.modules.map((module, index) => (
                    <div key={index} className="p-4 rounded-xl bg-muted/50 border border-border">
                      <h5 className="font-semibold text-sm mb-3 text-foreground">{module.name}</h5>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${activeFormation.color} shrink-0 mt-1.5`} />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Acquired */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-foreground">
                  <Award className="w-5 h-5" />
                  Compétences Acquises
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {activeFormation.skills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
