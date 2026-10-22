// City used by the projects filter: "lângă București" → București, "Poiana Brașov" → Brașov.
export const cityOf = (loc?: string) =>
  !loc ? undefined : loc.replace(/^lângă\s+/i, '').replace(/^Poiana Brașov$/, 'Brașov').trim();
