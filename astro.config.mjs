import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// Keep the old WordPress addresses working: each project's `oldPath`
// redirects to its new page under /proiecte/.
const projectsDir = './src/content/projects';
const redirects = {
  '/projects/casa-de-vacanta': '/proiecte/',
  // Renamed projects keep their old addresses.
  '/proiecte/casa-r1-rasnov': '/proiecte/casa-c-s-rasnov/',
  '/proiecte/casa-r2-rasnov': '/proiecte/casa-c-d-rasnov/',
  '/proiecte/locuinta-campina': '/proiecte/casa-m-s-campina/',
  '/en/projects/locuinta-campina': '/en/projects/casa-m-s-campina/',
};
for (const slug of fs.readdirSync(projectsDir)) {
  const file = path.join(projectsDir, slug, 'index.md');
  if (!fs.existsSync(file)) continue;
  const m = fs.readFileSync(file, 'utf8').match(/^oldPath:\s*"?([^"\n]+)"?\s*$/m);
  if (m) redirects[m[1].replace(/\/$/, '')] = `/proiecte/${slug}/`;
}

// Real 301 redirects for hosts that read a _redirects file (Cloudflare Pages, Netlify).
// The meta-refresh pages Astro generates remain as a fallback for other hosts.
const writeRedirects = {
  name: 'write-redirects-file',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const lines = Object.entries(redirects).flatMap(([from, to]) => [
        `${from} ${to} 301`,
        `${from}/ ${to} 301`,
      ]);
      lines.push('/feed/ / 301', '/wp-admin/* / 301', '/wp-login.php / 301');
      fs.writeFileSync(new URL('_redirects', dir), lines.join('\n') + '\n');
    },
  },
};

export default defineConfig({
  site: 'https://www.arhideea.ro',
  trailingSlash: 'always',
  i18n: { locales: ['ro', 'en'], defaultLocale: 'ro', routing: { prefixDefaultLocale: false } },
  redirects,
  integrations: [
    sitemap({ filter: (page) => !Object.keys(redirects).some((r) => page.endsWith(r + '/')) }),
    writeRedirects,
  ],
});
