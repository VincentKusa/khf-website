import { nationalTeams } from '../data.js';

export default function nationalTeam({ params }) {
  const slug = params.get('team') || 'senior-men';
  const t = nationalTeams.find(x => x.slug === slug) || nationalTeams[0];

  return `
  <section class="page-hero">
    <div class="relative container-x">
      <p class="text-khf-gold text-xs uppercase tracking-[3px] font-bold mb-2">National Team</p>
      <h1 class="font-head text-4xl md:text-6xl uppercase">${t.name}</h1>
      <p class="text-slate-300 mt-2 max-w-xl">${t.desc}</p>
    </div>
  </section>

  <section class="py-16">
    <div class="container-x grid gap-8 md:grid-cols-3">
      <div class="md:col-span-2 space-y-8">
        <div>
          <h2 class="section-title mb-4">Fixtures & Results</h2>
          <div class="fixture">
            <div class="flex justify-between text-xs text-slate-500"><span>International Friendly</span><span>2026-12-01</span></div>
            <div class="flex items-center justify-between py-2">
              <span class="font-semibold">Kenya</span>
              <span class="text-slate-400">vs</span>
              <span class="font-semibold">Uganda</span>
            </div>
            <span class="status-scheduled">Scheduled</span>
          </div>
        </div>
        <div>
          <h2 class="section-title mb-4">Squad</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            ${Array(9).fill(0).map((_, i) => `
              <div class="panel text-center">
                <div class="w-16 h-16 rounded-full bg-slate-200 mx-auto mb-2"></div>
                <p class="font-semibold text-sm">Player ${i + 1}</p>
                <p class="text-xs text-slate-500">Position</p>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <div class="panel">
          <h3 class="font-head text-xl uppercase mb-3">Technical Bench</h3>
          <ul class="space-y-1.5 text-sm text-slate-600">
            <li><strong>Head Coach:</strong> — </li>
            <li><strong>Assistant Coach:</strong> — </li>
            <li><strong>Team Manager:</strong> — </li>
            <li><strong>Physio:</strong> — </li>
          </ul>
        </div>
        <div class="panel">
          <h3 class="font-head text-xl uppercase mb-3">Achievements</h3>
          <ul class="space-y-1.5 text-sm text-slate-600">
            <li>🏆 Regional Championship — 2024</li>
            <li>🥈 East Africa Games — 2023</li>
            <li>🥉 African Qualifiers — 2022</li>
          </ul>
        </div>
      </div>
    </div>
  </section>`;
}