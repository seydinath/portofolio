import { VisualEffects } from "@/components/visual-effects"
import { Navigation } from "@/components/navigation"

export default function VisualEffectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900">
      <Navigation activeSection="projects" />

      <div className="pt-20 pb-8 px-4 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-400 to-green-300 bg-clip-text text-transparent">
              Effets Visuels Avancés
            </h1>
            <p className="text-gray-400 text-lg">Animations CSS et effets de lumière dynamiques</p>
          </div>
          <VisualEffects />
        </div>
      </div>
    </div>
  )
}
