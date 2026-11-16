export default function contact() {
  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">Contact Us</h1>
      <p class="text-slate-300 mt-2">Get in touch with the Kenya Handball Federation.</p>
    </div>
  </section>
  <section class="py-16">
    <div class="container-x grid gap-8 md:grid-cols-2">
      <div class="space-y-4">
        <div class="panel">
          <h3 class="font-head text-xl uppercase mb-2">Secretariat</h3>
          <p class="text-sm text-slate-600">📍 KHF Secretariat, Nairobi, Kenya</p>
          <p class="text-sm text-slate-600 mt-1">📧 info@kenyahandball.or.ke</p>
          <p class="text-sm text-slate-600 mt-1">📞 +254 700 000 000</p>
        </div>
        <div class="panel">
          <h3 class="font-head text-xl uppercase mb-2">Media Enquiries</h3>
          <p class="text-sm text-slate-600">📧 media@kenyahandball.or.ke</p>
        </div>
        <div class="panel">
          <h3 class="font-head text-xl uppercase mb-2">Media Accreditation</h3>
          <p class="text-sm text-slate-600">Apply for matchday accreditation at least 48 hours in advance.</p>
          <a href="#" class="text-khf-red text-sm font-bold hover:underline">Download form →</a>
        </div>
      </div>
      <form class="panel space-y-4" onsubmit="event.preventDefault(); this.reset(); alert('Message sent! (demo)');">
        <h3 class="font-head text-xl uppercase">Send us a message</h3>
        <input type="text" required placeholder="Your name" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"/>
        <input type="email" required placeholder="Your email" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"/>
        <input type="text" required placeholder="Subject" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"/>
        <textarea required rows="5" placeholder="Message" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"></textarea>
        <button class="btn-primary w-full justify-center">Send Message</button>
      </form>
    </div>
  </section>`;
}