"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, FolderOpen, Mail, User, BookOpen } from "lucide-react"

interface NavigationProps {
  activeSection?: string
}

export function Navigation({ activeSection = "home" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { id: "home", label: "Accueil", icon: Home },
    { id: "about", label: "À Propos", icon: User },
    { id: "projects", label: "Projets", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const handleNavigation = (sectionId: string) => {
    if (sectionId === "catalogue") {
      router.push("/catalogue")
      setIsOpen(false)
      return
    }
    // Si on est sur la page principale, faire un scroll
    if (pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Si on est sur une autre page, rediriger vers la page principale avec l'ancre
      router.push(`/#${sectionId}`)
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-black/40 backdrop-blur-xl border border-emerald-400/10 rounded-full px-4 py-2 shadow-lg">
          <div className="flex items-center space-x-4">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavigation(id)}
                className={`group relative px-3 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeSection === id
                    ? "bg-emerald-500/20 text-emerald-300 shadow-lg shadow-emerald-500/20"
                    : "text-gray-400 hover:text-emerald-300 hover:bg-emerald-500/10"
                }`}
              >
                <div className="flex items-center space-x-1">
                  <Icon className="w-3.5 h-3.5" />
                  <span className="font-medium text-xs">{label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black/20 backdrop-blur-xl border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/10 w-8 h-8"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>

        {isOpen && (
          <div className="absolute top-12 right-0 bg-black/90 backdrop-blur-xl border border-emerald-500/20 rounded-xl p-3 min-w-[180px] shadow-2xl">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavigation(id)}
                className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10"
                }`}
              >
                <Icon className="w-3 h-3" />
                <span className="text-xs">{label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
