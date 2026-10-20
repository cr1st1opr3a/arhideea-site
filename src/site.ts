// Practice details used across the site. Change them here once.
export const SITE = {
  name: 'Arhideea',
  company: 'Atelier Arhideea SRL',
  city: 'Brașov',
  email: 'atelier@arhideea.ro',
  phone: '', // e.g. '+40 7xx xxx xxx' — left out until confirmed
  facebook: 'https://www.facebook.com/atelierarhideea',
  description:
    'Birou de arhitectură din Brașov: locuințe eficiente energetic, case pasive, amenajări interioare și spații comerciale. Coordonăm toate specialitățile, de la urbanism la șantier.',
};

type Member = { name: string; role: string; initials: string; mark?: { src: string; alt: string; w: number; h: number } };
export const TEAM: Member[] = [
  { name: 'arh. Daniela Oprea', role: 'Partener · Interior design lead', initials: 'DO' },
  {
    name: 'arh. Cristian Oprea', role: 'Partener · Certified Passive House Designer', initials: 'CO',
    // Logo of his individual practice, BIA Oprea Cristian Daniel (current file is 60×27 px).
    mark: { src: '/logos/cristian-daniel-oprea.png', alt: 'Birou individual de arhitectură Cristian Daniel Oprea', w: 60, h: 27 },
  },
];

export const SPECIALTIES = ['Urbanism', 'Arhitectură', 'Rezistență', 'Instalații', 'Amenajări interioare și exterioare'];
