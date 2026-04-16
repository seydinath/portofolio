"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, Github, Building2, Stethoscope, Hammer, Sparkles, Leaf, Briefcase, BarChart3, ExternalLink, Code2, Globe, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation, useTiltEffect } from "@/hooks/use-animations"

const clientProjects = [
  {
    id: 1,
    title: "STC - Sylla Trading Corporation",
    description: "Site vitrine complet pour une entreprise de construction et d'ingénierie au Sénégal. Sections services (bâtiments, hydraulique, hangars), actualités avec slider, formulaire de contact et design moderne responsive.",
    tags: ["WordPress", "PHP", "CSS", "JavaScript", "Responsive Design"],
    link: "https://stc-sn.com/",
    featured: true,
    icon: Building2,
    color: "from-orange-500 to-amber-500",
    glowColor: "rgba(249, 115, 22, 0.3)",
    category: "Site Vitrine Entreprise",
    client: "Sylla Trading Corporation"
  },
  {
    id: 2,
    title: "2T BTP - Tous Travaux BTP",
    description: "Site web professionnel pour une entreprise spécialisée en bâtiment et travaux publics. Portfolio de projets réalisés (R+8, R+9), présentation des services (construction, consultance, formation) et formulaire de devis.",
    tags: ["WordPress", "Elementor", "PHP", "CSS", "SEO"],
    link: "https://2tbtp.sn/",
    featured: true,
    icon: Hammer,
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
    category: "Site Vitrine BTP",
    client: "2T BTP Sénégal"
  },
  {
    id: 3,
    title: "Medimag - Équipements Dentaires",
    description: "Plateforme e-commerce pour un distributeur d'équipements et produits dentaires/paramédicaux. Catalogue produits avec catégories, témoignages clients, newsletter et téléchargement de catalogue PDF.",
    tags: ["WordPress", "WooCommerce", "PHP", "E-commerce", "Catalogue"],
    link: "https://medimagsn.com/",
    featured: true,
    icon: Stethoscope,
    color: "from-teal-500 to-emerald-500",
    glowColor: "rgba(20, 184, 166, 0.3)",
    category: "E-commerce / Catalogue",
    client: "Medimag Sénégal"
  },
]

const otherClientProjects = [
  {
    id: 4,
    title: "Truelle d'Or",
    description: "Site vitrine pour entreprise de construction organisant la 'Nuit du Bâtiment' et le FIISEC. Services de plans architecturaux 2D/3D, études topographiques et expertise foncière.",
    tags: ["WordPress", "Events", "BTP", "Design"],
    link: "https://truelledor.com/",
    icon: Sparkles,
    color: "from-yellow-500 to-orange-500",
    glowColor: "rgba(234, 179, 8, 0.3)",
    client: "Truelle d'Or Sénégal"
  },
  {
    id: 5,
    title: "AgroWomanEcology",
    description: "Plateforme pour une organisation accompagnant les femmes du Sénégal vers l'agriculture écologique. Formation, gestion de l'eau et développement économique.",
    tags: ["WordPress", "ONG", "Agriculture", "Écologie"],
    link: "https://agrowomanecology.com/",
    icon: Leaf,
    color: "from-green-500 to-lime-500",
    glowColor: "rgba(34, 197, 94, 0.3)",
    client: "AgroWomanEcology"
  },
  {
    id: 6,
    title: "Lesekou Agency",
    description: "Site web d'agence digitale (temporairement en maintenance). Création de sites web, branding et marketing digital pour les entreprises sénégalaises.",
    tags: ["WordPress", "Agence", "Digital", "Marketing"],
    link: "https://lesekou.com/",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.3)",
    client: "Lesekou Agency"
  },
]

