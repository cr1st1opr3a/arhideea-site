// Two languages: Romanian (default, at /) and English (at /en/).
// UI words live here; editable texts live in src/data/site.json (RO) and src/data/site.en.json (EN);
// each project can carry an `en:` block with its own translations. Anything missing in English
// falls back to the Romanian text, so a page is never empty.
import type { CollectionEntry } from 'astro:content';
import ro from './data/site.json';
import enOverrides from './data/site.en.json';

export type Lang = 'ro' | 'en';
export const langOf = (a: { currentLocale?: string }): Lang => (a.currentLocale === 'en' ? 'en' : 'ro');

// ---------- Addresses ----------
const base = { ro: { home: '/', projects: '/proiecte/', contact: '/contact/' }, en: { home: '/en/', projects: '/en/projects/', contact: '/en/contact/' } };
export const url = {
  home: (l: Lang) => base[l].home,
  projects: (l: Lang) => base[l].projects,
  project: (l: Lang, id: string) => `${base[l].projects}${id}/`,
  category: (l: Lang, slug: string) => `${base[l].projects}?categorie=${slug}`,
  contact: (l: Lang) => base[l].contact,
  anchor: (l: Lang, id: string) => `${base[l].home}#${id}`,
};
/** The same page in the other language. */
export function counterpart(path: string): string {
  if (path === '/en' || path.startsWith('/en/')) {
    const rest = path.replace(/^\/en/, '') || '/';
    return rest.replace(/^\/projects\//, '/proiecte/');
  }
  return '/en' + path.replace(/^\/proiecte\//, '/projects/');
}

// ---------- Words used by the templates ----------
export const UI = {
  ro: {
    htmlLang: 'ro', ogLocale: 'ro_RO', numberLocale: 'ro-RO',
    defaultTitle: 'Arhitectură eficientă în Brașov',
    skip: 'Sari la conținut', homeLabel: 'Arhideea, prima pagină', shortcuts: 'Scurtături',
    openMenu: 'Deschide meniul', closeMenu: 'Închide meniul', menu: 'Meniu', mainNav: 'Principal',
    projects: 'Proiecte', studio: 'Atelier', clients: 'Clienți', contact: 'Contact', categories: 'Categorii',
    switchTo: 'English', switchShort: 'EN', switchLabel: 'Versiunea în limba engleză',
    heroLabel: 'Proiecte în prim-plan', show: 'Arată', prevProject: 'Proiectul anterior', nextProject: 'Proiectul următor',
    pause: 'Oprește derularea', play: 'Pornește derularea', carousel: 'carusel',
    allN: (n: number) => `Toate cele ${n} proiecte →`,
    rowsLabel: 'Proiecte pe categorii', back: 'Înapoi în', fwd: 'Înainte în',
    allInCat: (n: number | null, c: string) => `${n ? `Toate cele ${n} proiecte` : 'Toate proiectele'}<br />${c.toLowerCase()} →`,
    factsSummary: 'Fișă tehnică', open: 'Deschide', openLabel: (t: string) => `Deschide ${t}`,
    filterBy: 'Filtrează după categorie', all: 'Toate',
    loadMore: (n: number) => `Încarcă încă ${n} ${n === 1 ? 'proiect' : 'proiecte'}`,
    countIn: (n: number, c: string) => `${n} ${n === 1 ? 'proiect' : 'proiecte'}${c ? ` în categoria ${c}` : ''}`,
    added: (n: number) => `Au fost adăugate ${n} proiecte`,
    projectsTitle: 'Proiecte',
    projectsDesc: 'Locuințe eficiente energetic, case aproape pasive, amenajări interioare, spații comerciale și turism — proiectele atelierului Arhideea din Brașov.',
    allProjects: '← Toate proiectele', photos: 'Fotografii', photo: (t: string, i: number) => `${t}, fotografia ${i}`,
    prevPhoto: 'Fotografia anterioară', nextPhoto: 'Fotografia următoare', photoN: (i: number) => `Fotografia ${i}`,
    video: 'Prezentare video', about: 'Despre proiect', dataLabel: 'Date despre proiect', sheet: 'Fișa proiectului', technical: 'Date tehnice',
    location: 'Amplasament', category: 'Categorie', year: 'An',
    land: 'Suprafață teren', built: 'Suprafață construită', gross: 'Suprafață desfășurată', sqm: 'mp',
    prevP: '← Proiectul anterior', nextP: 'Proiectul următor →', otherProjects: 'Alte proiecte',
    address: 'Adresă', phone: 'Telefon', email: 'Email', hours: 'Program',
    gmaps: 'Deschide în Google Maps', waze: 'Navighează cu Waze', showMap: 'Afișează harta',
    mapNote: 'Harta este furnizată de Google Maps și se încarcă doar la cerere.', mapTitle: 'Harta biroului Arhideea',
    reviewsCount: (n: string) => `${n} recenzii pe Google`, onGoogle: 'pe Google', reviewsFrom: 'Recenzii lăsate pe Google',
    starsOf: (n: number) => `${n} din 5 stele`, allReviews: 'Toate recenziile pe Google →',
    filters: 'Filtre', fRegion: 'Localitate', fStructure: 'Structură', fSize: 'Suprafață desfășurată', fAny: 'Oricare', fReset: 'Resetează filtrele', fNone: 'Niciun proiect nu corespunde filtrelor alese.',
    sizes: { s: 'sub 250 mp', m: '250–350 mp', l: 'peste 350 mp' },
    statsLabel: 'Pe scurt', contactDesc: (a: string, c: string, e: string) => `Contact Atelier Arhideea: ${a}, ${c}. ${e}`,
  },
  en: {
    htmlLang: 'en', ogLocale: 'en_GB', numberLocale: 'en-GB',
    defaultTitle: 'Energy-efficient architecture in Brașov, Romania',
    skip: 'Skip to content', homeLabel: 'Arhideea, home page', shortcuts: 'Shortcuts',
    openMenu: 'Open menu', closeMenu: 'Close menu', menu: 'Menu', mainNav: 'Main',
    projects: 'Projects', studio: 'Studio', clients: 'Clients', contact: 'Contact', categories: 'Categories',
    switchTo: 'Română', switchShort: 'RO', switchLabel: 'Versiunea în limba română',
    heroLabel: 'Featured projects', show: 'Show', prevProject: 'Previous project', nextProject: 'Next project',
    pause: 'Pause slideshow', play: 'Play slideshow', carousel: 'carousel',
    allN: (n: number) => `All ${n} projects →`,
    rowsLabel: 'Projects by category', back: 'Back in', fwd: 'Forward in',
    allInCat: (n: number | null, c: string) => `${n ? `All ${n} projects` : 'All projects'}<br />${c.toLowerCase()} →`,
    factsSummary: 'Key facts', open: 'Open', openLabel: (t: string) => `Open ${t}`,
    filterBy: 'Filter by category', all: 'All',
    loadMore: (n: number) => `Load ${n} more ${n === 1 ? 'project' : 'projects'}`,
    countIn: (n: number, c: string) => `${n} ${n === 1 ? 'project' : 'projects'}${c ? ` in ${c}` : ''}`,
    added: (n: number) => `${n} more projects shown`,
    projectsTitle: 'Projects',
    projectsDesc: 'Energy-efficient homes, near-passive houses, interiors, offices and tourism projects by Arhideea, an architecture studio in Brașov, Romania.',
    allProjects: '← All projects', photos: 'Photos', photo: (t: string, i: number) => `${t}, photo ${i}`,
    prevPhoto: 'Previous photo', nextPhoto: 'Next photo', photoN: (i: number) => `Photo ${i}`,
    video: 'Video walkthrough', about: 'About the project', dataLabel: 'Project data', sheet: 'Project sheet', technical: 'Technical data',
    location: 'Location', category: 'Category', year: 'Year',
    land: 'Plot area', built: 'Built footprint', gross: 'Gross floor area', sqm: 'm²',
    prevP: '← Previous project', nextP: 'Next project →', otherProjects: 'More projects',
    address: 'Address', phone: 'Phone', email: 'Email', hours: 'Opening hours',
    gmaps: 'Open in Google Maps', waze: 'Navigate with Waze', showMap: 'Show map',
    mapNote: 'The map is provided by Google Maps and only loads when you ask for it.', mapTitle: 'Map of the Arhideea office',
    reviewsCount: (n: string) => `${n} reviews on Google`, onGoogle: 'on Google', reviewsFrom: 'Reviews left on Google',
    starsOf: (n: number) => `${n} out of 5 stars`, allReviews: 'All reviews on Google →',
    filters: 'Filters', fRegion: 'Location', fStructure: 'Structure', fSize: 'Gross floor area', fAny: 'Any', fReset: 'Reset filters', fNone: 'No project matches the chosen filters.',
    sizes: { s: 'under 250 m²', m: '250–350 m²', l: 'over 350 m²' },
    statsLabel: 'At a glance', contactDesc: (a: string, c: string, e: string) => `Contact Arhideea, architecture studio in ${c}, Romania: ${a}. ${e}`,
  },
} as const;
export type Words = (typeof UI)['ro'];
export const t = (l: Lang) => UI[l] as unknown as Words;

// ---------- Fixed lists ----------
const CAT_EN: Record<string, string> = {
  'Construcții eficiente energetic': 'Energy-efficient buildings',
  'Structuri din lemn': 'Timber structures',
  'Locuințe': 'Homes',
  'Amenajări interioare': 'Interiors',
  'Spații comerciale': 'Commercial spaces',
  'Dotări pentru turism': 'Tourism',
};
export const cat = (l: Lang, c: string) => (l === 'en' ? CAT_EN[c] ?? c : c);

const REGION_EN: Record<string, string> = {
  'Brașov': 'Brașov', 'Împrejurimi Brașov': 'Around Brașov', 'Prahova': 'Prahova County',
  'București și Ilfov': 'Bucharest & Ilfov', 'Alte zone': 'Other areas',
};
const STRUCT_EN: Record<string, string> = { 'Lemn': 'Timber', 'Zidărie': 'Masonry', 'Beton armat': 'Reinforced concrete', 'Metal': 'Steel' };
export const region = (l: Lang, r: string) => (l === 'en' ? REGION_EN[r] ?? r : r);
export const structure = (l: Lang, s: string) => (l === 'en' ? STRUCT_EN[s] ?? s : s);

// ---------- Editable site texts ----------
type Site = typeof ro;
const pick = <T,>(en: T | undefined | null | '', fallback: T): T => (en === undefined || en === null || en === '' ? fallback : en);
export function site(l: Lang): Site {
  if (l === 'ro') return ro;
  const e = enOverrides as Partial<Record<string, any>>;
  const intl = (ph: string) => {
    const d = ph.replace(/\D/g, '');
    return /^0\d{9}$/.test(d) ? `+40 ${d.slice(1, 4)} ${d.slice(4, 7)} ${d.slice(7)}` : ph;
  };
  return {
    ...ro,
    phone: ro.phone ? intl(ro.phone) : ro.phone,
    description: pick(e.description, ro.description),
    hero: { ...ro.hero, eyebrow: pick(e.hero?.eyebrow, ro.hero.eyebrow), title: pick(e.hero?.title, ro.hero.title), lede: pick(e.hero?.lede, ro.hero.lede) },
    specialties: e.specialties?.length ? e.specialties : ro.specialties,
    team: ro.team.map((m: any, i: number) => ({ ...m, role: pick(e.team?.[i]?.role, m.role) })),
    footerCta: pick(e.footerCta, ro.footerCta),
    stats: ro.stats.map((s: any, i: number) => ({ ...s, label: pick(e.stats?.[i]?.label, s.label) })),
    contact: { ...ro.contact, title: pick(e.contact?.title, ro.contact.title), intro: pick(e.contact?.intro, ro.contact.intro), hours: pick(e.contact?.hours, ro.contact.hours), city: pick(e.contact?.city, ro.contact.city) },
    reviews: { ...ro.reviews, title: pick(e.reviews?.title, ro.reviews.title) },
    manifesto: { label: pick(e.manifesto?.label, ro.manifesto.label), text: pick(e.manifesto?.text, ro.manifesto.text) },
  } as Site;
}

// ---------- Project texts ----------
type P = CollectionEntry<'projects'>;
export function proj(p: P, l: Lang) {
  const d = p.data;
  const e = l === 'en' ? d.en : undefined;
  return {
    title: pick(e?.title, d.title),
    location: pick(e?.location, d.location),
    summary: pick(e?.summary, d.summary),
    highlights: e?.highlights?.length ? e.highlights : d.highlights,
    facts: e?.facts?.length ? e.facts : d.facts,
    technical: e?.technical?.length ? e.technical : d.technical,
    caption: (i: number) => pick(e?.captions?.[i], d.gallery[i]?.caption),
    quote: d.quote && e?.quote ? { ...d.quote, text: e.quote } : d.quote,
    categories: d.categories.map((c) => cat(l, c)),
  };
}
