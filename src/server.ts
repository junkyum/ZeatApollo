import expresss, { response } from 'express';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchemaSync } from 'type-graphql';
import  UserResolver from './graphql/resolver';
import { Member } from './graphql/Member';

const main = async () => {
    const schema = await buildSchemaSync({
        resolvers:[UserResolver],
        orphanedTypes:[Member]
    });
    
    const apolloServer = new ApolloServer({schema});
    await apolloServer.start();
    const app = expresss();
    apolloServer.applyMiddleware({app});
    app.listen(4000,() => {
            console.log(
                `launch on 4000`
            )
    });
};

main();


