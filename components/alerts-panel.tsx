"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Bell, CheckCircle, Info, XCircle } from "lucide-react"

interface Alert {
  id: number
  type: "critical" | "warning" | "info"
  device: string
  message: string
  time: string
  ip: string
}

interface AlertsPanelProps {
  alerts: Alert[]
}

export function AlertsPanel({ alerts }: AlertsPanelProps) {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return XCircle
      case "warning":
        return AlertTriangle
      case "info":
        return Info
      default:
        return Bell
    }
  }

  const getAlertColor = (type: string) => {
    switch (type) {
      case "critical":
        return "text-red-400 bg-red-500/10 border-red-500/30"
      case "warning":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30"
      case "info":
        return "text-blue-400 bg-blue-500/10 border-blue-500/30"
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/30"
    }
  }

  const criticalCount = alerts.filter((a) => a.type === "critical").length
  const warningCount = alerts.filter((a) => a.type === "warning").length

  return (
    <Card className="bg-black/20 backdrop-blur-sm border border-emerald-500/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center">
            <Bell className="w-5 h-5 mr-2 text-emerald-400" />
            Active Alerts
          </CardTitle>
          <div className="flex items-center space-x-2">
            {criticalCount > 0 && (
              <Badge variant="outline" className="bg-red-500/10 border-red-500/30 text-red-400">
                {criticalCount} Critical
              </Badge>
            )}
            {warningCount > 0 && (
              <Badge variant="outline" className="bg-yellow-500/10 border-yellow-500/30 text-yellow-400">
                {warningCount} Warning
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {alerts.length === 0 ? (
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <p className="text-gray-400">No active alerts</p>
              <p className="text-gray-500 text-sm">All systems operating normally</p>
            </div>
          ) : (
            alerts.map((alert) => {
              const AlertIcon = getAlertIcon(alert.type)
              return (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border ${getAlertColor(alert.type)} hover:scale-105 transition-transform duration-200`}
                >
                  <div className="flex items-start space-x-3">
                    <AlertIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-white text-sm truncate">{alert.device}</h4>
                        <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{alert.time}</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">{alert.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-gray-400">{alert.ip}</span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="h-6 px-2 text-xs bg-transparent">
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="h-6 px-2 text-xs bg-transparent">
                            Ack
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {alerts.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">
                {alerts.length} active alert{alerts.length !== 1 ? "s" : ""}
              </span>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                >
                  View All
                </Button>
                <Button size="sm" variant="outline" className="bg-gray-500/10 border-gray-500/30 text-gray-400">
                  Clear All
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
