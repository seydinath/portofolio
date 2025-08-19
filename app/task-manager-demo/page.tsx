import TaskManager from "@/components/task-manager"

export default function TaskManagerDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-black flex flex-col items-center justify-center py-10">
      <div className="max-w-6xl w-full mx-auto px-4">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-400 to-green-300 bg-clip-text text-transparent">Système de gestion de tâches</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Gérez vos tâches avec une interface moderne, inspirée de Notion, et toutes les fonctionnalités avancées pour la productivité.</p>
        </header>
        <section className="rounded-2xl shadow-emerald-900/30 shadow-xl bg-white/5 backdrop-blur-lg border border-emerald-500/20 p-4 md:p-8">
          <TaskManager />
        </section>
      </div>
    </main>
  )
}
