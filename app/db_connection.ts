import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

const connectDB = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + "/models/*.ts"],
    synchronize:true
}) 

export default connectDB;
