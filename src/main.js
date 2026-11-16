import './style.css';
import { layout } from './components/layout.js';

import home from './pages/home.js';
import about from './pages/about.js';
import competitions from './pages/competitions.js';
import competition from './pages/competition.js';
import fixtures from './pages/fixtures.js';
import standings from './pages/standings.js';
import news from './pages/news.js';
import article from './pages/article.js';
import nationalTeams from './pages/national-teams.js';
import nationalTeam from './pages/national-team.js';
import clubs from './pages/clubs.js';
import club from './pages/club.js';
import statistics from './pages/statistics.js';
import gallery from './pages/gallery.js';
import development from './pages/development.js';
import resources from './pages/resources.js';
import partners from './pages/partners.js';
import contact from './pages/contact.js';
import adminLogin from './pages/admin-login.js';

const routes = {
  '': home,
  'about': about,
  'competitions': competitions,
  'competition': competition,
  'fixtures': fixtures,
  'standings': standings,
  'news': news,
  'article': article,
  'national-teams': nationalTeams,
  'national-team': nationalTeam,
  'clubs': clubs,
  'club': club,
  'statistics': statistics,
  'gallery': gallery,
  'development': development,
  'resources': resources,
  'partners': partners,
  'contact': contact,
  'admin-login': adminLogin,
};

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [pathPart, queryPart] = raw.split('?');
  const path = pathPart.split('/')[0] || '';
  const params = new URLSearchParams(queryPart || '');
  return { path, params };
}

function render() {
  const { path, params } = parseHash();
  const page = routes[path] || home;
  const content = page({ params });
  const app = document.getElementById('app');

  // Admin pages don't use main layout
  if (path === 'admin-login') {
    app.innerHTML = content;
    return;
  }

  app.innerHTML = layout(content, path);
  window.scrollTo(0, 0);

  // mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.onclick = () => {
      nav.classList.toggle('hidden');
      nav.classList.toggle('flex');
      toggle.setAttribute('aria-expanded', nav.classList.contains('flex'));
    };
  }

  // hero slider
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    let i = 0;
    setInterval(() => {
      slides[i].classList.remove('opacity-100');
      slides[i].classList.add('opacity-0');
      i = (i + 1) % slides.length;
      slides[i].classList.add('opacity-100');
      slides[i].classList.remove('opacity-0');
    }, 6000);
  }
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);