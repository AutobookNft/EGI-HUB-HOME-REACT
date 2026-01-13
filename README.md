# EGI-HUB-HOME-REACT

Sistema frontend world-class per l'ecosistema FlorenceEGI, costruito con React + TypeScript + Three.js.

## 🚀 Quick Start

```bash
# Install dependencies (se non già fatto)
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Prerequisiti

- **Node.js** 18+ (LTS)
- **npm** 9+
- **EGI-HUB Backend** running su `http://localhost:8001`

## 🏗️ Stack Tecnologico

- **React 18** + **TypeScript 5** - UI Framework
- **Vite** - Build tool ultra-veloce
- **Three.js** + **React Three Fiber** - 3D rendering engine
- **Framer Motion** - Animazioni world-class
- **Tailwind CSS** - Styling utility-first
- **Zustand** - State management minimal
- **TanStack Query** - Server state + caching
- **Axios** - HTTP client

## 📁 Struttura Progetto

```
src/
├── components/       # UI Components
│   ├── layout/      # TopBar, Sidebar, DetailPanel, etc
│   ├── three/       # 3D Scene components (R3F)
│   └── ui/          # Shared UI (Button, Loader, etc)
├── features/        # Feature modules (ecosystem, etc)
├── services/        # API layer
├── stores/          # Zustand stores
├── hooks/           # Custom hooks
├── types/           # TypeScript types
├── utils/           # Utilities
└── styles/          # Global styles
```

## 🔌 Backend Integration

Il frontend si connette al backend EGI-HUB su **porta 8001**:

- **API Base**: `http://localhost:8001/api`
- **Auth**: Sanctum token-based
- **Multi-tenant**: Header `X-Tenant-ID`

### Environment Variables

Vedi `.env.local` per configurazione:

```env
VITE_API_BASE_URL=http://localhost:8001/api
VITE_EGI_TENANT_URL=http://localhost:8004
VITE_NATAN_TENANT_URL=http://localhost:8000
```

## 🎨 Design Standards

Questo progetto segue **standard world-class** (vedi `design_standards_world_class.md`):

- ✅ Rendering 3D AAA con PBR
- ✅ Animazioni 60fps+ smooth
- ✅ UI minimal perfection
- ✅ Accessibility WCAG 2.1 AA
- ✅ Performance Lighthouse 95+

## 🛠️ Script Disponibili

| Script | Descrizione |
|--------|-------------|
| `npm run dev` | Avvia dev server (porta 5174) |
| `npm run build` | Build produzione |
| `npm run preview` | Preview build produzione |
| `npm run lint` | Lint TypeScript/ESLint |
| `npm run type-check` | Type checking TypeScript |

## 📊 Port Mapping Ecosistema

| Servizio | Porta | URL |
|----------|-------|-----|
| **EGI-HUB Frontend** (questo) | 5174 | http://localhost:5174 |
| **EGI-HUB Backend** | 8001 | http://localhost:8001 |
| **NATAN_LOC** | 8000 | http://localhost:8000 |
| **EGI (tenant)** | 8004 | http://localhost:8004 |

## 🚧 Status Implementazione

### ✅ Completato

- [x] Setup progetto (Vite + React + TS)
- [x] Configurazione Tailwind CSS
- [x] API service layer + interceptors
- [x] Zustand UI store
- [x] React Query hooks
- [x] Layout components (TopBar, Sidebar, DetailPanel, BottomBar)
- [x] Loader component
- [x] Types definiti
- [x] Environment setup

### 🚧 In Progress

- [ ] Scene 3D (React Three Fiber)
- [ ] ComplexNode component (magma core + glass + rings)
- [ ] Shaders (volumetric magma, glass refraction)
- [ ] Post-processing (Bloom, DoF)
- [ ] Animations (Framer Motion + GSAP)

### 📋 TODO

- [ ] Backend API endpoints effettivi
- [ ] Authentication flow
- [ ] Mobile responsive UX
- [ ] Tests (Vitest + Playwright)
- [ ] Performance optimization
- [ ] Deployment setup

## 🎯 Next Steps

1. Implementare Scene 3D con React Three Fiber
2. Migrare shaders da vanilla Three.js
3. Connettere backend API reale
4. Animazioni avanzate con Framer Motion
5. Testing e optimization

## 📚 Documentazione

Vedi artifact folder per documentazione completa:

- `implementation_plan.md` - Piano implementazione dettagliato
- `design_standards_world_class.md` - Standard qualitativi
- `ecosystem_ports.md` - Port mapping e configurazione

## 🤝 Contributing

Questo progetto segue **ZERO COMPROMESSI** sulla qualità.

Ogni PR deve passare:
- ✅ Type checking (TypeScript strict)
- ✅ Lint (ESLint)
- ✅ Performance (Lighthouse 95+)
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Design review (world-class standards)

---

**Motto**: *"Se esiste, lo egizziamo. Se lo egizziamo, VALE."*
# EGI-HUB-HOME-REACT
