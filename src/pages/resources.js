export default function resources() {
  const docs = [
    'KHF Constitution',
    'Competition Regulations',
    'Disciplinary Regulations',
    'Annual Report 2025',
    'Referee Guidelines',
    'Club Registration Forms',
    'Player Registration Forms',
    'Procurement Notices',
  ];

  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">Resources</h1>
      <p class="text-slate-300 mt-2">Official documents, policies and regulations.</p>
    </div>
  </section>
  <section class="py-16">
    <div class="container-x max-w-3xl">
      <div class="panel divide-y divide-slate-100">
        ${docs.map(d => `
          <a href="#" class="flex items-center justify-between py-3 hover:text-khf-red">
            <span class="text-sm font-medium">📄 ${d}</span>
            <span class="text-xs text-slate-400">PDF ↓</span>
          </a>`).join('')}
      </div>
    </div>
  </section>`;
}