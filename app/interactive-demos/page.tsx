import { AnimatedBackground } from "@/components/animated-background"
import { LoadingSpinner } from "@/components/loading-spinner"
import { InteractiveCards } from "@/components/interactive-cards"
import { MorphingButton } from "@/components/morphing-button"
import { Navigation } from "@/components/navigation"

export default function InteractiveDemos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900">
      <Navigation activeSection="projects" />

      <div className="pt-20 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-400 to-green-300 bg-clip-text text-transparent">
              Démos Interactives
            </h1>
            <p className="text-gray-400 text-lg">Collection de composants animés et interactifs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedBackground />
            <LoadingSpinner />
            <InteractiveCards />
            <MorphingButton />
          </div>
        </div>
      </div>
    </div>
  )
}
