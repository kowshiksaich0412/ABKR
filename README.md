# ABKR Infra Private Limited Website

Static, mobile-responsive construction business website ready for GitHub Pages, Netlify, or any static host.

## Pages

- `index.html`
- `about.html`
- `services.html`
- `projects.html`
- `testimonials.html`
- `contact.html`
- `blog.html`
- `faq.html`
- `careers.html`
- `404.html`

## Deploy on Netlify

1. Upload this folder to Netlify as a manual deploy, or connect it to a Git repository.
2. Build command: leave empty.
3. Publish directory: `.`
4. Forms are already configured for Netlify Forms:
   - `quote-inquiry`
   - `customer-review`

## Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Upload or push all files in this folder to the repository.
3. In GitHub, open `Settings > Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Push to the `main` branch. The workflow in `.github/workflows/pages.yml` will publish the site.

GitHub Pages does not process form submissions. On GitHub Pages, the quote and review forms open WhatsApp with the entered details so inquiries can still reach `99515 15132`.

Recommended first-time Git commands:

```bash
git init
git add .
git commit -m "Initial ABKR website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Before Going Live

- Replace `Children Park Route and nearby areas` with the final city/location if needed.
- Replace `Available on request` with a real email address if the business wants email inquiries.
- Update testimonials and project budgets with verified customer/project details when available.
- After a domain is connected, add the live URL to search console and create a final sitemap if required.
