import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import "dotenv/config";

const app = Fastify({
  logger: true,
});

async function start() {
  await app.register(helmet);

  await app.register(cors, {
    origin: process.env.APP_ORIGIN || false,
  });

  app.get("/", async () => ({
    name: "Evaap AI API",
    status: "online",
    version: "1.0.0",
  }));

  app.get("/health", async () => ({
    status: "ok",
    service: "evaap-ai-api",
  }));

  app.get("/v1/features", async () => ({
    features: [
      "ai-chat",
      "image-tools",
      "social-network",
      "messaging",
      "video-platform",
      "notifications",
      "advertising",
    ],
    status: "planned",
  }));

  const port = Number(process.env.PORT || 3000);

  await app.listen({
    port,
    host: "0.0.0.0",
  });
}

start().catch((error) => {
  app.log.error(error);
  process.exit(1);
});
