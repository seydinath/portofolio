# 🌐 Network Monitoring Dashboard

Un dashboard de monitoring réseau moderne et complet développé avec Next.js, TypeScript et Tailwind CSS. Conçu par un ingénieur CCNA certifié pour la surveillance en temps réel des infrastructures réseau.

![Dashboard Preview](https://via.placeholder.com/800x400/1a1a1a/10b981?text=Network+Monitoring+Dashboard)

## ✨ Fonctionnalités

### 📊 Monitoring en Temps Réel
- **Métriques réseau** : Bande passante, latence, perte de paquets
- **Surveillance des équipements** : CPU, mémoire, température
- **Graphiques interactifs** : Trafic réseau avec données historiques
- **Alertes intelligentes** : Notifications critiques et warnings

### 🗺️ Topologie Réseau
- **Visualisation interactive** : Carte réseau avec connexions en temps réel
- **Détails des équipements** : Informations complètes par device
- **Statut visuel** : Codes couleur pour l'état des équipements
- **Navigation intuitive** : Clic pour explorer les détails

### 🔒 Sécurité & Conformité
- **Événements de sécurité** : Détection d'intrusions et violations
- **Règles firewall** : Gestion et monitoring des politiques
- **Audit trail** : Historique des actions et modifications
- **Conformité CCNA** : Respect des standards Cisco

### 📈 Rapports & Analytics
- **Rapports automatisés** : Génération de rapports périodiques
- **Métriques de performance** : KPIs et indicateurs clés
- **Historique des données** : Conservation et analyse des tendances
- **Export de données** : Formats multiples (PDF, CSV, JSON)

## 🚀 Technologies Utilisées

- **Frontend** : Next.js 14, React 18, TypeScript
- **Styling** : Tailwind CSS, Shadcn/ui
- **Icons** : Lucide React
- **Charts** : SVG natif avec animations CSS
- **Real-time** : WebSocket simulation
- **Architecture** : Composants modulaires et réutilisables

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Git

### Installation locale

\`\`\`bash
# Cloner le repository
git clone https://github.com/seydinath/network-monitoring-dashboard.git
cd network-monitoring-dashboard

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Ouvrir http://localhost:3000
\`\`\`

### Build de production

\`\`\`bash
# Build optimisé
npm run build

# Lancer en production
npm start
\`\`\`

## 🏗️ Architecture

\`\`\`
src/
├── components/           # Composants React réutilisables
│   ├── ui/              # Composants UI de base (shadcn)
│   ├── network-dashboard.tsx    # Dashboard principal
│   ├── network-topology.tsx     # Visualisation topologie
│   ├── network-metrics.tsx      # Métriques temps réel
│   ├── traffic-chart.tsx        # Graphiques de trafic
│   ├── alerts-panel.tsx         # Panneau d'alertes
│   └── device-status.tsx        # Statut des équipements
├── app/                 # Pages Next.js (App Router)
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux
├── lib/                 # Utilitaires et helpers
└── types/               # Définitions TypeScript
\`\`\`

## 🎯 Fonctionnalités Détaillées

### Dashboard Principal
- **Vue d'ensemble** : Métriques clés en temps réel
- **Statistiques rapides** : Devices actifs, alertes, bande passante
- **Navigation par onglets** : Overview, Topology, Devices, Security, Reports

### Monitoring Réseau
- **Trafic en temps réel** : Graphiques download/upload
- **Métriques système** : CPU, mémoire, température
- **Alertes contextuelles** : Notifications avec détails techniques
- **Historique configurable** : 1h, 6h, 24h

### Gestion des Équipements
- **Inventaire complet** : Switches, routeurs, firewalls, APs
- **Statut détaillé** : Uptime, interfaces, performances
- **Configuration** : Accès aux paramètres par équipement
- **Logs système** : Consultation des journaux

### Sécurité
- **Événements de sécurité** : Tentatives d'intrusion, violations
- **Règles firewall** : Gestion des politiques de sécurité
- **Monitoring des accès** : Connexions et authentifications
- **Rapports de conformité** : Audits automatisés

## 🔧 Configuration

### Variables d'environnement

\`\`\`env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_WS_URL=ws://localhost:3000/ws

# Monitoring Settings
REFRESH_INTERVAL=5000
MAX_DATA_POINTS=100
ALERT_THRESHOLD_CPU=80
ALERT_THRESHOLD_MEMORY=85

# SNMP Configuration (pour intégration future)
SNMP_COMMUNITY=public
SNMP_VERSION=2c
SNMP_TIMEOUT=5000
\`\`\`

### Personnalisation

Le dashboard est entièrement personnalisable :

- **Thèmes** : Modification des couleurs dans `tailwind.config.js`
- **Métriques** : Ajout de nouvelles métriques dans les composants
- **Alertes** : Configuration des seuils d'alerte
- **Graphiques** : Personnalisation des visualisations

## 🌟 Fonctionnalités Avancées

### Intégration SNMP (Roadmap)
- Connexion aux équipements réels via SNMP
- Collecte automatique des métriques
- Configuration des OIDs personnalisés
- Support multi-vendor (Cisco, HP, Juniper)

### API REST (Roadmap)
- Endpoints pour données historiques
- Authentification et autorisation
- Rate limiting et cache
- Documentation OpenAPI

### Notifications (Roadmap)
- Email et SMS pour alertes critiques
- Intégration Slack/Teams
- Escalade automatique
- Templates personnalisables

## 🤝 Contribution

Les contributions sont les bienvenues ! 

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Guidelines
- Code TypeScript strict
- Tests unitaires requis
- Documentation des nouvelles fonctionnalités
- Respect des conventions de nommage

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Seydina Th.Diagne**
- 🌐 Portfolio : [seydina-portfolio.vercel.app](https://seydina-portfolio.vercel.app)
- 💼 LinkedIn : [linkedin.com/in/sthdiagne](https://linkedin.com/in/sthdiagne)
- 📧 Email : seydinadiagne2@outlook.com
- 🐙 GitHub : [@seydinath](https://github.com/seydinath)

---

## 🏆 Certifications & Expertise

- **CCNA Certified** - Cisco Certified Network Associate
- **Software Engineer** - Full Stack Development
- **Network Security** - Spécialisation sécurité réseau

---

*Développé avec ❤️ par un ingénieur CCNA passionné par les réseaux et le développement moderne.*
