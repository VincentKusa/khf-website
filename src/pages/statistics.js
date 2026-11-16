import { standings } from '../data.js';

export default function statistics() {
  const topScorers = [
    { name: 'Brian Otieno', club: 'Nairobi United', goals: 87 },
    { name: 'Kevin Mwangi', club: 'Mombasa HC', goals: 79 },
    { name: 'Samuel Ochieng', club: 'Kisumu HC', goals: 74 },
    { name: 'David Kimani', club: 'Eldoret HC', goals: 68 },
    { name: 'Peter Wekesa', club: 'Thika Warriors', goals: 61 },
  ];

  const topKeepers = [
    { name: 'Faith Wanjiku', club: 'Nakuru Stars', save: '42%' },
    { name: 'John Kamau', club: 'Nairobi United', save: '39%' },
    { name: 'Mary Achieng', club: 'Kisumu Queens', save: '37%' },
    { name: 'James Otieno', club: 'Mombasa HC', save: '35%' },
  ];

  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">Statistics</h1>
      <p class="text-slate-300 mt-2">Top scorers, goalkeepers and player leaderboards.</p>
    </div>
  </section>

  <section class="py-16">
    <div class="container-x grid gap-6 md:grid-cols-2">
      <div class="panel">
        <h2 class="section-title mb-4">Top Scorers</h2>
        <table class="w-full table-mini">
          <thead><tr><th>#</th><th>Player</th><th>Club</th><th>Goals</th></tr></thead>
          <tbody>
            ${topScorers.map((p, i) => `
              <tr><td class="font-bold">${i + 1}</td><td class="font-medium">${p.name}</td><td class="text-slate-500">${p.club}</td><td class="font-bold">${p.goals}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="panel">
        <h2 class="section-title mb-4">Best Goalkeepers</h2>
        <table class="w-full table-mini">
          <thead><tr><th>#</th><th>Player</th><th>Club</th><th>Save %</th></tr></thead>
          <tbody>
            ${topKeepers.map((p, i) => `
              <tr><td class="font-bold">${i + 1}</td><td class="font-medium">${p.name}</td><td class="text-slate-500">${p.club}</td><td class="font-bold">${p.save}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}