const personalProjects = [
  {
    id: 7,
    title: "JobConnect Sénégal",
    description: "Application full-stack de mise en relation entre recruteurs et demandeurs d'emploi pour le travail temporaire et événementiel au Sénégal. Authentification Google OAuth, matching intelligent, filtres avancés par métier et localisation.",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "OAuth"],
    link: "https://final-project-frontend-azure.vercel.app/",
    github: "https://github.com/seydinathdiagne",
    featured: true,
    icon: Briefcase,
    color: "from-indigo-500 to-purple-500",
    glowColor: "rgba(99, 102, 241, 0.3)",
    category: "Application Full Stack"
  },
  {
    id: 8,
    title: "Excel Insights Studio",
    description: "Outil web d'analyse de données Excel avec génération automatique de graphiques dynamiques. Tableau croisé dynamique, propositions intelligentes, mode présentation et export PNG/Excel.",
    tags: ["React", "TypeScript", "Chart.js", "Data Viz", "Excel Parser"],
    link: "https://excel-to-graphs.vercel.app/",
    github: "https://github.com/seydinathdiagne",
    featured: true,
    icon: BarChart3,
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.3)",
    category: "Data Analytics Tool"
  },
  {
    id: 9,
    title: "Car Location Vert",
    description: "Plateforme web de location de voitures avec interface moderne, présentation claire des véhicules et parcours orienté conversion pour réserver rapidement.",
    tags: ["Next.js", "React", "TypeScript", "UI/UX", "Vercel"],
    link: "https://car-location-vert.vercel.app/",
    github: "https://github.com/seydinath/CarLocation.git",
    featured: true,
    icon: Car,
    color: "from-lime-500 to-green-500",
    glowColor: "rgba(132, 204, 22, 0.3)",
    category: "Application Web"
  },
  {
    id: 10,
    title: "TaxHacker Dashboard",
    description: "Dashboard web pour le suivi et l'optimisation fiscale avec une interface orientée productivite et visualisation rapide des donnees clefs.",
    tags: ["Next.js", "React", "TypeScript", "Dashboard", "Vercel"],
    link: "https://taxhacker-jade.vercel.app/dashboard",
    github: "https://github.com/seydinath/TaxHacker.git",
    featured: true,
    icon: BarChart3,
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.3)",
    category: "Dashboard Web"
  },
]

const projectStats = [
  { label: "Sites Web Clients", value: "6+" },
  { label: "Projets Personnels", value: "5+" },
  { label: "Clients Satisfaits", value: "15+" },
  { label: "Technologies Maîtrisées", value: "20+" }
]

