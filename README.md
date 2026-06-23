# CBS Surgery Website

Production website for [cbsurgery.com](https://cbsurgery.com) — Chesterfield Bariatric Surgery.

## Stack

- Vue 3 + Vite
- Vue Router
- Tailwind CSS
- GoDaddy hosting (static `dist/` + PHP helpers)

## Setup

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

Output goes to `dist/`. Upload **contents of `dist/`** to GoDaddy `public_html` and rename `htaccess` → `.htaccess`.

## Forms (n8n)

All three site forms POST to:

`https://n8n-automation.techsoit.com/webhook/cbsWebsite`

| Form | Vue file | `formType` |
|------|----------|------------|
| Contact | `src/views/ContactPage.vue` | `contact` |
| Appointment | `src/views/Appointment.vue` | `appointment` |
| Footer subscribe | `src/layout/layout-components/Footer.vue` | `subscription` |

Sample payloads: [`docs/n8n-form-payloads.sample.json`](docs/n8n-form-payloads.sample.json)

Legacy PHP mail handlers in `public/` are kept for deploy compatibility; live forms use n8n.

## Project layout

```
src/           Vue app source
public/        Static assets + PHP (copied to dist on build)
docs/          n8n payload samples
```
