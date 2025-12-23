# Mayank Sharma - Portfolio & Blog

A minimal, clean portfolio website built with Next.js 14, featuring a markdown-based blog, dark mode, and static export for GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out` directory.

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── projects/          # Projects page
│   │   ├── blog/              # Blog listing & post pages
│   │   └── about/             # About page
│   ├── components/            # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── BlogCard.tsx
│   │   └── ThemeProvider.tsx
│   ├── content/
│   │   └── blog/              # Markdown blog posts
│   └── lib/
│       └── blog.ts            # Blog utilities
├── public/                    # Static assets
└── .github/
    └── workflows/
        └── deploy.yml         # GitHub Pages deployment
```

## ✍️ Writing Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2025-01-20"
excerpt: "A brief description of your post"
tags: ["tag1", "tag2"]
---

# Your Post Title

Your content here...
```

The blog supports:
- Headers (`#`, `##`, `###`)
- **Bold** and *italic* text
- `inline code` and code blocks
- Links and lists
- Blockquotes

## 🎨 Customization

### Colors & Theme

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #fafaf9;
  --foreground: #1c1917;
  --accent: #0d9488;
  /* ... */
}

.dark {
  --background: #0c0a09;
  --foreground: #fafaf9;
  --accent: #2dd4bf;
  /* ... */
}
```

### Personal Info

Update these files with your information:
- `src/app/layout.tsx` - Meta tags
- `src/app/page.tsx` - Home page content
- `src/app/projects/page.tsx` - Projects data
- `src/app/about/page.tsx` - About page
- `src/components/Footer.tsx` - Social links

## 🌐 Deployment to GitHub Pages

### Option 1: Automatic (Recommended)

1. Push to GitHub repository
2. Go to **Settings → Pages**
3. Under "Build and deployment", select **GitHub Actions**
4. Push to `main` branch - deployment happens automatically

### Option 2: Manual

1. Update `next.config.js` with your repo name:
   ```js
   basePath: '/your-repo-name',
   assetPrefix: '/your-repo-name/',
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Contents of `out` folder go to gh-pages branch
   ```

### Custom Domain

1. Add your domain in GitHub repo **Settings → Pages**
2. Create `public/CNAME` with your domain:
   ```
   yourdomain.com
   ```
3. Update `next.config.js`:
   ```js
   basePath: '',
   assetPrefix: '',
   ```

## 📝 Adding Profile Photo

Replace the avatar placeholder in `src/app/page.tsx`:

```tsx
// Current placeholder
<div className="w-20 h-20 rounded-full bg-gradient-to-br ...">
  <span className="text-2xl font-bold text-accent">MS</span>
</div>

// With actual image
import Image from 'next/image';

<Image
  src="/profile.jpg"
  alt="Mayank Sharma"
  width={80}
  height={80}
  className="rounded-full"
/>
```

Add your image to `public/profile.jpg`.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Blog**: Gray Matter (frontmatter parsing)
- **Deployment**: GitHub Pages (static export)

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!
