import { getCollection } from 'astro:content';

// One page per project, with its neighbours for the "previous / next" links.
export async function projectPaths() {
  const all = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  return all.map((p, i) => ({
    params: { slug: p.id },
    props: { project: p, prev: all[(i - 1 + all.length) % all.length], next: all[(i + 1) % all.length] },
  }));
}
