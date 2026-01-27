EGI-HUB-HOME-REACT: Mobile-First Development Guide
iPhone-First Implementation Documentation
A comprehensive guide for developers joining the Florence EGI ecosystem

📱 Executive Summary
This project is the mobile-first web interface for the Florence EGI ecosystem—a blockchain-based platform that transforms tangible assets (art, real estate, documents) into certified, tradable digital assets with built-in environmental impact.

Core Philosophy
"iPhone First, Everything Else Second"

We built this application with a radical mobile-first approach:

Primary target: iPhone users (Safari iOS)
Design optimized for touch, swipe, and vertical scrolling
Desktop is a secondary concern (we have separate desktop implementations)
Every pixel, every animation, every interaction is designed for the palm of your hand
🎯 Project Vision
What is Florence EGI?
Florence EGI is an ecosystem that certifies value through blockchain technology:

OPERA → You have an asset (artwork, property, document)
CERTIFICAZIONE → We certify it on blockchain + apply Environmental Protection Protocol (EPP)
ASSET → It becomes a tradable, fractional, liquid digital asset
Motto: "Se esiste, Egizzalo. Se lo Egizzi, vale."
(If it exists, EGI it. If you EGI it, it's worth it.)

The Dual Governance Model
A unique feature explained in the Corporate page:

Florence EGI SRL: Operational engine (tech, partnerships, revenue)
Associazione Frangette APS: Guardian of values (ethics, 20% EPP protection, VETO power)
This prevents greenwashing and ensures the 20% environmental commitment is immutable.

🏗️ Architecture Overview
Tech Stack
Frontend (This Repo)
├── React 18 + TypeScript
├── Vite (build tool)
├── TailwindCSS (utility-first styling)
├── Framer Motion (animations)
├── Zustand (state management)
└── i18n (6 languages: it, en, pt, es, fr, de)
Deployment
├── Staging: https://egi-hub.13.53.205.215.sslip.io
└── Production: TBD
Project Structure
src/
├── pages/mobile/          # Mobile-specific pages (iPhone-first)
│   ├── HomePage.tsx       # Landing page with hero + platforms
│   ├── PlatformsPage.tsx  # Platform cards (EGI, NATAN, etc.)
│   ├── MissionPage.tsx    # Mission, values, roadmap
│   ├── TechPage.tsx       # Technical architecture
│   └── InfoPage.tsx       # Documentation hub
│
├── components/mobile/     # Mobile-specific components
│   ├── layout/            # Header, Footer, ScreenContainer
│   ├── ui/                # EgiExplainer, LiquidGlassCard
│   └── cards/             # PlatformCard
│
├── components/common/     # Shared components
│   └── SeoHead.tsx        # SEO meta tags + JSON-LD schema
│
├── data/content/          # Content separated by concern
│   ├── homepage.ts        # Homepage hero, CTA, features
│   ├── platforms.ts       # Platform definitions
│   ├── mission.ts         # Mission values
│   └── tech.ts            # Tech stack info
│
├── i18n/
│   ├── index.ts           # i18n hook
│   └── translations.ts    # ALL translations (6 languages)
│
├── stores/
│   └── useUIStore.ts      # Navigation state (Zustand)
│
└── utils/
    └── config.ts          # Environment-agnostic URLs + paths
🎨 Design Philosophy
1. Liquid Glass Aesthetic
We use a glassmorphism design language:

// Example: LiquidGlassCard component
className="bg-white/5 backdrop-blur-md border border-white/10"
Why?

Modern, premium feel
Depth without heaviness
Works beautifully with dark backgrounds
Emphasizes content over chrome
2. Vertical Scroll is King
Mobile users scroll. We embrace it:

No horizontal carousels (they break flow)
Stacked sections with clear visual hierarchy
Generous whitespace (breathing room)
Safe areas respected (pt-safe, pb-safe for iPhone notch/home indicator)
3. Touch-First Interactions
Every interactive element is designed for fingers, not cursors:

// Minimum touch target: 44x44px (Apple HIG)
className="p-4 min-h-[44px] active:scale-95 transition-transform"
Active states (:active pseudo-class for press feedback)
No hover-dependent UI (hover doesn't exist on touch)
Swipe gestures where appropriate
4. Typography Hierarchy
We use a strict typographic scale:

// Headings
h1: "text-4xl sm:text-5xl font-bold"
h2: "text-3xl sm:text-4xl font-bold"
h3: "text-xl sm:text-2xl font-bold"
// Body
body: "text-base" (16px)
small: "text-xs" (12px)
Font: System fonts (Rajdhani for headings, system-ui for body)

5. Color System
/* Tailwind config */
primary: '#FFD700'    /* Gold - certification, value */
secondary: '#10B981'  /* Emerald - environment, EPP */
dark: '#0A0A0A'       /* Almost black */
dark-light: '#1A1A1A' /* Elevated surfaces */
Rationale:

Gold = Value, certification, blockchain
Green = Environmental impact (EPP)
Dark = Premium, focus on content
🌍 Internationalization (i18n)
The 6-Language Mandate
P0-8 Rule: Every translation MUST exist in all 6 languages:

Code	Language	Why?
it	Italiano	Primary market (Florence, Italy)
en
English	Global standard
pt	Português	Brazilian market
es	Español	Spanish market
fr	Français	French market
de
Deutsch	German market
How to Add Translations
Never hardcode strings:
// ❌ BAD
<h1>Welcome to EGI</h1>
// ✅ GOOD
<h1>{t('homepage.hero.title')}</h1>
Add to all 6 languages simultaneously:
// src/i18n/translations.ts
export const translations = {
  it: {
    'homepage.hero.title': 'Benvenuto in EGI'
  },
  en: {
    'homepage.hero.title': 'Welcome to EGI'
  },
  pt: {
    'homepage.hero.title': 'Bem-vindo ao EGI'
  },
  // ... es, fr, de
}
Use the hook:
import { useI18n } from '@/i18n';
const { t, locale } = useI18n();
Content Strategy
We separate content from code:

// src/data/content/homepage.ts
export const homepageContent = {
  it: {
    hero: {
      headline: "Dove l'opera trova la sua forma completa.",
      subheadline: "Proteggiamo, certifichiamo..."
    }
  },
  en: { /* ... */ }
}
Why?

Content editors can work without touching components
Easier to maintain consistency across languages
Cleaner component code
📄 Page-by-Page Breakdown
HomePage (/)
Purpose: First impression, value proposition, platform overview

Structure:

Hero Section

Full-screen background image (golden spheres)
Headline + subheadline
Primary CTA: "Esplora Piattaforme"
EGI Explainer widget (OPERA → CERTIFICAZIONE → ASSET)
Platforms Grid

Cards for each platform (EGI, NATAN, INFO)
Status badges (LIVE / COMING SOON)
Quick access to sub-ecosystems
Mission Control Section

4 key benefits (Asset Certificati, Pagamenti Istantanei, etc.)
Visual icons from Lucide React
Key Files:

src/pages/mobile/HomePage.tsx
src/data/content/homepage.ts
src/components/mobile/ui/EgiExplainer.tsx
PlatformsPage (/platforms)
Purpose: Detailed view of all platforms in the ecosystem

Content:

EGI: Art marketplace + blockchain certification
NATAN: Public Administration document management
INFO: Documentation hub
AMBIENTE: Environmental Protection Protocol
ORACODE: Cognitive operating system (OS3/OS4)
CORPORATE: Governance, team, legal
Each platform has:

Icon
Title + subtitle
Description
Status (LIVE/COMING SOON)
CTA button
Key Files:

src/pages/mobile/PlatformsPage.tsx
src/data/content/platforms.ts
src/components/mobile/cards/PlatformCard.tsx
MissionPage (/mission)
Purpose: Communicate vision, values, roadmap

Sections:

Hero: "La Nostra Visione"
Core Values: Cards with icons (Trasparenza, Innovazione, Sostenibilità)
Roadmap: Q1-Q4 2026 milestones
Design Note: Uses gradient backgrounds and glassmorphic cards

TechPage (/tech)
Purpose: Explain technical architecture to developers/partners

Content:

Hub & Spoke architecture diagram (conceptual)
Tech stack breakdown (Frontend, Backend, Blockchain)
Oracode System explanation
Key Insight: This page is more technical but still mobile-optimized (no complex diagrams that don't scale)

InfoPage (/info)
Purpose: Gateway to external documentation

Behavior:

Simple page with CTA
Links to https://egi-info.13.53.205.215.sslip.io
Minimal, focused
🧩 Key Components
Header (
src/components/mobile/layout/Header.tsx
)
Features:

Fixed position, translucent background
Logo + brand name
Hamburger menu (full-screen overlay)
Language switcher (future)
Critical Fix Applied:

Removed hardcoded style={{ paddingTop: '60px' }} that caused excessive whitespace
Now uses Tailwind classes: pt-6 pb-4
Menu Overlay:

Full-screen black backdrop (bg-black/95)
Refined typography (large, light font)
Smooth animations (fade-in)
Footer (
src/components/mobile/layout/Footer.tsx
)
Content:

Company links (Chi Siamo, Partner, Contatti)
Product links (Piattaforme, Progetti)
Legal (Privacy, Terms, Cookies)
Copyright + motto
Design: Minimal, dark, text-focused

ScreenContainer (
src/components/mobile/layout/ScreenContainer.tsx
)
Purpose: Wrapper for all pages

Features:

Handles safe areas (pt-safe, pb-safe)
Consistent padding
Scroll behavior
SeoHead (
src/components/common/SeoHead.tsx
)
Purpose: SEO optimization for every page

What it does:

<SeoHead 
  title="Florence EGI - Ecosystem"
  description="Blockchain certification for art and assets"
  schema={{ "@type": "WebSite", ... }}
/>
Generates:

<title> tag
Meta description
Open Graph tags (Facebook, LinkedIn)
Twitter Card tags
JSON-LD structured data (Google)
Why it matters: Better search rankings, rich social previews

EgiExplainer (
src/components/mobile/ui/EgiExplainer.tsx
)
Purpose: Visual explanation of the EGI formula

Design:

[OPERA] -----> [CERTIFICAZIONE] -----> [ASSET]
                  (Blockchain + EPP)
Icons from Lucide React
Gradient connectors
Glassmorphic card container
Critical Fix Applied:

Removed unused React and motion imports (caused build failure)
🔧 Configuration & Environment
src/utils/config.ts
Purpose: Single source of truth for URLs and paths

const config = {
  logoPath: '/assets/logo/logo-v2.png',
  heroPath: '/assets/hero-images/hub-hero.png',
  appUrl: 'https://egi-hub.13.53.205.215.sslip.io',
  infoUrl: 'https://egi-info.13.53.205.215.sslip.io',
  // ...
}
Why?

Environment-agnostic (works in dev, staging, prod)
Easy to override with 
.env
 variables
No hardcoded URLs in components
Recent Change: Logo renamed to logo-v2.png for cache-busting

🚀 Deployment Pipeline
Build Process
npm run build
# Runs: tsc && vite build
Critical: TypeScript is in strict mode. Unused imports = build failure.

Recent Deployment Issues & Fixes
Unused Import Error:

Problem: import React from 'react' in EgiExplainer (not used)
Fix: Removed unused imports
Lesson: Always check for unused variables before pushing
Logo Not Deploying:

Problem: File existed locally but not in deployment
Root cause: Git cache / deployment cache
Fix: Renamed file to logo-v2.png (cache-busting)
Updated 
config.ts
 to reference new filename
Header Spacing Issue:

Problem: Excessive whitespace between logo and menu button
Root cause: Inline style paddingTop: '60px' overriding Tailwind
Fix: Removed inline styles, used pt-6 pb-4 classes
📐 Design Patterns & Best Practices
1. Responsive Design
We use Tailwind's responsive prefixes:

className="text-4xl sm:text-5xl"
//         ↑ mobile   ↑ tablet+
Breakpoints:

sm: 640px (large phones, small tablets)
md
: 768px (tablets)
lg: 1024px (desktop)
Philosophy: Design for 375px width (iPhone SE), enhance upward.

2. Animation Strategy
Principle: Subtle, purposeful, performant

// Micro-interactions
className="active:scale-95 transition-transform duration-150"
// Page transitions
className="animate-in fade-in slide-in-from-bottom-10 duration-1000"
Rules:

Use transform and opacity (GPU-accelerated)
Avoid animating width, height, top, left (causes reflow)
Keep durations under 300ms for interactions, 1000ms for page loads
3. State Management
We use Zustand (minimal, no boilerplate):

// src/stores/useUIStore.ts
export const useUIStore = create<UIStore>((set) => ({
  currentPage: '/',
  navigate: (path) => {
    set({ currentPage: path });
    window.history.pushState({}, '', path);
  }
}));
Why Zustand?

Simpler than Redux
No Context Provider hell
TypeScript-friendly
Tiny bundle size
4. Image Optimization
Strategy:

Use WebP format where possible
Lazy load below-the-fold images
Provide alt text for accessibility
<img 
  src={config.heroPath} 
  alt="EGI Ecosystem Hub"
  loading="lazy"
  className="w-full h-full object-cover"
/>
🐛 Common Pitfalls & Solutions
Issue: "Changes not showing in deployment"
Possible causes:

Browser cache: Hard refresh (Cmd+Shift+R on Mac)
CDN cache: Wait 5-10 minutes or purge cache
Build cache: Delete dist/ and rebuild
Git not pushed: Check git status and git push
Solution: Use cache-busting (rename files, add version query params)

Issue: "TypeScript build errors"
Common errors:

TS6133: Unused variable
TS2307: Cannot find module
Solution:

# Check locally before pushing
npm run build
# Fix unused imports
# Remove or comment out unused variables
Issue: "i18n key not found"
Symptoms: [Missing translation: key.name] in UI

Solution:

Check key exists in 
src/i18n/translations.ts
Verify it's in all 6 languages
Check for typos in key name
📚 Content Guidelines
Writing for Mobile
Be concise: Mobile users skim
Front-load value: Put key info first
Use short paragraphs: 2-3 lines max
Bullet points > walls of text
Tone of Voice
Professional but human: We're serious about blockchain, not boring
Confident, not arrogant: "We certify value" not "We're the best"
Transparent: Explain the dual governance, the 20% EPP, the tech
Example (Good vs Bad)
❌ Bad:

"Florence EGI is a revolutionary blockchain-based ecosystem leveraging cutting-edge distributed ledger technology to facilitate the tokenization of real-world assets through a proprietary certification protocol."

✅ Good:

"We turn your assets into certified, tradable digital value. Art, property, documents—if it exists, we can EGI it."

🔐 Security & Privacy
GDPR Compliance
Cookie consent (future implementation)
Privacy policy link in footer
No tracking without consent
Asset Security
Blockchain certification (immutable)
Smart contract audits (planned)
User authentication (future)
🎯 Roadmap & Future Work
Q1 2026
 Mobile-first homepage
 Platform pages
 i18n (6 languages)
 Language switcher UI
 Cookie consent banner
Q2 2026
 User authentication
 Asset upload flow
 Payment integration (Stripe)
 Desktop optimization
Q3 2026
 NATAN platform launch
 Environmental dashboard
 Marketplace beta
🛠️ Developer Workflow
Getting Started
# Clone repo
git clone https://github.com/AutobookNft/EGI-HUB-HOME-REACT.git
cd EGI-HUB-HOME-REACT
# Install dependencies
npm install
# Start dev server
npm run dev
# Opens on http://localhost:5173
# Build for production
npm run build
# Preview production build
npm run preview
Git Workflow
# Create feature branch
git checkout -b feature/my-feature
# Make changes, commit
git add .
git commit -m "[FEAT] Add new feature"
# Push to remote
git push origin feature/my-feature
# Create PR on GitHub
Commit Message Format (from 
.github/copilot-instructions.md
):

[FEAT] - New feature
[FIX] - Bug fix
[REFACTOR] - Code refactoring
[I18N] - Translation updates
[DOC] - Documentation
📞 Support & Resources
Internal Documentation
Oracode System: 
.github/00_OSZ_ORACODE_SYSTEM_ZERO.md
OS3 Principles: 
.github/PADMIN_IDENTITY_OS3_P1_PRINCIPLES.md
Architecture: docs/Core/01_PLATFORME_ARCHITECTURE.md
External Links
Staging: https://egi-hub.13.53.205.215.sslip.io
Info Portal: https://egi-info.13.53.205.215.sslip.io
GitHub: https://github.com/AutobookNft/EGI-HUB-HOME-REACT
Key Contacts
Project Lead: Fabio Cherici
Tech Stack: React + TypeScript + Tailwind
Design Philosophy: iPhone-first, glassmorphism, vertical scroll
🎓 Learning Resources
For React Beginners
React Docs
TypeScript Handbook
For Mobile Design
Apple Human Interface Guidelines
Mobile UX Best Practices
For Tailwind CSS
Tailwind Docs
Tailwind UI Components
✅ Checklist for New Developers
Before your first commit:

 Read this entire document
 Run npm install and npm run dev successfully
 Understand the i18n system (add a test translation)
 Review the Header component (understand the spacing fix)
 Check 
config.ts
 (know where URLs come from)
 Read 
.github/copilot-instructions.md
 (P0 rules)
 Test on an actual iPhone (Safari iOS)
 Understand the dual governance model (SRL + APS)
🏁 Final Notes
This is not just a website. It's the front door to an ecosystem that wants to change how we think about value, ownership, and environmental responsibility.

Every pixel matters. Every word matters. Every interaction should feel premium, transparent, and purposeful.

Welcome to Florence EGI. Let's build something that matters.

Document Version: 1.0
Last Updated: January 27, 2026
Author: EGI Development Team