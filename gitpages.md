# GitHub Pages Notes & Setup Guide

## What is GitHub Pages?

GitHub Pages is a free hosting service provided by GitHub for static websites. It can host:

- HTML/CSS/JavaScript websites
- Portfolios
- Documentation sites
- Blogs
- Angular applications (after build)

Official documentation:
- GitHub Pages Documentation: https://docs.github.com/pages

---

## GitHub Pages URLs

### User Site

Repository name:

```text
username.github.io
```

Site URL:

```text
https://username.github.io
```

### Project Site

Repository name:

```text
my-project
```

Site URL:

```text
https://username.github.io/my-project
```

---

## Custom Domains

GitHub Pages supports custom domains.

Instead of:

```text
https://username.github.io
```

you can use:

```text
https://www.mysite.com
```

or

```text
https://mysite.com
```

### Can people identify GitHub hosting?

#### Default Domain

```text
username.github.io
```

Anyone can immediately know it is hosted on GitHub Pages.

#### Custom Domain

```text
www.mysite.com
```

Normal users generally cannot tell it is hosted on GitHub Pages.

However, advanced users can sometimes determine the hosting provider through:

- DNS lookup
- HTTP headers
- SSL certificate inspection
- Hosting detection tools

---

## SSL / HTTPS

GitHub Pages supports HTTPS.

For custom domains:

1. Configure DNS correctly.
2. Add custom domain in GitHub Pages settings.
3. Enable "Enforce HTTPS".

Usually you do not need to purchase a separate SSL certificate.

GitHub can issue and manage certificates for supported domains.

---

## DNS Configuration

DNS records are configured where you purchased your domain.

Examples:

- GoDaddy
- Namecheap
- Hostinger
- Cloudflare

### Root Domain

Example:

```text
mysite.com
```

Add these A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### WWW Subdomain

Example:

```text
www.mysite.com
```

Add a CNAME:

```text
Host: www

Value:
username.github.io
```

### Why same A records for everyone?

GitHub hosts many websites on the same infrastructure.

The domain name determines which site is served.

Example:

```text
185.199.xxx.xxx
├── mysite.com
├── portfolio.com
├── company.com
└── docs.example.com
```

All use GitHub infrastructure but serve different content.

---

## Angular Support

GitHub Pages supports Angular applications.

Angular apps are compiled into static files:

```text
HTML
CSS
JavaScript
```

which GitHub Pages can serve.

### Install Deployment Tool

```bash
ng add angular-cli-ghpages
```

### Deploy

```bash
ng deploy --base-href=/repository-name/
```

Example:

```bash
ng deploy --base-href=/ravi/
```

Site URL:

```text
https://username.github.io/ravi/
```

### Custom Domain Deployment

With a custom domain:

```text
https://www.mysite.com
```

you typically don't need the repository path.

---

## Git Push Error

### Error

```text
! [rejected] main -> main (fetch first)
error: failed to push some refs
```

### Meaning

Remote repository has commits that do not exist locally.

### Recommended Fix

```bash
git pull origin main --rebase
git push origin main
```

### If GitHub Repo Has Only README

```bash
git push -f origin main
```

WARNING:

Force push overwrites remote history.

### If Histories Differ

```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

---

## Google AdSense on GitHub Pages

Yes, Google AdSense advertisements can be used on GitHub Pages if:

- Site complies with Google AdSense policies
- Site is approved by Google
- AdSense code is added to pages

### Typical Steps

1. Deploy site.
2. Create AdSense account.
3. Submit website for approval.
4. Add AdSense script.
5. Wait for review.

### Better Revenue Potential

Generally works better for:

- Blog websites
- Tutorials
- Documentation portals
- Online tools
- Educational content

Usually earns very little on:

- Simple portfolios
- Resume websites
- Single-page personal sites

---

## Suggested Project Structure

```text
ravi/
│
├── src/
├── assets/
├── angular.json
├── package.json
└── README.md
```

After build:

```text
dist/
└── ravi/
    ├── index.html
    ├── main.js
    ├── styles.css
    └── assets/
```

---

## Full Angular Deployment Example

### Build

```bash
ng build --configuration production --base-href=/ravi/
```

### Deploy

```bash
npx angular-cli-ghpages --dir=dist/ravi
```

### Enable GitHub Pages

GitHub Repository:

```text
Settings
→ Pages
→ Source
→ gh-pages branch
→ Save
```

Site becomes available at:

```text
https://gunji695.github.io/ravi/
```

---

## Useful Links

GitHub Pages Documentation:

https://docs.github.com/pages

GitHub Pages Site Creation:

https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

Angular GitHub Pages Deployment:

https://github.com/angular-schule/angular-cli-ghpages

---

## Recommended Setup for Ravi Project

1. Deploy Angular app to GitHub Pages.
2. Purchase a custom domain.
3. Configure DNS records.
4. Enable HTTPS.
5. Add Google AdSense after content is ready.
6. Connect Google Analytics.
7. Configure GitHub Actions for automatic deployment.

This provides a professional website with:

✅ Free hosting  
✅ HTTPS  
✅ Custom domain  
✅ Angular support  
✅ CI/CD deployment  
✅ AdSense compatibility