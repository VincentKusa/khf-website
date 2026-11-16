import { nationalTeams } from '../data.js';

export default function nationalTeamsPage() {
  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">National Teams</h1>
      <p class="text-slate-300 mt-2">Kenya's international handball journey.</p>
    </div>
  </section>
  <section class="py-16">
    <div class="container-x grid gap-6 md:grid-cols-3">
      ${nationalTeams.map(t => `
        <a href="#/national-team?team=${t.slug}" class="relative h-64 rounded-xl overflow-hidden group">
          <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style="background-image:url('${t.img}')"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-khf-black via-khf-black/50 to-transparent"></div>
          <div class="absolute bottom-0 p-5 text-white">
            <h3 class="font-head text-2xl uppercase">${t.name}</h3>
            <p class="text-xs text-slate-300 mt-1">${t.desc}</p>
          </div>
        </a>`).join('')}
    </div>
  </section>`;
}