import { buildSchema } from "type-graphql";
import {HelloWorldResolver} from "../resolvers/HelloWorldResolver";
import {UserResolver} from "../resolvers/UserResolver";

export const createSchema = () =>
    buildSchema({
        resolvers: [
            HelloWorldResolver,
            UserResolver
        ]
    })