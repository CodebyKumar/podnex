# @repo/redis

Shared Redis client for the PodNex monorepo.

## Usage

```typescript
import { redis } from "@repo/redis";

// Use Redis
await redis.set("key", "value");
const value = await redis.get("key");
```

## Configuration

Set the `REDIS_URL` environment variable:

```env
REDIS_URL="redis://localhost:6379"
```

## Features

- Auto-reconnection with retry strategy
- Connection event logging
- Shared across all apps in the monorepo
