import { Knex, knex } from "knex";
import dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import path from "path";

dotenv.config({ path: path.join(__dirname, "../.env") });

const config: Knex.Config = {
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: 3306,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    pool: { min: 0, max: 7 },
};

export const db = knex(config);
