import { news } from '../data.js';
import { absoluteUrl, SITE_URL } from '../config.js';

export default function article({ params }) {
  const id = Number(params.get('id')) || 1;
  const n = news.find(x => x.id === id) || news[0];
  const shareUrl = encodeURIComponent(absoluteUrl(`article?id=${n.id}`));
  const shareTitle = encodeURIComponent(n.title);

  return `
  <section class="page-hero">
    <div class="relative container-x">
      <span class="${n.tag}">${n.category}</span>
      <h1 class="font-head text-3xl md:text-5xl uppercase mt-3 max-w-3xl">${n.title}</h1>
      <p class="text-slate-300 mt-2 text-sm">By KHF Media · ${n.date}</p>
    </div>
  </section>

  <section class="py-16">
    <div class="container-x max-w-3xl">
      <img src="${n.img}" alt="${n.title}" class="w-full rounded-xl mb-8"/>
      <article class="prose max-w-none text-slate-700 space-y-4">
        <p class="text-lg font-medium text-slate-800">${n.excerpt}</p>
        <p>Kenya Handball Federation continues to grow the sport across the country, with strong performances from clubs and national teams. This is placeholder article content for demonstration purposes.</p>
        <p>Fans, players, coaches and clubs can follow all the latest updates through the official KHF channels. Full coverage, statistics and match reports are available in the relevant competition sections.</p>
        <p>Stay tuned for more news from the federation.</p>
      </article>

      <div class="mt-8 flex flex-wrap items-center gap-3">
        <span class="text-sm font-semibold text-slate-500">Share:</span>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener" class="text-sm font-semibold text-khf-red hover:underline">Facebook</a>
        <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}" target="_blank" rel="noopener" class="text-sm font-semibold text-khf-red hover:underline">Twitter</a>
        <a href="https://wa.me/?text=${shareTitle}%20${shareUrl}" target="_blank" rel="noopener" class="text-sm font-semibold text-khf-red hover:underline">WhatsApp</a>
        <a href="mailto:?subject=${shareTitle}&body=${shareUrl}" class="text-sm font-semibold text-khf-red hover:underline">Email</a>
      </div>

      <p class="mt-6 text-xs text-slate-400">Source: ${SITE_URL}</p>
    </div>
  </section>`;
}