import { AnimatedShowcase } from "@/components/animated-showcase"
import { Navigation } from "@/components/navigation"

export default function AnimatedShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900">
      <Navigation activeSection="projects" />

      <div className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-400 to-green-300 bg-clip-text text-transparent">
              Showcase Animé
            </h1>
            <p className="text-gray-400 text-lg">Collection d'animations et effets visuels avancés</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <AnimatedShowcase />

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl">
                <h3 className="text-white font-bold mb-2">Animations CSS</h3>
                <p className="text-gray-400 text-sm">Transitions fluides et effets visuels</p>
              </div>
              <div className="text-center p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl">
                <h3 className="text-white font-bold mb-2">Interactions</h3>
                <p className="text-gray-400 text-sm">Contrôles utilisateur intuitifs</p>
              </div>
              <div className="text-center p-6 bg-black/20 backdrop-blur-sm border border-emerald-500/20 rounded-xl">
                <h3 className="text-white font-bold mb-2">Performance</h3>
                <p className="text-gray-400 text-sm">Optimisé pour 60fps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
