"use client"

import Image from "next/image"
import { useScrollAnimation, useTiltEffect } from "@/hooks/use-animations"

const highlights = [
  { label: "Frontend", value: "React, HTML, CSS, JavaScript, Next.js" },
  { label: "Backend", value: "Node.js, PHP, SQL, Express" },
  { label: "Réseaux", value: "CCNA, VLAN, VPN, ACL, DHCP" },
  { label: "Cybersécurité", value: "DHCP Snooping, WLAN Security" },
]

export function AboutSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1)
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2)
  const tiltRef = useTiltEffect(10)

  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          ref={sectionRef}
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm text-primary font-mono px-3 py-1 rounded-full glass">01</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            À propos de <span className="text-gradient">moi</span>
          </h2>
          <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with tilt effect */}
          <div 
            ref={tiltRef}
            className={`relative transition-all duration-1000 ${
              sectionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card group">
              <Image
                src="/img cv.jpg"
                alt="Seydina Thioub Diagne"
                width={480}
                height={600}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl animate-float shadow-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient">4+</div>
                <div className="text-sm text-muted-foreground mt-1">Années</div>
                <div className="text-xs text-primary">d&apos;expérience</div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-primary/20 animate-rotate-slow" />
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full border border-primary/10 animate-rotate-slow" style={{ animationDirection: "reverse" }} />
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground leading-tight">
              Combiner expertise IT et développement web pour la{" "}
              <span className="text-gradient-animated">transformation digitale</span>.
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Développeur Full Stack bilingue (FR/EN) avec <span className="text-foreground font-medium">4 ans d&apos;expérience</span> en support technique, 
                réseaux et cybersécurité. Certifié <span className="text-primary font-medium">CCNA</span> et diplômé en Software Engineering, 
                je maîtrise les environnements React, Node.js, PHP, SQL et WordPress.
              </p>
              <p>
                J&apos;ai supervisé un parc de <span className="text-foreground font-medium">750 postes</span> avec 99% de disponibilité chez Intelcia 
                et formé plus de <span className="text-foreground font-medium">100 collaborateurs</span> sur les outils bureautiques et la sécurité.
              </p>
              <p>
                Rigoureux et pédagogue, je combine expertise en infrastructures IT et développement 
                web pour accompagner la transformation digitale des entreprises.
              </p>
            </div>

            {/* Key points with hover effects */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <div 
                  key={item.label}
                  className="group p-4 rounded-xl glass-card hover:border-primary/30 transition-all duration-300 hover-lift cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Decorative line */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              <span className="text-sm text-muted-foreground italic">&quot;Code with purpose, build with passion&quot;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
