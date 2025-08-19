export interface NetworkDevice {
  id: string
  name: string
  type: "router" | "switch" | "firewall" | "ap" | "server" | "client" | "internet"
  ip?: string
  status: "online" | "warning" | "critical" | "offline"
  location?: string
  uptime?: string
  cpu?: number
  memory?: number
  temperature?: number
  interfaces?: {
    active: number
    total: number
  }
  connections: string[]
  coordinates?: {
    x: number
    y: number
  }
}

export interface NetworkAlert {
  id: number
  type: "critical" | "warning" | "info"
  device: string
  message: string
  timestamp: Date
  ip?: string
  acknowledged?: boolean
  resolved?: boolean
}

export interface NetworkMetrics {
  bandwidth: {
    used: number
    total: number
    unit: "Mbps" | "Gbps"
  }
  latency: {
    current: number
    average: number
    unit: "ms"
  }
  packetLoss: {
    percentage: number
    threshold: number
  }
  uptime: {
    percentage: number
    duration: string
  }
}

export interface TrafficData {
  timestamp: Date
  download: number
  upload: number
  unit: "Mbps" | "Gbps"
}

export interface SecurityEvent {
  id: string
  type: "intrusion" | "malware" | "policy_violation" | "failed_login"
  severity: "low" | "medium" | "high" | "critical"
  source: string
  target?: string
  description: string
  timestamp: Date
  blocked: boolean
}

export interface FirewallRule {
  id: string
  name: string
  action: "allow" | "deny" | "log"
  source: string
  destination: string
  port: string
  protocol: "tcp" | "udp" | "icmp" | "any"
  enabled: boolean
  hits: number
  lastHit?: Date
}

export interface SystemHealth {
  overall: number
  network: number
  security: number
  performance: number
  availability: number
}
