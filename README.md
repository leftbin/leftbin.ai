# leftbin.ai

Public website for Leftbin's AI-native consulting business. Built with the Stigmer design system.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, static export) |
| Styling | Tailwind CSS v4 |
| Content | fumadocs-mdx (blog collection) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Components | CVA + clsx + tailwind-merge |
| Deployment | GitHub Pages (static export) |
| DNS | Cloudflare (CNAME for custom domain) |
| Package Manager | Yarn 4 |

## Development

```bash
make deps        # Install dependencies
make dev         # Start dev server
make build       # Production build (static export to out/)
make verify      # Lint + typecheck
make preview     # Build and serve locally
make clean       # Remove build artifacts
```

## Deployment

Push to `main` triggers GitHub Actions which builds the static export and deploys to GitHub Pages. DNS is managed via Cloudflare CNAME record pointing `leftbin.ai` to `leftbin.github.io`.
