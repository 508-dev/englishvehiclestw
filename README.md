# English-Language Car, Motorcycle, and Scooter Services in Taiwan

Interested in owning, or already own, a car, motorcycle, or scooter in Taiwan,
and daunted by the labyrinthian Chinese-language bureaucracy?

## Let our bilingual English- and Mandarin-speaking staff help out

Whatever your motor vehicle related needs are in Taiwan, we can help. Contact us today, or read more about our services below.

## Project Services and Operator

Fluent English / Chinese motor vehicle services are managed almost entirely by Mr. Lobster.
Why he's called Mr. Lobster remains a mystery, as does the origin of his fluent English ability. He's a Malaysian-born Taiwanese permanent resident with over a decade of experience repairing, buying, and selling cars, scooters, and motorcycles in Taiwan.

## Website Development/Maintenance

This website was built by Caleb Rogers, a member of the software engineering co-op [508.dev](https://508.dev). 508.dev is a design and development firm with a unique structure that allows it to beat any other engineering consultancy or agency on price and outcomes.
The website is built in [Astro](https://astro.build/), with a small hand-rolled CSS design system (no UI framework). The source code is available for viewing and licensed under AGPL-3. The content of the site is copyrighted by 508.dev, 2024.
The motorcycle favicon was provided by Freepik. Favicons were generated using realfavicongenerator.net.

## 🚀 Project Structure

```text
/
├── public/               # favicons, static files served as-is
├── src/
│   ├── components/       # Header, Footer, PageHero
│   ├── content/           # markdown for services & about pages
│   ├── content.config.ts # content collection schemas
│   ├── layouts/          # Layout, About, Service page shells
│   ├── pages/            # routes (index, about/*, services/*)
│   └── styles/global.css # design tokens & shared styles
└── package.json
```

Astro looks for `.astro` files in `src/pages/` (and dynamic `[...slug].astro` routes that read from `src/content/`). Each page is exposed as a route based on its file name.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚢 Deployment

The site deploys automatically to GitHub Pages. Every push to `main` triggers
[`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml), which builds
the Astro site and publishes it — no manual steps, no separate hosting
platform to manage. Check the [Actions tab](../../actions) if a deploy fails.

The custom domain (`englishvehicles.tw`) is configured directly in the
repo's GitHub Pages settings (Settings → Pages), not in code.

## Project Management

508.dev strives to keep project management up to date to make it as easy as possible
to contribute to our FOSS projects. Usually, our project-management system is built into
wherever you're viewing this repository. In this case, that's github.

For more information, or to see the other FOSS projects we work on, go to
<https://508.dev>

The current URL is <https://www.englishvehicles.tw/>

For more information, or to see the other FOSS projects we work on, go to <https://wiki.508.dev/s/foss-project-index>
