# FeedTheBlock NYC

**Feeding NYC, one block at a time.**

FeedTheBlock NYC is a donation website for a grassroots effort to feed unhoused New Yorkers. People donate online, we use that money to buy real food (bread, turkey, peanut butter, jelly, and water), and we hand it out ourselves on the streets of New York City. Every food run gets posted with photos and receipts, so donors can see exactly where their money went.

> **Note:** FeedTheBlock NYC is not a registered nonprofit, so donations are not tax-deductible.

## Why we built this

Most New Yorkers want to help, but a lot of us hesitate to hand over cash because we don't know where it will go. This project is our answer to that: a simple, honest way to give, with proof.

We're also using this project to learn web development from the ground up, and we're building it in the open. The commit history shows every step, every mistake, and every fix along the way.

## Tech stack

**Current:**
- HTML
- CSS (custom properties / variables, Flexbox, CSS Grid, media queries)
- Git and GitHub for version control

**Planned:**
- JavaScript (language picker, interactive features)
- React (reusable components for the header, footer, and cards)
- Stripe (secure online donations)
- GitHub Pages + custom domain (feedtheblocknyc.com)

## Project structure

```
FeedTheBlock/
├── index.html       # Home (landing page)
├── purpose.html     # Our Purpose
├── impact.html      # Impact: food runs, photos, and receipts
├── donate.html      # Donate
├── about.html       # About Us: the co-founders
├── README.md        # This file
├── css/
│   └── style.css    # All site styles, with a "control panel" of variables at the top
└── images/
    └── logo-icon.png
```

## Run it locally

No install needed. It's plain HTML and CSS.

1. Clone the repo:
   ```bash
   git clone https://github.com/kazi011225/FeedTheBlock-NYC.git
   ```
2. Open the folder:
   ```bash
   cd FeedTheBlock-NYC
   ```
3. Open the home page in your browser:
   ```bash
   open index.html
   ```

## Roadmap

- [x] Set up the repo, logo, and Git workflow
- [x] Landing page: layout, nav bar, footer, and brand colors
- [x] Language picker UI (13 languages spoken across NYC)
- [ ] Build the Our Purpose, Impact, Donate, and About Us pages
- [ ] Make the language picker actually translate the site (JavaScript)
- [ ] Put the site online with GitHub Pages and connect feedtheblocknyc.com
- [ ] Add secure donations with Stripe
- [ ] Rebuild the site in React

## How we work on this

Every feature is built on its own branch, then merged into `main` with a pull request. Commit messages describe what changed and why, so the history tells the story of how the site was built.

## Follow along

- Instagram: [@feedtheblocknyc](https://www.instagram.com/feedtheblocknyc)
- Email: FeedTheBlockNYC@gmail.com

---

Built by the FeedTheBlock NYC team, from across the five boroughs.