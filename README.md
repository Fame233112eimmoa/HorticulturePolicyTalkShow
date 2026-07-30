# Lifestyle Studios Proposal Website

Premium, responsive proposal website for **Lifestyle Studios** presenting the production proposal for the **Horticulture Policy Talk Show**.

Built with:

- Next.js 15
- TypeScript
- Tailwind CSS
- App Router
- Lucide React

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Production build:

```bash
npm run build
```

If you ever see a missing chunk error such as `Cannot find module './611.js'`, stop the dev server, delete `.next`, and restart:

```bash
rm -rf .next
npm run dev
```

## Main Routes

- `/` Home page
- `/scope` Production scope page
- `/budget` Budget page
- `/proposal` Printable proposal page

Use the browser print dialog on `/proposal` to save the proposal as a PDF.

## Updating Proposal Content

Most editable proposal content lives in:

- `lib/proposal-data.ts`

Update this file to change:

- navigation labels and section links
- overview details
- company description
- production scope items
- crew roles
- deliverables
- budget lines and totals
- contact information
- social media links
- approval button text

Site-wide branding values live in:

- `lib/site.ts`

Update this file to change:

- site name
- tagline
- metadata description
- production deployment URL via `NEXT_PUBLIC_SITE_URL`

## Replacing Images And Videos

All media placeholders are centrally managed in:

- `lib/media-library.ts`

This is the only file you need to update when replacing placeholder media references used by components.

The media folders are:

- `public/images/studio`
- `public/images/equipment`
- `public/images/company`
- `public/images/behind-the-scenes`
- `public/videos`

The main media collections are:

- `studioImages`
- `equipmentImages`
- `behindTheScenesImages`
- `productionVideos`
- `companyImages`

To replace placeholders:

1. Add your new file to the correct folder in `public/`.
2. Update the matching `src`, `poster`, `title`, or `description` entry in `lib/media-library.ts`.
3. Keep the same `id` if you do not want to update component references.

Notes:

- Images can be `.jpg`, `.jpeg`, `.png`, `.webp`, or `.svg`.
- Videos should be real `.mp4` or `.webm` files for inline playback.
- Placeholder `.svg` files are currently used for the video cards until real motion files are added.

## Contact Form

The contact form is currently a working frontend interface only.

File:

- `components/contact-approval-section.tsx`

To connect it to a backend later, replace the current `handleSubmit` logic with:

- an API route
- Formspree
- Resend
- EmailJS
- your preferred CRM or email workflow

## Printable Proposal

The printable proposal page lives at:

- `app/proposal/page.tsx`

It includes:

- Lifestyle Studios introduction
- project overview
- production scope
- equipment
- crew
- post-production
- deliverables
- budget
- grand total
- contact information

The print-friendly behaviour is supported by:

- `app/globals.css`
- `components/print-proposal-button.tsx`

## SEO And Deployment

Included:

- metadata in `app/layout.tsx`
- page metadata per route
- `app/sitemap.ts`
- `app/robots.ts`

Ready for Vercel deployment:

```bash
npm run build
```

Then push to GitHub and import the repository into Vercel.

For correct canonical and Open Graph URLs in production, set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```
