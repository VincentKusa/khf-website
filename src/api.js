import { API_URL, IS_DEV } from './config.js';
import {
  competitions as mockCompetitions,
  clubs as mockClubs,
  fixtures as mockFixtures,
  news as mockNews,
  players as mockPlayers,
  standings as mockStandings,
  nationalTeams as mockNationalTeams,
  partners as mockPartners,
  gallery as mockGallery,
} from './data.js';

async function get(path) {
  const url = `${API_URL}${path}`;
  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`);
  return res.json();
}

// ─── Public API with graceful fallback ───────────────────
async function safeFetch(path, fallback) {
  try {
    return await get(path);
  } catch (err) {
    if (IS_DEV) {
      console.warn(`[KHF] API unreachable at ${API_URL}${path} — using mock data.`, err.message);
    }
    return fallback;
  }
}

export const api = {
  competitions: () => safeFetch('/competitions', mockCompetitions),
  clubs:        () => safeFetch('/clubs', mockClubs),
  fixtures:     () => safeFetch('/fixtures', mockFixtures),
  news:         () => safeFetch('/news', mockNews),
  players:      () => safeFetch('/players', mockPlayers),
  nationalTeams:() => safeFetch('/national-teams', mockNationalTeams),
  partners:     () => safeFetch('/partners', mockPartners),
  gallery:      () => safeFetch('/gallery', mockGallery),
  standings: (slug) => safeFetch(`/standings/${slug}`, mockStandings[slug] || []),
};