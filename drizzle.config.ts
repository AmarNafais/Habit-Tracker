import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
    throw new Error(
        'DATABASE_URL is missing. Ensure the database is provisioned.'
    );
}

export default defineConfig({
    out: './migrations',
    schema: './shared/schema.ts',
    dialect: 'mysql',
    dbCredentials: {
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        database: process.env.DB_NAME || '',
    },
});
