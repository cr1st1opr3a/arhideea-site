# arhideea.ro

Static site for Atelier Arhideea, built with [Astro](https://astro.build).

```
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static site in dist/
```

## Adding or updating a project

Each project is one folder in `src/content/projects/<slug>/`:

```
src/content/projects/casa-v-o-brasov/
  index.md        # data + optional longer text
  foto-01.jpg     # photos (resize to max ~2400 px on the long edge)
  foto-02.jpg
```

`index.md` front matter:

| field | required | notes |
|---|---|---|
| `title` | yes | e.g. `Casa V/O` |
| `location` | no | e.g. `Brașov` |
| `year` | no | e.g. `2021` |
| `categories` | yes | one or more of: Construcții eficiente, Locuințe, Amenajări interioare, Spații comerciale, Dotări pentru turism |
| `summary` | yes | one or two sentences; shown as the lead text |
| `highlights` | no | 2–3 short lines for the card's "Fișă tehnică" and the slider |
| `order` | yes | lower comes first; give a new project a number below the current lowest |
| `featured` | no | `true` puts it in the homepage slider |
| `cover` | yes | `./foto-01.jpg` |
| `gallery` | no | list of `{ src: ./foto-02.jpg, caption: "…" }` |
| `facts` | no | rows for "Fișa proiectului": `{ k: "Suprafață", v: "180 mp" }` |
| `technical` | no | rows for "Date tehnice" (structure, insulation, n50, heating demand…) |
| `quote` | no | `{ text: "…", author: "…" }` |
| `placeholderPhotos` | no | `true` while photos are stand-ins |
| `oldPath` | no | old WordPress URL, redirected automatically |

Text below the front matter (Markdown) becomes the longer description.

Images are converted to responsive WebP at build time; no manual resizing beyond keeping originals reasonable.

## Swapping in the logos

- Arhideea logo: `src/components/Logo.astro`
- Passive House Designer logo: `src/components/PassiveBadge.astro`

## Font

TeX Gyre Heros (Helvetica-style), GUST Font License — see `public/fonts/GUST-FONT-LICENSE.txt`.
