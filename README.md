# Foundational Flow website

Marketing site for foundationalflow.com. Next.js 16 (App Router), TypeScript, plain CSS. Hosted on Vercel.

The **FF Brand Guide v1.0** is the source of truth for design and copy. Section numbers (§) in code comments refer to it.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (run before pushing)
```

Node 20.9 or newer.

## Where things live

| To change | Edit |
|---|---|
| Any copy on any page | `content/*.ts` (components hold no text) |
| Colors, spacing, radius, type | tokens at the top of `app/globals.css` (guide §2, verbatim) |
| Home section order | `app/page.tsx` (guide §10); the Proof band appears once `home.proof` is set |
| Tyler's bio | `about.bio` in `content/about.ts` (hidden while null) |
| Favicons, Open Graph image | `public/` |
| "Book a call" destination | `site.bookingUrl` in `content/site.ts` (null = goes to /contact) |
| Public email address | `site.contactEmail` in `content/site.ts` |
| Contact form fields | `content/contact.ts` (the form and validation both read from it) |
| Navigation | `site.nav` in `content/site.ts` |

## Brand rules enforced in code

- **One teal button per screen.** In-page "Book a call" buttons carry `data-teal-sentinel`; the header hides its own while any is visible.
- **No loose hex values.** Every color is a `--ff-*` token in `app/globals.css`.
- Scroll reveal only on elements marked `data-reveal`. Reduced motion is honoured.

## Contact form

`app/api/contact/route.ts` sends submissions with the Resend API. Set these in
Vercel → Project → Settings → Environment Variables (see `.env.example`):

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` a sender on a domain verified in Resend
- `CONTACT_TO_EMAIL` the inbox that receives leads

Without them, the form works locally (submissions print to the terminal) but in
production it returns an error and shows the direct email, if `site.contactEmail` is set.

## Deploy

Pushes to `main` deploy automatically once the GitHub repo is imported into Vercel.
DNS stays at GoDaddy; only the A (`@`) and CNAME (`www`) records point to Vercel.
Do not change MX/TXT records or nameservers (Google Workspace email).
