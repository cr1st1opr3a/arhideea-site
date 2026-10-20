// URL-friendly category names: "Construcții eficiente" → "constructii-eficiente"
export const catSlug = (c: string) =>
  c.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
