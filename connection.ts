import { Pool, PoolClient, Client } from "./deps.ts"; 

const connections = async (URI: string, pools: number, isLazy: boolean) => {
  const pool = new Pool(URI, pools, isLazy);
  const connection = await pool.connect();
}

export { connections };