import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// Keep the old WordPress addresses working: each project's `oldPath`
// redirects to its new page under /proiecte/.
const projectsDir = './src/content/projects';
const redirects = {
  '/contact': '/#contact',
  '/projects/casa-de-vacanta': '/proiecte/',
};
for (const slug of fs.readdirSync(projectsDir)) {
  const file = path.join(projectsDir, slug, 'index.md');
  if (!fs.existsSync(file)) continue;
  const m = fs.readFileSync(file, 'utf8').match(/^oldPath:\s*"?([^"\n]+)"?\s*$/m);
  if (m) redirects[m[1].replace(/\/$/, '')] = `/proiecte/${slug}/`;
}

export default defineConfig({
  site: 'https://www.arhideea.ro',
  trailingSlash: 'always',
  redirects,
  integrations: [sitemap({ filter: (page) => !Object.keys(redirects).some((r) => page.endsWith(r + '/')) })],
});
