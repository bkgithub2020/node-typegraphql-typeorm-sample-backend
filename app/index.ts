import "reflect-metadata";
import connectDB from "./db_connection";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import { createSchema } from "./utils/create-schema";

dotenv.config();

connectDB
        .initialize()
        .then(async () => {
            const app = express();

            const schema = await createSchema();
            const apolloServer = new ApolloServer({
                schema: schema
            })

            await apolloServer.start();
            apolloServer.applyMiddleware({ app });

            app.listen(process.env.PORT, () => {
                console.log(`Server started on port ${process.env.PORT}`);
            });

        })
        .catch((err) => {
            console.error(`Data Source initialization error`, err);
        })