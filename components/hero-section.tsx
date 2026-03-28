"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useCountAnimation, useScrollAnimation } from "@/hooks/use-animations"

const stats = [
  { value: 4, suffix: "+", label: "Années d'expérience" },
  { value: 750, suffix: "+", label: "Postes supervisés" },
  { value: 100, suffix: "+", label: "Collaborateurs formés" },
  { value: 99, suffix: "%", label: "Disponibilité parc" },
]

function AnimatedStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCountAnimation(value, 2000)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div 
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-4xl sm:text-5xl font-bold text-foreground">
        <span className="text-gradient-animated">{count}</span>
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
      container.style.setProperty("--mouse-x", `${x}px`)
      container.style.setProperty("--mouse-y", `${y}px`)
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px] animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)",
            left: `calc(${mousePosition.x}px - 300px)`,
            top: `calc(${mousePosition.y}px - 300px)`,
            transition: "left 0.3s ease-out, top 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-float delay-1000" />
      </div>

      {/* Grid pattern with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge with glow */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-sm text-foreground mb-8 animate-glow transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-emerald-400">Disponible</span> pour de nouveaux projets
          </div>

          {/* Main heading with reveal animation */}
          <h1 
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-foreground">Seydina Thioub</span>
            <span className="block mt-2 text-gradient-animated">Diagne</span>
          </h1>

          <div 
            className={`mt-6 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="px-4 py-1.5 rounded-full glass text-sm font-medium text-foreground">
              Full Stack Developer
            </span>
            <span className="px-4 py-1.5 rounded-full glass text-sm font-medium text-primary">
              CCNA Certified
            </span>
            <span className="px-4 py-1.5 rounded-full glass text-sm font-medium text-foreground">
              IT Specialist
            </span>
          </div>

          <p 
            className={`mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Développeur bilingue (FR/EN) avec <span className="text-primary font-semibold">4 ans d&apos;expérience</span> en support technique, 
            réseaux et cybersécurité. Expert en <span className="text-foreground">React, Node.js, PHP</span> et infrastructures IT.
          </p>

          {/* CTA Buttons with hover effects */}
          <div 
            className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shine-effect"
              asChild
            >
              <Link href="#projects">
                <span className="relative z-10">Voir mes projets</span>
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group glass border-primary/30 hover:border-primary/60 hover:bg-primary/10 px-8 py-6 text-lg transition-all duration-300"
              asChild
            >
              <Link href="#contact">
                Me contacter
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Social Links with magnetic effect */}
          <div 
            className={`mt-12 flex items-center gap-4 transition-all duration-700 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sthdiagne", label: "LinkedIn" },
              { icon: Mail, href: "mailto:seydinadiagne2@outlook.com", label: "Email" },
            ].map((social, index) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-3 rounded-xl glass border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
            <div className="h-6 w-px bg-border/50 mx-2" />
            <Button variant="ghost" size="sm" className="glass hover:bg-primary/10 gap-2" asChild>
              <Link href="/cv.pdf" target="_blank">
                <Download className="h-4 w-4" />
                CV
              </Link>
            </Button>
          </div>

          {/* Stats with counting animation */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={800 + index * 150}
              />
            ))}
          </div>

          {/* Scroll indicator with enhanced animation */}
          <div 
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
