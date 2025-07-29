"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div
        className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-400 to-green-300 bg-clip-text text-transparent">
            Seydina Th.Diagne
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-gray-300 mb-6">Software Engineer</h2>
          <h3 className="text-xl md:text-2xl font-light text-emerald-400">Full Stack Premium</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-400 mx-auto rounded-full shadow-lg shadow-emerald-500/50" />
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
          Je conçois des <span className="text-emerald-400 font-semibold">interfaces intuitives</span>, des{" "}
          <span className="text-emerald-400 font-semibold">architectures solides</span>, et des{" "}
          <span className="text-emerald-400 font-semibold">systèmes réseau</span> qui résistent aux imprévus.
        </p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {[
            "React & TypeScript",
            "CCNA Certified",
            "Network Security",
            "OSPF & VLANs",
            "Sass CSS",
            "System Architecture",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm hover:bg-emerald-500/20 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
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
              className="group relative p-4 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <Icon className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
              <span className="sr-only">{label}</span>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          onClick={scrollToProjects}
          size="lg"
          className="group bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
        >
          Découvrir mes projets
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </Button>
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
