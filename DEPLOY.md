# DEPLOY.md — goldchartlive.com Deployment Guide

## Domain & Hosting
- **Domain:** goldchartlive.com (purchased on Cloudflare)
- **Hosting:** Cloudflare Pages (free tier)
- **CDN:** Cloudflare global CDN (automatic)
- **SSL:** Full HTTPS with auto-redirect (http→https)
- **URLs:** https://goldchartlive.com + https://www.goldchartlive.com

## Cloudflare Details
- **Account Email:** karmlino@gmail.com
- **Account ID:** d07d48641a703b25e53f70df27b18171
- **Zone ID:** a851f749e964b1186976a7c60367a5c6
- **Pages Project:** goldchartlive
- **Pages URL:** goldchartlive.pages.dev

## DNS Records
- `goldchartlive.com` → CNAME → `goldchartlive.pages.dev` (proxied)
- `www.goldchartlive.com` → CNAME → `goldchartlive.pages.dev` (proxied)

## Cloudflare Settings
- SSL: Full
- Always Use HTTPS: ON
- Auto Minify: CSS, JS, HTML all ON

## How to Deploy

### Quick Deploy (from Pi)
```bash
cd /home/kmlogloglog/clawd/livegoldprices

# 1. Make your changes to HTML/CSS/JS files

# 2. Commit to GitHub
git add -A
git commit -m "describe your changes"
git push origin main

# 3. Deploy to Cloudflare Pages
CLOUDFLARE_EMAIL="karmlino@gmail.com" \
CLOUDFLARE_API_KEY="1aabf24b59ce0237b65ae3446757b2232286b" \
CLOUDFLARE_ACCOUNT_ID="d07d48641a703b25e53f70df27b18171" \
npx wrangler pages deploy . --project-name=goldchartlive --branch=main --commit-dirty=true
```

### One-liner deploy
```bash
cd /home/kmlogloglog/clawd/livegoldprices && \
git add -A && git commit -m "update" && git push origin main && \
CLOUDFLARE_EMAIL="karmlino@gmail.com" \
CLOUDFLARE_API_KEY="1aabf24b59ce0237b65ae3446757b2232286b" \
CLOUDFLARE_ACCOUNT_ID="d07d48641a703b25e53f70df27b18171" \
npx wrangler pages deploy . --project-name=goldchartlive --branch=main --commit-dirty=true
```

### Also still on Surge (preview/staging)
```bash
echo "karmlino@gmail.com" | surge --project . --domain gold-karim.surge.sh
```

## GitHub
- **Repo:** https://github.com/kmlogloglog/livegoldprices
- **User:** kmlogloglog
- **Auth:** Token embedded in git remote URL

## Tech Stack
- Pure HTML/CSS/JS (static site, no build step)
- TradingView widgets (charts, ticker, market overview)
- GoldPrice.org API (live gold prices, 30s refresh)
- ExchangeRate API — open.er-api.com (FX rates, daily, no key)
- 10 currencies: USD, EUR, GBP, CHF, AUD, CAD, JPY, INR, SAR, EGP

## File Structure
```
├── index.html          # Dashboard (homepage)
├── news.html           # Gold news (TradingView timeline)
├── about.html          # About page
├── terms.html          # Terms of Service
├── privacy.html        # Privacy Policy
├── robots.txt          # Search engine crawl rules
├── sitemap.xml         # All page URLs for Google
├── blog/
│   ├── index.html      # Blog listing page
│   └── *.html          # 12 SEO articles
├── assets/
│   ├── css/style.css   # Shared styles
│   └── js/nav.js       # Navigation JS
└── DEPLOY.md           # This file
```
