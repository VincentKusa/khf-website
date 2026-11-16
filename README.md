# Kenya Handball Federation Website

Official frontend for the **Kenya Handball Federation (KHF)** — the national governing body for handball in Kenya.

Built with **Vite + Tailwind CSS + Vanilla JS (ES Modules)**.
Fully responsive, hash-routed SPA that works on any static host.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open **http://localhost:5173**

Production build:

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Netlify, Vercel, GitHub Pages, or any static host.

---

## 📋 Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

---

## 🧱 Tech Stack

| Layer | Tool |
|---|---|
| Build | Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Language | Vanilla JS (ES Modules) |
| Routing | Hash-based SPA router |
| Fonts | Google Fonts (Barlow Condensed, Inter) |

No framework — kept deliberately light for slow connections and easy handover.

---

## 📁 Folder Structure

```
khf-website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── main.js                 # Router + bootstrap
    ├── style.css               # Tailwind + component classes
    ├── data.js                 # Mock data (replace with API later)
    ├── components/
    │   ├── header.js
    │   ├── footer.js
    │   └── layout.js
    └── pages/                  # 19 page modules
```

---

## 🧭 Routes

| URL | Page |
|---|---|
| `#/` | Home |
| `#/about` | About KHF |
| `#/competitions` | Competitions index |
| `#/competition?league=premier-men` | Single competition |
| `#/fixtures` | All fixtures |
| `#/standings` | All standings |
| `#/news` | News index |
| `#/article?id=1` | Single article |
| `#/national-teams` | National teams index |
| `#/national-team?team=senior-men` | Single team |
| `#/clubs` | Clubs index |
| `#/club?id=Nairobi United` | Single club |
| `#/statistics` | Leaderboards |
| `#/gallery` | Photo gallery |
| `#/development` | Grassroots |
| `#/resources` | Documents |
| `#/partners` | Sponsors |
| `#/contact` | Contact |
| `#/admin-login` | Admin login UI |

---

## 🎨 Design Tokens

Defined in `tailwind.config.js`:

```js
khf: {
  red:   '#c8102e',
  green: '#007a3d',
  black: '#111418',
  dark:  '#1a1f26',
  light: '#f5f7fa',
  gold:  '#f2b705'
}
```

Use as `bg-khf-red`, `text-khf-gold`, etc.

---

## 🔧 Adding a Page

1. Create `src/pages/my-page.js`:
```js
export default function myPage() {
  return `<section class="page-hero"><h1>My Page</h1></section>`;
}
```

2. Import in `src/main.js`:
```js
import myPage from './pages/my-page.js';
```

3. Add to route table:
```js
const routes = { ..., 'my-page': myPage };
```

4. Link anywhere: `<a href="#/my-page">My Page</a>`

> ⚠️ **Never name a function the same as an imported symbol in the same file** — always suffix page functions with `Page` if they collide with data imports.

---

## 🔌 Backend Integration

Replace `src/data.js` with real API calls:

```js
// src/api.js
const BASE = import.meta.env.VITE_API_URL;

export async function fetchFixtures() {
  const r = await fetch(`${BASE}/fixtures`);
  return r.json();
}
```

Then make page functions `async` and `await` the data before returning HTML. See the "Roadmap" section for the full phased plan.

---

## 🚢 Deploy

### Netlify (fastest)
```bash
npm run build
# drag dist/ into https://app.netlify.com/drop
```

### Vercel
```bash
npm i -g vercel && vercel
```

### GitHub Pages
```js
// vite.config.js — add base path
export default defineConfig({ base: '/khf-website/' });
```
```bash
npm run build
npx gh-pages -d dist
```

Hash routing means **no server rewrites needed** — refresh works on any host.

---

## ✅ Pre-Deploy Checklist

- [ ] Replace Unsplash images with real KHF photos
- [ ] Update `src/data.js` with real clubs/fixtures/standings
- [ ] Update contact info in `contact.js`
- [ ] Update social URLs in `header.js` / `footer.js`
- [ ] Edit `index.html` title, description, favicon
- [ ] Add `robots.txt` and `sitemap.xml` to `public/`
- [ ] Test all routes on mobile (375px)
- [ ] Run Lighthouse — aim for 90+
- [ ] Enable HTTPS (automatic on Netlify/Vercel)

---

## 🗺️ Roadmap

**Phase 2 — Competition Management**
- Database (PostgreSQL): competitions, seasons, clubs, players, fixtures, results, standings
- Auth: JWT with 7 roles (Super Admin, Fed Admin, Competition Admin, Results Admin, Media Editor, Club Rep, Referee)
- Admin dashboard CRUD
- Auto-standings engine

**Phase 3 — Advanced Services**
- Live match centre (WebSocket)
- Online registration
- Digital match sheets
- Email + push notifications
- Payments (M-Pesa Daraja, Stripe)

**Phase 4 — Digital Expansion**
- Mobile app (React Native)
- Streaming integration
- Advanced analytics (Chart.js)

---

## 📞 Contact

- **Technical:** open a GitHub issue
- **KHF general:** info@kenyahandball.or.ke
- **Media:** media@kenyahandball.or.ke

---

## 📄 License

Owned by the **Kenya Handball Federation**. Third-party dependencies under their respective open-source licenses (MIT, Apache 2.0, OFL).

---

**Passion. Performance. Pride. 🇰🇪🤾**