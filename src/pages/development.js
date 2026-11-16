export default function development() {
  const programmes = [
    { icon: '🏫', title: 'School Handball', desc: 'Introducing handball to primary and secondary schools nationwide.' },
    { icon: '🎓', title: 'University League', desc: 'Competitive handball across Kenyan universities.' },
    { icon: '🌱', title: 'Junior Development', desc: 'U14, U16 and U18 talent identification and coaching.' },
    { icon: '🗺️', title: 'County & Regional', desc: 'Grassroots activities in counties across Kenya.' },
    { icon: '📋', title: 'Coaching Courses', desc: 'CAHB-certified coaching education programmes.' },
    { icon: '⚖️', title: 'Refereeing Courses', desc: 'Developing qualified match officials.' },
    { icon: '👩', title: "Women & Girls", desc: 'Increasing female participation at all levels.' },
    { icon: '🤝', title: 'Development Partnerships', desc: 'Working with schools, counties and international bodies.' },
  ];

  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">Development & Grassroots</h1>
      <p class="text-slate-300 mt-2">Growing handball throughout Kenya.</p>
    </div>
  </section>
  <section class="py-16">
    <div class="container-x grid gap-6 sm:grid-cols-2 md:grid-cols-4">
      ${programmes.map(p => `
        <div class="panel text-center">
          <div class="text-4xl mb-3">${p.icon}</div>
          <h3 class="font-head text-lg uppercase mb-1">${p.title}</h3>
          <p class="text-xs text-slate-500">${p.desc}</p>
        </div>`).join('')}
    </div>
  </section>`;
}