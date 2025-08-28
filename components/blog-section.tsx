import React from "react";

const posts = [
  {
    title: "Optimiser son portfolio Next.js pour le SEO",
    excerpt: "Découvrez les meilleures pratiques pour améliorer la visibilité de votre portfolio sur Google.",
    date: "2025-08-01",
    url: "#",
  },
  {
    title: "Créer des animations fluides avec Framer Motion",
    excerpt: "Apprenez à dynamiser vos interfaces avec des transitions élégantes et performantes.",
    date: "2025-07-15",
    url: "#",
  },
];

export const BlogSection = () => (
  <section className="py-12 bg-white dark:bg-gray-900">
    <h2 className="text-3xl font-bold text-center mb-8">Blog & Ressources</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {posts.map((post, i) => (
        <a key={i} href={post.url} className="max-w-xs block bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{post.excerpt}</p>
          <span className="text-xs text-gray-400">{post.date}</span>
        </a>
      ))}
    </div>
  </section>
);
