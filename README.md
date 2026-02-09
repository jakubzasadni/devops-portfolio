# DevOps Portfolio - Jakub Zasadni

Profesjonalne portfolio DevOps Engineer zbudowane z React, TypeScript, Tailwind CSS i Vite.

## 🚀 Live Demo

[https://jakubzasadni.github.io/devops-portfolio/](https://jakubzasadni.github.io/devops-portfolio/)

## ✨ Features

- ⚡️ **React 18** + **TypeScript** + **Vite** - szybki development
- 🎨 **Tailwind CSS** - modern styling z greenową paletą kolorów
- 🐳 **Docker** - konteneryzacja dla łatwego deploymentu
- 🔄 **GitHub Actions** - automatyczny CI/CD do GitHub Pages
- 📱 **Responsive Design** - działa na wszystkich urządzeniach
- 🎯 **Real Projects** - prawdziwe projekty z Core Logic

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Docker
- GitHub Actions
- Nginx (production)

## 🏃 Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🐳 Docker

```bash
# Build and run with Docker Compose
docker-compose up --build

# Access at http://localhost:8080
```

## 📦 Deployment

Strona jest automatycznie deployowana na GitHub Pages przy każdym push do brancha `main`/`master`.

### Manual Deployment

```bash
# Build
npm run build

# Deploy dist/ folder to GitHub Pages
```

### GitHub Pages Setup

1. W ustawieniach repo: Settings → Pages
2. Source: GitHub Actions
3. Workflow automatycznie zbudujesię po push

## 📁 Project Structure

```
devops-portfolio/
├── src/
│   ├── components/     # React components
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles + animations
├── public/            # Static assets (logos)
├── .github/
│   └── workflows/     # GitHub Actions
├── Dockerfile         # Multi-stage Docker build
├── docker-compose.yml # Docker Compose config
└── vite.config.ts     # Vite configuration
```

## 🎨 Color Palette

- Primary: `#10b981` (Green)
- Secondary: `#059669` (Dark Green)
- Accent: `#34d399` (Light Green)

## 📧 Contact

- GitHub: [@jakubzasadni](https://github.com/jakubzasadni)
- LinkedIn: [Jakub Zasadni](https://www.linkedin.com/in/jakub-zasadni/)
- Email: kubazasadni23@gmail.com

---

Built with ❤️ by Jakub Zasadni
