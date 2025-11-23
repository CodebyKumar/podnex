# Podnex

**Automated Podcast Creation Platform** – SaaS + PaaS for end-to-end podcast production.

## Overview

Podnex is a comprehensive platform that automates the entire podcast creation workflow, from script generation to publishing. It serves both workspace users through a web interface and API consumers through a robust PaaS layer.

## Core Features

### 🎙️ Generation Pipeline
- **Script Generation**: AI-powered script writing from outlines or prompts
- **Voice Synthesis**: High-quality TTS with multiple voice options
- **Audio Mixing**: Automated music beds, transitions, and effects
- **Episode Publishing**: Direct export to MP3/WAV and RSS feeds

### 📝 Input Modes
- Script input (direct text)
- Outline input (AI expansion)
- File upload (text/audio)

### ✏️ Editing Layer
- Inline script edits
- Partial regeneration
- Segment replacement
- Full re-render capabilities

### 🔄 Automation
- Recurring episodes with templates
- Scheduled generation
- Queued batch processing

### 🔌 API Layer (PaaS)
- RESTful endpoints for external integrations
- Rate-limited API keys
- Webhook notifications
- Usage metering and billing

## Architecture

### Modules
- **Auth**: User authentication and authorization
- **Workspace**: Multi-tenant workspace management
- **Projects**: Podcast project organization
- **Episodes**: Episode creation and management
- **Assets**: Media storage and retrieval
- **Generation Pipeline**: AI-powered content creation
- **Publishing**: Distribution to platforms (Spotify, YouTube, RSS)
- **Billing**: Usage tracking and subscription management
- **Admin**: System administration and monitoring

### Data Flow
```
User → Workspace → Project → Episode → RenderJobs → Assets → Publishing
```

## Tech Stack

- **Frontend**: Next.js 15 with React 19
- **UI**: shadcn/ui components with Tailwind CSS
- **Backend**: Node.js/Bun runtime
- **Database**: PostgreSQL
- **Queue System**: Redis/RabbitMQ
- **Storage**: S3/Supabase for audio assets
- **AI/ML**: LLM providers for script generation, TTS providers for voice synthesis

## Project Structure

This is a monorepo managed with Turborepo and pnpm workspaces:

```
podnex/
├── apps/
│   ├── web/          # Next.js frontend application
│   ├── api/          # Backend API service
│   └── tests/        # E2E and integration tests
├── packages/
│   ├── ui/           # Shared UI components (shadcn/ui)
│   ├── eslint-config/
│   └── typescript-config/
└── docs/             # Documentation and planning
```

## Getting Started

### Prerequisites
- Node.js >= 20
- pnpm 10.4.1+

### Installation

```bash
# Install dependencies
pnpm install

# Run development servers
pnpm dev

# Build all apps
pnpm build

# Lint codebase
pnpm lint
```

### Adding UI Components

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

Components are placed in `packages/ui/src/components` and can be imported:

```tsx
import { Button } from "@workspace/ui/components/button"
```

## License

Private - All rights reserved
