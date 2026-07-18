# Rishi Gorai — Portfolio (appworx.ai)

A React + Vite personal portfolio / resume site.

## Run locally

You need [Node.js](https://nodejs.org) (v18+) installed.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server → http://localhost:5173
```

Edit files in `src/` and the page reloads automatically.

- **Content** (experience, projects, skills, links) → edit the data arrays at the top of `src/App.jsx`
- **Colors, fonts, spacing** → edit the CSS variables and rules in `src/index.css`

## Add your resume PDF

The "Resume" button links to `/resume.pdf`. Drop your resume file into a
`public/` folder named `resume.pdf` (create the folder if it doesn't exist):

```
appworx-portfolio/
  public/
    resume.pdf   ← add this
```

## Deploy to Vercel (free)

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/rigor07/appworx-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**,
   and import the repo. Vercel auto-detects Vite — just click **Deploy**.
3. You'll get a live URL like `appworx-portfolio.vercel.app` in ~30 seconds.

## Use your appworx.ai domain

In the Vercel project: **Settings → Domains → Add** `appworx.ai`. Vercel shows you the
DNS records to set. Since the domain is registered at GoDaddy, add those records in
**GoDaddy → Domain Settings → DNS** (typically an A record and/or CNAME as Vercel specifies).

> Note: this replaces where `appworx.ai` currently points. If a GoDaddy-built site is
> live there now, pointing the domain at Vercel will make this React site show instead.
> You can also use a subdomain (e.g. `me.appworx.ai`) to keep both.

## Build for production

```bash
npm run build    # outputs static files to dist/
npm run preview  # preview the production build locally
```
