"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/20">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-150 shadow-lg shadow-emerald-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full hover:bg-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110 group"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5 text-emerald-300 group-hover:text-emerald-200" />
        </button>
      )}
    </>
  )
}
