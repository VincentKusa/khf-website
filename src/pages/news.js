import { news } from '../data.js';

export default function newsPage() {
  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">News & Updates</h1>
      <p class="text-slate-300 mt-2">Federation announcements, match reports and features.</p>
    </div>
  </section>

  <section class="py-16">
    <div class="container-x">
      <div class="flex flex-wrap gap-2 mb-8">
        ${['All', 'Federation News', 'Premier League Men', 'Premier League Women', 'National League', 'National Teams', 'International', 'Development', 'Coaching', 'Tournaments'].map((c, i) => `
          <button class="${i === 0 ? 'bg-khf-red text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} px-4 py-1.5 rounded-full text-xs font-semibold">${c}</button>`).join('')}
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        ${news.map(n => `
          <article class="card">
            <img src="${n.img}" alt="${n.title}" class="w-full aspect-video object-cover"/>
            <div class="p-5 space-y-2">
              <span class="${n.tag}">${n.category}</span>
              <h3 class="text-base font-semibold leading-snug"><a href="#/article?id=${n.id}" class="hover:text-khf-red">${n.title}</a></h3>
              <p class="text-sm text-slate-500">${n.excerpt}</p>
              <time class="text-xs text-slate-400">${n.date}</time>
            </div>
          </article>`).join('')}
      </div>
    </div>
  </section>`;
}