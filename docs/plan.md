# Podnex – System Plan

## 1. Definition
SaaS + PaaS for automated podcast creation.  
Core: script generation, voice synthesis, audio mixing, episode publishing, API endpoints for external integrations.

## 2. User Types
- Workspace users (UI).  
- API consumers (PaaS).

## 3. Primary Modules
- Auth  
- Workspace  
- Projects  
- Episodes  
- Assets  
- Generation Pipeline  
- Publishing  
- Billing  
- Admin

## 4. Data Model (high-level)
User → Workspace → Project → Episode → RenderJobs → Assets → BillingUsage.

## 5. Input Modes
- Script input  
- Outline input  
- File upload (text/audio)

Unified into EpisodeInputObject.

## 6. Generation Pipeline
EpisodeInputObject →  
LLM rewrite →  
Voice selection →  
TTS render →  
Mixer pass (music bed, transitions) →  
Final Episode Artifact.

## 7. Editing Layer
- Inline script edits  
- Partial regeneration  
- Segment replacement  
- Full re-render

## 8. Publishing Layer
- Export MP3/WAV  
- Auto RSS episode  
- Integrations (Spotify, YouTube, webhook)

## 9. Automations
- Recurring episodes (template + schedule)  
- Queued batch generation

## 10. PaaS / API Layer
- API keys  
- Rate limits  
- Endpoints:  
  - `/generate/script`  
  - `/generate/voice`  
  - `/generate/episode`  
- Webhook for completion  
- Usage metering

## 11. Billing
- Workspace plans (tiers).  
- API consumption (per minute/character/render).  
- Overages tracked by Usage table.

## 12. Admin Panel
- Tenants  
- Usage dashboards  
- Model/voice configuration  
- Limits

## 13. Tech Stack Draft
- Next.js or React UI  
- Node backend  
- Queue system (Redis / RabbitMQ)  
- Object storage (S3/Supabase)  
- Postgres  
- TTS/LLM providers

## 14. Deployment
- Containerized services  
- API gateway  
- Worker fleet for rendering  
- CDN for audio assets

