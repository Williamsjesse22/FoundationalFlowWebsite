# Foundational Flow website

Marketing site for foundationalflow.com. Next.js 16 (App Router), TypeScript, plain CSS. Hosted on Vercel.

Design and copy follow **Tyler's homepage mockup (Draft 1, Sep 30 2026)**, which repositions
the site from a general AI agency to operations and AI for remodeling firms. The **FF Brand
Guide v1.0** still governs anything the mockup does not cover; where the two differ, the
mockup wins and the token block in `app/globals.css` notes the guide value beside it.

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
| Colors, spacing, radius, type | tokens at the top of `app/globals.css` |
| The sample numbers in every product visual | `content/home.ts` |
| Home section order | `app/page.tsx` |
| Favicons, Open Graph image | `public/` |
| "Book a call" destination | `site.bookHref` in `content/site.ts` |
| Who the form emails, and the address shown on the page | `site.contactEmail` plus `CONTACT_TO_EMAIL` |
| Contact form fields | `content/contact.ts` (the form and validation both read from it) |

## Rules enforced in code

- **One action.** Every button says "Book a call" and points at `site.bookHref`, the contact form.
- **No loose hex values.** Every color is a token in `app/globals.css`.
- **Sample data stays labelled.** Each product visual carries a "Sample" chip. The numbers are
  Tyler's placeholders, not client results, and no client is named anywhere.
- **Animations rest on the finished state.** The four animated visuals (receipt filing, second
  brain, lead intake, backlog forecast) loop only when the visitor allows motion; with reduced
  motion they render complete and still. `lib/motion.ts` holds that logic.

## Pages

`/` is the mockup. `/how-we-work`, `/about` and `/contact` still exist but are not linked from
the site: the first two carry the earlier general-AI positioning and need rewriting for
remodelers, and `/contact` is the home page's contact section at its own address.

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
