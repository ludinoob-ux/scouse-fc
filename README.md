# Scouse FC — projektni zadatak (Multimedijalni sustavi)

Autor: Emil Andelic

## Struktura
- `index.html` — sadržaj i struktura stranice
- `style.css` — cijeli dizajn (mornarsko plava / mesing paleta)
- `script.js` — sitna interakcija (isticanje aktivne sekcije u navigaciji)
- `assets/` — mjesto za slike, audio, video i grb

## Što još treba dodati (multimedijski dio)
1. **SLIKA** — obradi fotografije u GIMP-u, spremi u `assets/`, zamijeni placeholdere u `#galerija` u `index.html`
2. **GRAFIKA** — napravi finalni grb u Inkscapeu, izvezi kao `assets/crest.svg` (zamijeni trenutni placeholder)
3. **ZVUK** — snimi/obradi himnu ili radio-reklamu u Audacityju, spremi kao `assets/himna.mp3`
4. **VIDEO** — montiraj najavu sezone u DaVinci Resolveu, spremi kao `assets/najava.mp4` (+ `assets/video-poster.jpg` kao sličicu)
5. **TEKST za tisak** — u Figmi/Canvi/Scribusu napravi reklamni letak/brošuru za klub (odvojeno od web stranice, priloži kao PDF/sliku uz opis postupka)

Za svaki od gornjih koraka napiši kratak opis postupka izrade (alat, koraci, zašto tako) — to je dio koji se posebno ocjenjuje.

## Objava na GitHub + Netlify

1. Kreiraj novi repozitorij na GitHubu, npr. `scouse-fc`
2. U ovoj mapi pokreni:
   ```bash
   git init
   git add .
   git commit -m "Prva verzija Scouse FC stranice"
   git branch -M main
   git remote add origin https://github.com/<tvoj-username>/scouse-fc.git
   git push -u origin main
   ```
3. Idi na [netlify.com](https://netlify.com), prijavi se s GitHub računom
4. "Add new site" → "Import an existing project" → odaberi `scouse-fc` repozitorij
5. Build command: ostavi prazno; Publish directory: `/` (root)
6. Deploy — Netlify ti daje nasumičan `*.netlify.app` URL
7. U Site settings → Domain management → promijeni naziv stranice u nešto poput `emilandelic.netlify.app`

Ovaj isti URL predaješ i za zadatak **Github/Netlify (8 bodova)** i za projektni zadatak kolegija.
