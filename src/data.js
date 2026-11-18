export const competitions = [
  { slug: 'premier-men', name: 'Premier League Men', type: 'league' },
  { slug: 'premier-women', name: 'Premier League Women', type: 'league' },
  { slug: 'national-men', name: 'National League Men', type: 'league' },
];

export const clubs = [
  { id: 1, name: 'Daystar university', short: 'Falcon', location: 'Machakos', category: 'Senior', league: 'Premier League Men', position: 1, pts: 30, gd: 45 },
  { id: 2, name: 'General Service Unit', short: 'GSU', location: 'Nairobi', category: 'Senior', league: 'Premier League Men', position: 2, pts: 28, gd: 32 },
  { id: 3, name: 'kisiwa national polytechnic', short: 'Kisiwa', location: 'Bungoma', category: 'Senior', league: 'Premier League Men', position: 3, pts: 24, gd: 18 },
  { id: 4, name: 'Ulinzi Handball Club', short: 'ULINZI', location: 'Langata', category: 'Senior', league: 'Premier League Men', position: 4, pts: 21, gd: 10 },
  { id: 5, name: 'Thika Enginners', short: 'Enginners', location: 'Thika', category: 'Senior', league: 'Premier League Men', position: 5, pts: 18, gd: 4 },
  { id: 6, name: 'Strathmore Tornadoes', short: 'Tornadoes', location: 'Nairobi', category: 'premier league Men', league: 'Premier League men', position: 1, pts: 28, gd: 30 },
  { id: 7, name: 'Kenyatta University', short: 'KU', location: 'Thika', category: 'men', league: 'Premier League men', position: 2, pts: 26, gd: 22 },
  { id: 8, name: 'Black Mamba', short: 'Mamba', location: 'Nairobi', category: 'men', league: 'Premier League men', position: 3, pts: 22, gd: 12 },
];

export const fixtures = [
  { id: 'KHF-001', comp: 'Premier League Men', round: 'Round 13', home: 'Nyayo National Stadioum', away: 'Daystar', date: '2026-11-16', time: '15:00', venue: 'Nyayo Stadium', status: 'Scheduled' },
  { id: 'KHF-002', comp: 'Premier League men', round: 'Round 13', home: 'Nyayo National Stadio', away: 'GSU', date: '2026-11-16', time: '13:00', venue: 'Nyayo Stadium', status: 'Scheduled' },
  { id: 'KHF-003', comp: 'National League Men', round: 'Round 10', home: 'Nyayo National Stadio', away: 'Enginers', date: '2026-11-17', time: '16:00', venue: 'Nyayo Stadium', status: 'Scheduled' },
  { id: 'KHF-004', comp: 'Premier League Men', round: 'Round 12', home: 'Nyayo National Stadio', away: 'Kisiwa', date: '2026-11-09', time: '15:00', venue: 'Nyayo Stadium', status: 'Completed', homeScore: 28, awayScore: 24 },
  { id: 'KHF-005', comp: 'Premier League men', round: 'Round 12', home: 'Nyayo National Stadio', away: 'KU', date: '2026-11-09', time: '13:00', venue: 'Nyayo Stadium', status: 'Completed', homeScore: 31, awayScore: 29 },
  { id: 'KHF-006', comp: 'National League Men', round: 'Round 9', home: 'Nyayo National Stadio', away: 'Strathmore', date: '2026-11-08', time: '16:00', venue: 'Nyayo Stadium', status: 'Completed', homeScore: 22, awayScore: 22 },
];

export const news = [
  { id: 1, title: 'Matchday 12 round-up: Top of the table tightens', category: 'Premier League Men', tag: 'tag-league', date: '2026-11-14', img: 'https://www.facebook.com/photo.php?fbid=1851361929791602&set=pb.100047534391248.-2207520000&type=3', excerpt: 'Four teams remain within two points at the summit after a dramatic weekend of handball.' },
  { id: 2, title: "Women's league reaches record participation", category: 'Premier League Women', tag: 'tag-women', date: '2026-11-13', img: 'https://www.facebook.com/photo.php?fbid=1851352589792536&set=pb.100047534391248.-2207520000&type=3', excerpt: 'New clubs join the fast-growing women\'s competition across the country.' },
  { id: 3, title: 'Kenya names provisional squad for regional qualifiers', category: 'National Teams', tag: 'tag-national', date: '2026-11-12', img: 'https://www.facebook.com/photo.php?fbid=1841459074115221&set=pb.100047534391248.-2207520000&type=3', excerpt: 'Twenty-four players called up for the upcoming international window.' },
  { id: 4, title: 'School handball programme expands to 12 counties', category: 'Development', tag: 'tag-dev', date: '2026-11-11', img: '', excerpt: 'KHF and partners bring handball to thousands of new students.' },
];

