import { partners } from '../data.js';

export default function partnersPage() {
  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">Partners & Sponsors</h1>
      <p class="text-slate-300 mt-2">Organisations supporting Kenyan handball.</p>
    </div>
  </section>
  <section class="py-16">
    <div class="container-x grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      ${partners.map(p => `
        <div class="panel text-center">
          <div class="h-16 bg-slate-100 rounded-lg grid place-items-center text-slate-400 font-head tracking-widest mb-3">LOGO</div>
          <h3 class="font-semibold">${p.name}</h3>
          <p class="text-xs text-khf-red uppercase font-semibold">${p.tier}</p>
        </div>`).join('')}
    </div>
    <div class="container-x mt-12">
      <div class="panel bg-khf-light text-center">
        <h2 class="font-head text-2xl uppercase mb-2">Become a Partner</h2>
        <p class="text-slate-600 text-sm mb-4">Reach thousands of fans, players and clubs across Kenya. Download our partnership deck.</p>
        <a href="#/contact" class="btn-primary">Contact Sponsorship Team</a>
      </div>
    </div>
  </section>`;
}