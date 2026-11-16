import { gallery } from '../data.js';

export default function galleryPage() {
  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">Gallery</h1>
      <p class="text-slate-300 mt-2">Photos and videos from KHF events.</p>
    </div>
  </section>
  <section class="py-16">
    <div class="container-x grid gap-4 grid-cols-2 md:grid-cols-3">
      ${gallery.map(src => `
        <a href="${src}" target="_blank" class="aspect-square rounded-xl overflow-hidden group">
          <img src="${src}" alt="Gallery" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
        </a>`).join('')}
    </div>
  </section>`;
}