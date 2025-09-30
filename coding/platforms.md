# Platforms

This file lists platforms and services useful for building, hosting, publishing, and enhancing documentation, personal knowledge bases (PKM), and static sites. It's grouped so you can quickly scan for the type you need: hosting/CDN, clouds, static site generators/docs frameworks, PKM, CMS, CI/CD, search, analytics, identity, and complementary services.

## Static site / docs hosts

1. GitHub Pages
2. GitLab Pages
3. Vercel
4. Netlify
5. Cloudflare Pages
6. Surge.sh
7. Render
8. Fly.io
9. Railway
10. DigitalOcean App Platform
11. Platform.sh
12. Azure Static Web Apps
13. Firebase Hosting
14. AWS Amplify Hosting
15. Amazon S3 + CloudFront
16. Google Cloud Storage + Cloud CDN

## General cloud / VPS / object storage

1. Amazon Web Services (EC2, S3, Lightsail, Amplify)
2. Google Cloud Platform (Compute Engine, Cloud Run, Cloud Storage)
3. Microsoft Azure (App Service, Storage, Static Web Apps)
4. DigitalOcean (Droplets, App Platform, Spaces)
5. Oracle Cloud
6. Linode
7. Hetzner

## CDNs & edge

1. Cloudflare (CDN, Workers, Pages)
2. Fastly
3. Akamai
4. BunnyCDN
5. StackPath
6. AWS CloudFront
7. Google Cloud CDN

## CI / build pipelines (commonly used for docs deploys)

1. GitHub Actions
2. GitLab CI/CD
3. Bitbucket Pipelines
4. CircleCI
5. Travis CI
6. Azure Pipelines
7. Jenkins
8. Buildkite

## Static site generators / docs frameworks

1. VitePress (used in this repo)
2. Docusaurus
3. Hugo
4. Jekyll
5. MkDocs
6. Sphinx
7. Docsify
8. Antora

## Documentation / knowledge publishing platforms

1. Read the Docs
2. GitBook
3. Obsidian Publish
4. Notion (public pages)
5. Logseq (publishable)
6. Roam Research
7. TiddlyWiki

## Headless CMS & content backends

1. Contentful
2. Sanity
3. Strapi
4. Netlify CMS
5. Forestry
6. TinaCMS
7. Prismic
8. Ghost
9. Directus

## Personal Knowledge Management (PKM) & note platforms

1. Obsidian
2. Logseq
3. Roam Research
4. TiddlyWiki
5. Joplin (with publish workflows)

## Search & indexing

1. Algolia (DocSearch)
2. Meilisearch
3. Typesense
4. Elasticsearch / Elastic Cloud

## Vector DBs & AI search (for embeddings/semantic search)

1. Pinecone
2. Weaviate
3. Milvus
4. Chroma
5. RedisVector

## Analytics & privacy-friendly metrics

1. Google Analytics
2. Plausible Analytics
3. Fathom Analytics
4. Umami
5. PostHog

## Authentication & identity

1. Auth0
2. Firebase Authentication
3. Netlify Identity
4. Clerk
5. Okta
6. Supabase Auth

## Backend / BaaS & realtime features

1. Firebase (Firestore, Functions)
2. Supabase
3. AWS Lambda + API Gateway
4. Azure Functions
5. Appwrite
6. Hasura

## Image/media & asset services

1. Cloudinary
2. Imgix
3. Netlify Large Media / Git LFS

## Monitoring & error tracking

1. Sentry
2. Rollbar

## Self-hosting / infra tooling

1. Docker + Nginx
2. Caddy
3. Kubernetes
4. Traefik

## Small / experimental / demo hosts

1. Replit
2. Glitch
3. StackBlitz
4. SourceHut pages
5. Neocities

## Companion services & utilities

1. Let's Encrypt (TLS)
2. Dependabot / Renovate (dependency updates)
3. CI/CD deploy integrations (Vercel/Netlify/GitHub Actions plugins)

## Quick recommended pairings (for VitePress sites)

- VitePress + Vercel (fast deploy, preview PRs)
- VitePress + Netlify (build plugins, redirects)
- VitePress + GitHub Pages (simple, free)
- Add Algolia DocSearch or Meilisearch for fast site search
- Use Cloudflare or CloudFront in front of S3 for global CDN and caching

If you'd like a narrower list (only static hosts, only PKM publishing options, or ranked recommendations with pros/cons), tell me which category to expand and I will update this file accordingly.