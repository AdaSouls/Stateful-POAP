import type { Pool } from 'pg';
/**
 * Pool of Postgres connections to avoid overhead of connecting on every request.
 */
export declare const creds: {
    host: string | undefined;
    user: string | undefined;
    password: string | undefined;
    database: string | undefined;
    port: number;
};
/**
 * Function to get access to the readonly DB pool.
 * creds argument is ignored after initial (paima-engine internal) setup.
 * @returns readonly DB connection
 */
export declare function requirePool(): Pool;
