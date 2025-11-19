# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint with automatic fixes

### Installation
- `npm install` - Install dependencies

## Project Architecture

This is a Next.js 16 application using the App Router with HeroUI v2 as the primary UI framework.

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI Library**: HeroUI v2 (Hero UI components)
- **Styling**: Tailwind CSS with custom brand theme
- **Language**: TypeScript with strict configuration
- **State Management**: React Context via providers
- **Theme**: next-themes for dark/light mode switching

### Directory Structure

**App Router Structure** (`app/`):
- Route-based page organization with `page.tsx` and `layout.tsx`
- Shared `providers.tsx` for HeroUI and theme providers
- Routes: `/`, `/about`, `/blog`, `/docs`, `/pricing`

**Components** (`components/`):
- Reusable UI components (navbar, theme-switch, icons, etc.)
- `primitives.ts` for shared component utilities

**Configuration** (`config/`):
- `application-config.ts` - Environment-based app configuration with Firebase setup
- `site.ts` - Navigation configuration and site metadata
- `fonts.ts` - Font configurations

**Library** (`lib/`):
- `enums/` - TypeScript enums (breakpoints, environment, status, etc.)
- `interfaces/` - TypeScript interfaces
- `types/` - Custom type definitions including Next.js types

### Path Mappings

The project uses extensive path mappings (defined in `tsconfig.json`):
- `@app/*` → `app/*`
- `@components/*` → `components/*`
- `@config/*` → `config/*`
- `@lib/*` → `lib/*`
- `@styles/*` → `styles/*`
- `@utils/*` → `utils/*`
- Plus mappings for api, errors, icons, images, layouts, loading, repositories, services, tasks, widgets

### Styling and Theming

**HeroUI Theme Configuration**:
- Custom "brand" theme with specific color palette
- Primary color: `#ee422c`
- Configured in `tailwind.config.js` with HeroUI plugin

**Component Architecture**:
- Uses HeroUI components extensively (Navbar, Button, Input, etc.)
- Follows HeroUI naming conventions and prop patterns
- Theme switching via next-themes integration

### Key Patterns

**Code Style**:
- Comprehensive ESLint configuration with TypeScript, React, and import rules
- Strict TypeScript settings with unused variable warnings
- Import organization with specific grouping and newlines
- React component prop sorting and padding line rules

**Component Structure**:
- Functional components with TypeScript
- Extensive use of HeroUI component library
- Consistent import organization (node_modules first, then local imports)
- Props destructuring in components

**Environment Configuration**:
- Environment variables prefixed with `NEXT_PUBLIC_`
- Firebase integration setup
- Comprehensive application configuration in `@config/application-config`

### Development Notes

- No existing test setup - when adding tests, check if Jest or Vitest should be configured
- Uses Turbopack for fast development builds
- TypeScript strict mode enabled with comprehensive compiler options
- ESLint configured for automatic fixes and consistent code style