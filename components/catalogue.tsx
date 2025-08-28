import React from "react";
import Image from "next/image";

const flyers = [
  {
    title: "Flyer Business",
    theme: "Business",
    image: "/images/flyer-business.jpg",
    description: "Un flyer moderne pour les entreprises, avec des couleurs impactantes et une mise en page professionnelle."
  },
  {
    title: "Flyer Événement",
    theme: "Événement",
    image: "/images/flyer-event.jpg",
    description: "Un flyer dynamique pour promouvoir vos événements, inspiré des visuels Canva."
  },
  {
    title: "Flyer Créatif",
    theme: "Créatif",
    image: "/images/flyer-creative.jpg",
    description: "Un flyer coloré et original pour les projets artistiques ou créatifs."
  },
  {
    title: "Flyer Digital",
    theme: "Digital",
    image: "/images/flyer-digital.jpg",
    description: "Un flyer tech, parfait pour les startups et projets digitaux."
  },
];

export default function Catalogue() {
  return (
    <section className="w-full py-12 px-4 bg-gradient-to-br from-blue-50 to-emerald-50">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-emerald-700 drop-shadow-lg">Catalogue de Flyers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {flyers.map((flyer, idx) => (
          <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-xl bg-white hover:scale-[1.03] transition-all border-2 border-emerald-100">
            <div className="w-full h-64 relative">
              <Image src={flyer.image} alt={flyer.title} fill className="object-cover group-hover:blur-[2px] group-hover:brightness-75 transition duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{flyer.title}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold mb-2 shadow">{flyer.theme}</span>
                <p className="text-white text-sm mb-2 drop-shadow">{flyer.description}</p>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold shadow hover:bg-blue-700 transition">Voir le visuel</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