export const players = [
  { id: 1, name: 'Brian ', position: 'Left Back', club: 'Daystar', goals: 87, stat: 'Top Scorer', img: 'https://www.facebook.com/photo/?fbid=1843882660539529&set=pcb.1843886047205857' },
  { id: 2, name: 'collins Barasa', position: 'Goalkeeper', club: 'Daystar', save: '42%', stat: 'Best GK', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
];

export const standings = {
  'premier-men': [
    { pos: 1, team: 'Daystar', p: 12, w: 10, d: 0, l: 2, gf: 320, ga: 275, gd: 45, pts: 30 },
    { pos: 2, team: 'GSU', p: 12, w: 9, d: 1, l: 2, gf: 305, ga: 273, gd: 32, pts: 28 },
    { pos: 3, team: 'Equity', p: 12, w: 8, d: 0, l: 4, gf: 298, ga: 280, gd: 18, pts: 24 },
    { pos: 4, team: 'ku', p: 12, w: 7, d: 0, l: 5, gf: 290, ga: 280, gd: 10, pts: 21 },
    { pos: 5, team: 'Mamba', p: 12, w: 6, d: 0, l: 6, gf: 275, ga: 271, gd: 4, pts: 18 },
  ],
  'premier-women': [
    { pos: 1, team: 'Ku', p: 12, w: 9, d: 1, l: 2, gf: 310, ga: 280, gd: 30, pts: 28 },
    { pos: 2, team: ' Nairobi Water', p: 12, w: 8, d: 2, l: 2, gf: 302, ga: 280, gd: 22, pts: 26 },
    { pos: 3, team: 'Daystar', p: 12, w: 7, d: 1, l: 4, gf: 288, ga: 276, gd: 12, pts: 22 },
  ],
  'national-men': [
    { pos: 1, team: 'Kenya', p: 10, w: 8, d: 0, l: 2, gf: 250, ga: 220, gd: 30, pts: 24 },
    { pos: 2, team: 'Rwanda', p: 10, w: 7, d: 1, l: 2, gf: 240, ga: 215, gd: 25, pts: 22 },
    { pos: 3, team: 'Tunisia', p: 10, w: 5, d: 2, l: 3, gf: 225, ga: 210, gd: 15, pts: 17 },
  ],
};

export const nationalTeams = [
  { slug: 'senior-men', name: 'Kenya Senior Men', img: 'https://www.facebook.com/photo/?fbid=1657635272497603&set=pcb.1657635545830909', desc: 'The national men\'s handball team representing Kenya in international competitions.' },
  { slug: 'senior-women', name: 'Kenya Senior Women', img: 'https://www.facebook.com/photo/?fbid=1841459120781883&set=pcb.1841459400781855', desc: 'The national women\'s handball team representing Kenya in international competitions.' },
  { slug: 'junior', name: 'Junior & Youth', img: 'https://www.facebook.com/photo/?fbid=1657635272497603&set=pcb.1657635545830909', desc: 'Development pathway teams for U18 and U21 players.' },
];

export const partners = [
  { name: 'Sponsor A', tier: 'Official Partner' },
  { name: 'Sponsor B', tier: 'Corporate Sponsor' },
  { name: 'Sponsor C', tier: 'Development Partner' },
  { name: 'Sponsor D', tier: 'Media Partner' },
  { name: 'Sponsor E', tier: 'Equipment Partner' },
];

export const gallery = [
  'https://www.facebook.com/photo/?fbid=1197844965143305&set=pcb.1197845351809933',
 ' https://www.facebook.com/photo?fbid=1197845148476620&set=pcb.1197845351809933',
  'https://www.michezoafrika.com/newsimages/GSU-VS-THIKA-.JPG',
];
