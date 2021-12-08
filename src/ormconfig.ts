import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

const config: ConnectionOptions = {
    type:"postgres",
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DATABASE || 'pinkTeam',
    entities: ["dist/entities/*.js"],
    extra: {ssl:false, rejectUnauthorized:false},
    logging:true,
    synchronize:true,
};
export default config;