import { fixtures, competitions } from '../data.js';

export default function fixturesPage() {
  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">Fixtures & Results</h1>
      <p class="text-slate-300 mt-2">Filter, search and download all KHF fixtures.</p>
    </div>
  </section>

  <section class="py-16">
    <div class="container-x">
      <div class="panel mb-6 flex flex-wrap gap-3 items-end">
        <div class="flex-1 min-w-[200px]">
          <label class="block text-xs uppercase text-slate-500 mb-1">Competition</label>
          <select class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm">
            <option>All competitions</option>
            ${competitions.map(c => `<option>${c.name}</option>`).join('')}
          </select>
        </div>
        <div class="flex-1 min-w-[200px]">
          <label class="block text-xs uppercase text-slate-500 mb-1">Status</label>
          <select class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm">
            <option>All statuses</option>
            <option>Scheduled</option><option>Live</option><option>Completed</option>
            <option>Postponed</option><option>Cancelled</option>
          </select>
        </div>
        <div class="flex-1 min-w-[200px]">
          <label class="block text-xs uppercase text-slate-500 mb-1">Search team</label>
          <input type="text" placeholder="Club name..." class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"/>
        </div>
        <button class="btn-primary">Download PDF</button>
      </div>

      <div class="grid gap-3 md:grid-cols-2">
        ${fixtures.map(f => `
          <div class="fixture">
            <div class="flex justify-between text-[11px] uppercase">
              <span class="font-bold text-khf-red">${f.comp}</span>
              <span class="text-slate-500">${f.round} · ${f.id}</span>
            </div>
            <div class="flex items-center justify-between gap-2 py-1">
              <span class="font-semibold">${f.home}</span>
              <span class="font-head text-lg font-bold ${f.status === 'Completed' ? 'bg-khf-black text-white px-3 py-0.5 rounded' : 'text-slate-400'}">
                ${f.status === 'Completed' ? `${f.homeScore} – ${f.awayScore}` : 'vs'}
              </span>
              <span class="font-semibold">${f.away}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs text-slate-500">📅 ${f.date} · ${f.time} · 📍 ${f.venue}</span>
              <span class="${f.status === 'Completed' ? 'status-completed' : 'status-scheduled'}">${f.status}</span>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </section>`;
}