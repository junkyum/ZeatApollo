"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const resolver_1 = __importDefault(require("./graphql/resolver"));
const Member_1 = require("./graphql/Member");
const main = async () => {
    const schema = await (0, type_graphql_1.buildSchemaSync)({
        resolvers: [resolver_1.default],
        orphanedTypes: [Member_1.Member]
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({ schema });
    await apolloServer.start();
    const app = (0, express_1.default)();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log(`launch on 4000`);
    });
};
main();
