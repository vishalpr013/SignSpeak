# SignSpeak 🤟

> AI-Powered Sign Language Translation Platform

SignSpeak is a modern web application that bridges the communication gap between sign language users and the hearing community through real-time AI-powered translation technology.

![SignSpeak Banner](./src/assets/hero-sign-language.jpg)

## 🌟 Features

- **Real-time Translation**: Instant sign language to text/speech conversion
- **AI-Powered Recognition**: Advanced machine learning models for accurate gesture recognition
- **User-Friendly Interface**: Clean, accessible, and intuitive design
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Translation Demo**: Interactive demonstration of sign language translation capabilities
- **Accessibility First**: Built with accessibility standards in mind

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or [bun](https://bun.sh/) package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/parthraninga/gestu-connect-08265.git
   cd SignSpeak
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:8080`

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling

### UI Components
- **shadcn/ui** - High-quality, accessible UI components
- **Radix UI** - Unstyled, accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework

### State Management & Data Fetching
- **TanStack Query (React Query)** - Powerful data synchronization
- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation

### Additional Libraries
- **Lucide React** - Beautiful icon library
- **Recharts** - Composable charting library
- **Sonner** - Toast notifications
- **Vaul** - Drawer component

## 📁 Project Structure

```
SignSpeak/
├── public/              # Static assets
│   ├── favicon.ico
│   └── placeholder.svg
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── TranslationDemo.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:8080` |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Features Overview

### Hero Section
Eye-catching landing section that introduces the platform's mission and core value proposition.

### Features
Comprehensive overview of SignSpeak's capabilities:
- Real-time translation accuracy
- Multi-platform support
- AI-powered gesture recognition
- Privacy-focused design

### Translation Demo
Interactive demonstration showing how sign language gestures are translated in real-time.

### How It Works
Step-by-step explanation of the translation process and technology behind SignSpeak.

### Call to Action
Engaging section encouraging users to try the platform or learn more.

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration. See `tailwind.config.ts` for customization options.

### TypeScript
TypeScript configuration is split into:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node-specific settings

### Vite
Custom Vite configuration includes:
- React SWC plugin for fast refresh
- Path aliases (`@/` points to `src/`)
- Development server on port 8080

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow the existing code style
- Run `npm run lint` before committing
- Write meaningful commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