function PersonalProjectCard({ project, index, isVisible, showClients }: { project: typeof personalProjects[0]; index: number; isVisible: boolean; showClients: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = project.icon

  return (
    <div
      className={`group relative p-8 rounded-3xl glass-card hover-lift transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ 
        transitionDelay: `${(showClients ? 1000 : 500) + index * 150}ms`,
        boxShadow: isHovered ? `0 30px 60px ${project.glowColor}` : "none"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Visual */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted/50 mb-6">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`p-6 rounded-2xl bg-gradient-to-br ${project.color} shadow-2xl transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}>
            <Icon className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <Link 
            href={project.link}
            target="_blank"
            className="p-4 bg-white rounded-full text-black hover:scale-110 transition-transform"
          >
            <ExternalLink className="w-5 h-5" />
          </Link>
          {project.github && (
            <Link 
              href={project.github}
              target="_blank"
              className="p-4 bg-white rounded-full text-black hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>

      {/* Project Info */}
      <span className={`text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
        {project.category}
      </span>
      <h3 className="text-2xl font-bold mt-2 mb-3 group-hover:text-gradient transition-all">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1.5 text-xs font-medium rounded-full glass"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <Button className="shine-effect" asChild>
          <Link href={project.link} target="_blank">
            Voir le projet
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        {project.github && (
          <Button variant="outline" className="glass" asChild>
            <Link href={project.github} target="_blank">
              <Github className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project, index, isVisible }: { project: typeof clientProjects[0]; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = project.icon

  return (
    <div
      className={`group relative grid md:grid-cols-2 gap-8 p-8 rounded-3xl glass-card transition-all duration-700 hover-lift ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        boxShadow: isHovered ? `0 30px 60px ${project.glowColor}` : "none"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <div 
        className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
        style={{
          background: `radial-gradient(circle at center, ${project.glowColor}, transparent 70%)`,
          filter: "blur(40px)",
          zIndex: -1
        }}
      />

      {/* Project Visual */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted/50">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={`relative p-8 rounded-3xl bg-gradient-to-br ${project.color} shadow-2xl transition-all duration-500 ${
              isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
            }`}
          >
            <Icon className="w-16 h-16 text-white" />
            <div className="absolute inset-0 rounded-3xl animate-pulse-glow" style={{ boxShadow: `0 0 40px ${project.glowColor}` }} />
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          <Link 
            href={project.link}
            target="_blank"
            className="p-4 bg-white rounded-full text-black hover:scale-110 transition-transform shine-effect"
          >
            <ExternalLink className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
            {project.category}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
          <span className="text-sm text-muted-foreground">{project.client}</span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1.5 text-xs font-medium rounded-full glass hover:bg-primary/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <Button className="group/btn shine-effect" asChild>
            <Link href={project.link} target="_blank">
              Visiter le site
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const {ref: sectionRef, isVisible} = useScrollAnimation(0.1)
  const [activeFilter, setActiveFilter] = useState("Tous")

  const filters = ["Tous", "Clients", "Personnel"]

  const showClients = activeFilter !== "Personnel"
  const showPersonal = activeFilter !== "Clients"

  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div 
              className={`flex items-center gap-4 mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-sm text-primary font-mono px-3 py-1 rounded-full glass">03</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Projets & <span className="text-gradient">Réalisations</span>
              </h2>
            </div>
            <p 
              className={`text-lg text-muted-foreground max-w-xl transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Sites web réalisés pour des clients et projets personnels démontrant 
              mon expertise en développement web moderne.
            </p>
          </div>

          {/* Filters */}
          <div 
            className={`flex items-center gap-2 p-1.5 rounded-full glass transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {projectStats.map((stat, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl glass-card text-center hover-lift group"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient-animated mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Client Projects - Featured */}
        {showClients && (
          <div className="mb-20">
            <div 
              className={`flex items-center gap-4 mb-10 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Sites Web Clients</h3>
                <p className="text-sm text-muted-foreground">Projets livrés avec succès</p>
              </div>
            </div>
            
            <div className="space-y-8">
              {clientProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* Other Client Projects Grid */}
            <div 
              className={`mt-12 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`} 
              style={{ transitionDelay: "600ms" }}
            >
              <h4 className="text-xl font-bold text-foreground mb-6">Autres Réalisations</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherClientProjects.map((project, index) => {
                  const Icon = project.icon
                  return (
                    <Link
                      key={project.id}
                      href={project.link}
                      target="_blank"
                      className={`group p-6 rounded-2xl glass-card hover-lift transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${700 + index * 100}ms` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="p-2 rounded-lg glass opacity-0 group-hover:opacity-100 transition-all">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-foreground mb-1 group-hover:text-gradient transition-all">
                        {project.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">{project.client}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs rounded-full glass"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Personal Projects */}
        {showPersonal && (
          <div className="mb-12">
            <div 
              className={`flex items-center gap-4 mb-10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: showClients ? "900ms" : "400ms" }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Projets Personnels</h3>
                <p className="text-sm text-muted-foreground">Side projects & expérimentations</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {personalProjects.map((project, index) => (
                <PersonalProjectCard 
                  key={project.id}
                  project={project} 
                  index={index}
                  isVisible={isVisible}
                  showClients={showClients}
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div 
          className={`text-center pt-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <p className="text-muted-foreground mb-6">
            Intéressé par mon travail ? Découvrez mon portfolio complet ou contactez-moi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="shine-effect" asChild>
              <Link href="#contact">
                Discutons de votre projet
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="glass" asChild>
              <Link href="https://seydinathdiagneportofolio.vercel.app/" target="_blank">
                Voir plus de projets
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
