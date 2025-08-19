import { NetworkDashboard } from "@/components/network-dashboard"
import { Navigation } from "@/components/navigation"

export default function NetworkDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900">
      <Navigation activeSection="projects" />
      <NetworkDashboard />
    </div>
  )
}
