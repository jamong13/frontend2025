# Modern Portfolio Website

A fully responsive, modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🚀 Built with Next.js 14 (App Router)
- 🎨 Styled with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 SEO optimized
- ⚡ Fast and performant

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
port5/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── Projects.tsx
├── lib/
│   └── constants.ts
├── public/
│   └── (add your assets here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

### Update Personal Information

1. Edit `app/page.tsx` to modify the main content
2. Update `lib/constants.ts` with your:
   - Navigation links
   - Social media links
   - Projects
   - Skills

### Styling

- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the project:

```bash
npm run build
```

The output will be in the `.next` folder, ready for deployment.

## License

MIT

