import { clubs } from '../data.js';

export default function clubPage({ params }) {
  const name = params.get('id') || 'Nairobi United';
  const c = clubs.find(x => x.name === name) || clubs[0];

  return `
  <section class="page-hero">
    <div class="relative container-x flex items-center gap-4">
      <div class="w-20 h-20 rounded-full bg-khf-red text-white font-head font-bold text-2xl grid place-items-center border-4 border-white/20">${c.short}</div>
      <div>
        <h1 class="font-head text-4xl md:text-5xl uppercase">${c.name}</h1>
        <p class="text-slate-300 mt-1">${c.location} · ${c.league}</p>
      </div>
    </div>
  </section>

  <section class="py-16">
    <div class="container-x grid gap-8 md:grid-cols-3">
      <div class="md:col-span-2 space-y-6">
        <div class="panel">
          <h2 class="font-head text-xl uppercase mb-3">Club History</h2>
          <p class="text-slate-600 text-sm">${c.name} is a handball club based in ${c.location}, competing in the ${c.league}. The club is committed to developing talent and competing at the highest level of Kenyan handball.</p>
        </div>
        <div class="panel">
          <h2 class="font-head text-xl uppercase mb-3">Current Squad</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            ${Array(8).fill(0).map((_, i) => `
              <div class="text-center">
                <div class="w-12 h-12 rounded-full bg-slate-200 mx-auto mb-1"></div>
                <p class="text-xs font-semibold">Player ${i + 1}</p>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <div class="panel">
          <h3 class="font-head text-lg uppercase mb-2">League Position</h3>
          <p class="text-4xl font-head font-bold text-khf-red">#${c.position}</p>
          <p class="text-sm text-slate-500">${c.pts} points · GD ${c.gd > 0 ? '+' : ''}${c.gd}</p>
        </div>
        <div class="panel">
          <h3 class="font-head text-lg uppercase mb-2">Contact</h3>
          <p class="text-sm text-slate-600">📧 info@${c.name.toLowerCase().replace(/\s/g, '')}.ke</p>
          <p class="text-sm text-slate-600 mt-1">📍 ${c.location}, Kenya</p>
        </div>
      </div>
    </div>
  </section>`;
}