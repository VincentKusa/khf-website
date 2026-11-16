import { standings, competitions } from '../data.js';

export default function standingsPage() {
  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">League Standings</h1>
      <p class="text-slate-300 mt-2">Auto-calculated tables for every KHF competition.</p>
    </div>
  </section>

  <section class="py-16">
    <div class="container-x space-y-10">
      ${competitions.map(c => {
        const rows = standings[c.slug] || [];
        return `
          <div>
            <h2 class="section-title mb-4">${c.name}</h2>
            <div class="panel overflow-x-auto">
              <table class="w-full text-sm">
                <thead><tr class="text-left text-xs uppercase text-slate-500 border-b">
                  <th class="py-2">Pos</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>PTS</th>
                </tr></thead>
                <tbody>
                  ${rows.map(t => `
                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                      <td class="py-2.5 font-bold">${t.pos}</td>
                      <td><a href="#/club?id=${t.team}" class="font-medium hover:text-khf-red">${t.team}</a></td>
                      <td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td>
                      <td>${t.gf}</td><td>${t.ga}</td>
                      <td>${t.gd > 0 ? '+' : ''}${t.gd}</td>
                      <td class="font-bold">${t.pts}</td>
                    </tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>`;
      }).join('')}
    </div>
  </section>`;
}