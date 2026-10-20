// Practice details and homepage texts live in src/data/site.json,
// which is editable from the admin page (/admin → Setări site).
import data from './data/site.json';

export const SITE = data;
export const HERO = data.hero;
export const SPECIALTIES: string[] = data.specialties;

export type Member = { name: string; role: string; photo?: string; mark?: string };
export const TEAM: (Member & { initials: string })[] = data.team.map((m: Member) => ({
  ...m,
  initials: m.name.replace(/^arh\.\s*/i, '').split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase(),
}));

export type Stat = { value: number; suffix?: string; label: string };
export const STATS: Stat[] = data.stats ?? [];
export const CONTACT = data.contact;
export type Review = { author: string; rating?: number; date?: string; text: string };
export const REVIEWS: { title: string; googleUrl?: string; rating?: string; count?: string; items: Review[] } = data.reviews;
export const MANIFESTO: { label: string; text: string } = data.manifesto;
