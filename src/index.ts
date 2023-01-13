import { ApolloServer } from "@apollo/server";
import { gql } from "apollo-server-core";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { json } from "body-parser";
import { resolvers } from "./resolvers/resolvers";
import { readFileSync } from "fs";
import { join } from "path";
import { MemberAPI } from "./resolvers/api/memberApi";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import { LolAPI } from "./resolvers/api/lolApi";
import express from "express";
import http from "http";
import cors from "cors";

const main = async () => {
  interface MyContext {
    token?: String;
  }
  const typeDefs = gql(
    readFileSync(join(__dirname, "..", "schema.graphql"), "utf-8")
  );
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    cache: new InMemoryLRUCache({
      // 100Mib
      maxEntrySize: Math.pow(2, 20) * 100,
      // 5min
      ttl: 300_000,
    }),
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        const token = `${req.headers.token}`;
        const { cache } = server;
        return {
          dataSources: {
            memberAPI: new MemberAPI({ cache, token }),
            lolAPI: new LolAPI({ cache, token }),
          },
        };
      },
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );

  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
};
main();
