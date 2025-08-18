"use client"

import { useState, useEffect } from "react"
import { Terminal, Code, Wifi, Shield, Zap, Cpu, Coffee, Rocket, Bug } from "lucide-react"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [coffeeLevel, setCoffeeLevel] = useState(0)

  // Étapes avec plus d'humour et durée réduite
  const mobileSteps = [
    { text: "Réveil du développeur... ☕", icon: Coffee, delay: 400 },
    { text: "Chargement des super-pouvoirs CCNA...", icon: Wifi, delay: 500 },
    { text: "Compilation du génie React...", icon: Code, delay: 600 },
    { text: "Élimination des bugs... 🐛", icon: Bug, delay: 400 },
    { text: "Ajout de la sauce secrète...", icon: Zap, delay: 500 },
    { text: "Décollage imminent ! 🚀", icon: Rocket, delay: 400 },
  ]

  const desktopSteps = [
    { text: "Initialisation du cerveau développeur...", icon: Terminal, delay: 500 },
    { text: "Téléchargement de 42 tasses de café...", icon: Coffee, delay: 600 },
    { text: "Activation des super-pouvoirs CCNA...", icon: Wifi, delay: 700 },
    { text: "Configuration des VLANs magiques...", icon: Cpu, delay: 500 },
    { text: "Compilation du code de génie React...", icon: Code, delay: 600 },
    { text: "Optimisation TypeScript niveau ninja...", icon: Code, delay: 500 },
    { text: "Sécurisation avec la force Jedi...", icon: Shield, delay: 600 },
    { text: "Chasse aux bugs en cours... 🐛", icon: Bug, delay: 500 },
    { text: "Préparation du café de la victoire... ☕", icon: Coffee, delay: 700 },
    { text: "Prêt à conquérir le monde ! 🚀", icon: Rocket, delay: 600 },
  ]

  const funnyMessages = [
    "// TODO: Devenir millionnaire avec ce portfolio",
    "console.log('Bonjour le monde, je suis Seydina !');",
    "if (café === null) { return 'Erreur critique'; }",
    "git commit -m 'Ajout de la magie ✨'",
    "sudo make-me-awesome --force",
    "404: Bugs not found (ils ont tous fui !)",
    "while(vivant) { coder(); café(); dormir(2h); }",
    "const succès = travail + café * passion;",
    "npm install bonheur --save-dev",
    "ping google.com // Internet fonctionne, on peut y aller !",
    "SELECT * FROM compétences WHERE niveau = 'Expert';",
    "docker run --rm -it seydina/portfolio:latest",
    "chmod +x mon-avenir-brillant.sh",
    "// Ça compile ? C'est parti !",
    "import { Génie } from '@seydina/brain';",
    "const motivation = Math.max(...défis);",
  ]

  const loadingQuotes = [
    "« Le code, c'est de la poésie que les machines comprennent »",
    "« Un réseau bien configuré, c'est comme un café bien préparé »",
    "« Debug un jour, debug toujours... mais avec le sourire ! »",
    "« CCNA : Cisco Certified Network Awesome »",
    "« React + TypeScript = ❤️ »",
    "« En cas de doute, redémarre le routeur »",
  ]

  // Détection mobile une seule fois
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  // Sélection des étapes
  const steps = isMobile ? mobileSteps : desktopSteps

  // Animation du curseur plus rapide
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 400)
    return () => clearInterval(interval)
  }, [])

  // Animation du niveau de café
  useEffect(() => {
    const coffeeTimer = setInterval(() => {
      setCoffeeLevel((prev) => (prev + 1) % 101)
    }, 100)
    return () => clearInterval(coffeeTimer)
  }, [])

  // Gestion des étapes - DURÉE RÉDUITE
  useEffect(() => {
    if (currentStep >= steps.length) {
      // Animation terminée
      const timer = setTimeout(() => {
        onComplete()
      }, 300)
      return () => clearTimeout(timer)
    }

    // Timer pour passer à l'étape suivante
    const stepTimer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1)
    }, steps[currentStep].delay)

    return () => clearTimeout(stepTimer)
  }, [currentStep, steps, onComplete])

  // Animation de frappe plus rapide
  useEffect(() => {
    if (currentStep >= steps.length) return

    const targetText = steps[currentStep].text
    let charIndex = 0
    setDisplayText("")

    const typeInterval = setInterval(
      () => {
        if (charIndex < targetText.length) {
          setDisplayText(targetText.slice(0, charIndex + 1))
          charIndex++
        } else {
          clearInterval(typeInterval)
        }
      },
      isMobile ? 20 : 30, // Plus rapide
    )

    return () => clearInterval(typeInterval)
  }, [currentStep, steps, isMobile])

  const progress = Math.min(((currentStep + 1) / steps.length) * 100, 100)

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Background Matrix Effect Amélioré */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: isMobile ? 20 : 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-400 font-mono text-sm animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          >
            {["1", "0", "♦", "♠", "♣", "♥", "★", "●"][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {["React", "CCNA", "TypeScript", "OSPF", "VLANs", "☕", "🚀", "💻"].map((tech, i) => (
          <div
            key={tech}
            className="absolute text-emerald-300 font-mono text-xs animate-bounce"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {tech}
          </div>
        ))}
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        {/* Terminal Window */}
        <div className="bg-black/90 backdrop-blur-sm border border-emerald-500/40 rounded-xl p-4 md:p-8 shadow-2xl shadow-emerald-500/20">
          {/* Terminal Header avec animation */}
          <div className="flex items-center justify-between mb-4 md:mb-6 pb-4 border-b border-emerald-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-400"></div>
            </div>
            <div className="text-emerald-400 font-mono text-xs md:text-sm animate-pulse">
              seydina@portfolio:~$ ./start-awesome-mode.sh
            </div>
          </div>

          {/* Loading Steps avec animations améliorées */}
          <div className="space-y-2 md:space-y-3 mb-6 md:mb-8" style={{ minHeight: "140px" }}>
            {steps.slice(0, Math.min(currentStep + 1, steps.length)).map((step, index) => {
              const StepIcon = step.icon
              return (
                <div
                  key={index}
                  className={`flex items-center space-x-2 md:space-x-3 font-mono text-xs md:text-sm transition-all duration-500 transform ${
                    index === currentStep
                      ? "text-emerald-400 scale-105 translate-x-2"
                      : index < currentStep
                        ? "text-green-300"
                        : "text-gray-500"
                  }`}
                >
                  <StepIcon
                    className={`w-4 h-4 flex-shrink-0 ${
                      index === currentStep
                        ? "animate-spin text-emerald-300"
                        : index < currentStep
                          ? "text-green-400 animate-bounce"
                          : ""
                    }`}
                  />
                  <span className="flex-1 text-left">
                    {index === currentStep ? (
                      <>
                        {displayText}
                        {showCursor && <span className="text-emerald-400 animate-pulse text-lg">|</span>}
                      </>
                    ) : (
                      step.text
                    )}
                  </span>
                  {index < currentStep && (
                    <span className="text-green-400 animate-bounce flex-shrink-0 text-lg">✨</span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Progress Bar Améliorée */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Progression du génie</span>
              <span className="text-emerald-400 font-bold">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-300 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                <div className="absolute right-0 top-0 h-full w-4 bg-white/50 blur-sm animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Coffee Level Meter */}
          <div className="mb-4 bg-gray-900/50 rounded-lg p-3 border border-emerald-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">☕ Niveau de caféine</span>
              <span className="text-emerald-400 text-xs font-mono">{coffeeLevel}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-100"
                style={{ width: `${coffeeLevel}%` }}
              />
            </div>
          </div>

          {/* Funny Code Snippets avec rotation */}
          <div className="bg-gray-900/50 rounded-lg p-4 border border-emerald-500/20 mb-4">
            <div className="text-xs text-gray-400 mb-2">// En cours d'exécution...</div>
            <div className="font-mono text-xs md:text-sm text-emerald-300 animate-pulse">
              {funnyMessages[currentStep % funnyMessages.length]}
            </div>
          </div>

          {/* Quote inspirante */}
          <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/30">
            <div className="text-xs text-emerald-400 italic text-center">
              {loadingQuotes[Math.floor((currentStep / 2) % loadingQuotes.length)]}
            </div>
          </div>
        </div>

        {/* Loading Dots Améliorés */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: "0.8s",
              }}
            />
          ))}
        </div>

        {/* Status Text avec emoji */}
        <div className="mt-4 text-emerald-400/80 font-mono text-sm animate-pulse">
          {currentStep < steps.length ? <>🔄 Chargement du génie en cours...</> : <>🎉 Prêt à impressionner !</>}
        </div>

        {/* Easter Egg - Konami Code hint */}
        {currentStep > steps.length / 2 && (
          <div className="mt-2 text-gray-500 text-xs animate-fade-in">
            💡 Astuce : Appuyez sur ↑↑↓↓←→←→BA pour activer le mode ninja
          </div>
        )}
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}
