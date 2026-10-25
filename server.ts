
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
    status:  "ok" ,
    serviço:  "evaap-ai-api" ,
  } ));

  app.get( "/v1/features" , async () = > ( {
    características: [
      "ai-chat" ,
      "ferramentas de imagem" ,
      "rede social" ,
      "mensagens" ,
      "plataforma de vídeo" ,
      "notificações" ,
      "anúncio" ,
    ],
    status:  "planejado" ,
  } ));

  const port = Number(process.env.PORT || 3000 );

  aguarde app.listen( {
    porta,
    host:  "0.0.0.0" ,
  } );
}

iniciar().catch((erro) = > {
  app.log .error (erro);
  process.exit( 1 );
} );
