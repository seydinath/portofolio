"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { LoadingScreen } from "@/components/loading-screen"
// import { SimpleLoading } from "@/components/simple-loading" // Alternative simple

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams()

  useEffect(() => {
    // Gérer la navigation depuis d'autres pages avec des ancres
    const hash = window.location.hash.replace("#", "")
    if (hash && ["home", "about", "projects", "contact"].includes(hash)) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
          setActiveSection(hash)
        }
      }, 100)
    }
  }, [searchParams])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    if (!isLoading) {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    console.log("Loading complete called") // Debug
    setIsLoading(false)
  }

  // Debug: Forcer la fin du loading après 10 secondes max
  useEffect(() => {
    const maxTimer = setTimeout(() => {
      console.log("Force complete loading") // Debug
      setIsLoading(false)
    }, 10000)

    return () => clearTimeout(maxTimer)
  }, [])

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
    // Si ça bloque encore, utilisez cette ligne à la place :
    // return <SimpleLoading onComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      <ScrollIndicator />
      <Navigation activeSection={activeSection} />

      <main className="relative">
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />

      {/* Background Effects - Subtle and Modern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
