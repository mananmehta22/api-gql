import express from "express";
import apolloServer from "apollo-server-express";
import typeDefs from "./Schema/TypeDefs.js";
import resolvers from "./Schema/Resolvers.js";
const { ApolloServer } = apolloServer;

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({ typeDefs, resolvers })
    const app = express()
    await server.start();
    server.applyMiddleware({ app })
    
    app.listen({ port: 4000 }, () => {
        console.log("🚀 Server ready at port 4000")
    });
    }
    
    startApolloServer(typeDefs, resolvers);