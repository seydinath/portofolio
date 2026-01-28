"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { ChevronDown } from "lucide-react"
import ConfettiBurst from "./ConfettiBurst"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const [cvOpen, setCvOpen] = useState(false);
  const [confetti, setConfetti] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div
        className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-300 to-emerald-300 bg-clip-text text-transparent">
            Seydina Th.Diagne
          </h1>
          <p className="text-xl md:text-3xl font-light text-gray-300 mb-2">Ingénieur Full Stack</p>
          <p className="text-base md:text-lg text-gray-400 mb-4">Web • Réseau • DevOps</p>
          <p className="text-sm md:text-base text-gray-500">📍 Dakar, Sénégal</p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-400 mx-auto mt-6 rounded-full shadow-lg shadow-emerald-500/50" />
        </div>

        {/* Description */}
        <p className="text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
          Je conçois des <span className="text-emerald-400 font-semibold">interfaces intuitives</span>, des{" "}
          <span className="text-emerald-400 font-semibold">architectures solides</span>, et des{" "}
          <span className="text-emerald-400 font-semibold">systèmes réseau</span> qui résistent aux imprévus.
        </p>

        {/* Availability Status */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-medium">Disponible pour missions</span>
          </div>
        </div>

        {/* Expertise Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {[
            "React",
            "TypeScript",
            "CCNA",
            "Network",
            "DevOps",
            "AWS",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-400/20 rounded-full text-emerald-300 text-xs font-medium hover:bg-emerald-500/15 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-12">
          {[
            { icon: Github, href: "https://github.com/seydinath", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sthdiagne/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:seydinadiagne2@outlook.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-black/30 backdrop-blur-sm border border-gray-500/20 rounded-lg hover:border-emerald-400/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-500/10"
            >
              <Icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-300 transition-colors duration-300" />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="group bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white border-0 px-6 py-3 font-semibold rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover-glow"
          >
            Voir mes réalisations
            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
          </Button>

          <div className="relative inline-block">
            <Button
              onClick={() => setCvOpen(o => !o)}
              variant="outline"
              size="lg"
              className="bg-transparent border-gray-500/30 text-gray-300 hover:bg-emerald-500/10 hover:border-emerald-400/50 hover:text-emerald-300 px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover-lift flex items-center"
            >
              <Download className="mr-2 w-4 h-4" />
              CV
              <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
            {cvOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-slate-900 rounded-lg shadow-xl z-10 border border-gray-700">
                <a
                  href="/Seydina%20Thioub%20Diagne%20.pdf"
                  download
                  className="block px-4 py-2 text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-300 cursor-pointer rounded-lg transition"
                  onClick={() => {
                    setCvOpen(false);
                    setConfetti(true);
                    setTimeout(() => setConfetti(false), 2000);
                  }}
                >
                  Français
                </a>
                <a
                  href="/Seydina%20Thioub%20Diagne.en.pdf"
                  download
                  className="block px-4 py-2 text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900 cursor-pointer"
                  onClick={() => {
                    setCvOpen(false);
                    setConfetti(true);
                    setTimeout(() => setConfetti(false), 2000);
                  }}
                >
                  Anglais
                </a>
              </div>
            )}
            <ConfettiBurst run={confetti} />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-emerald-400">5+</div>
            <div className="text-xs md:text-sm text-gray-400">Années</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-emerald-400">15+</div>
            <div className="text-xs md:text-sm text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-emerald-400">100%</div>
            <div className="text-xs md:text-sm text-gray-400">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-green-300 rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping delay-1000" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-500" />
      </div>
    </section>
  )
}
