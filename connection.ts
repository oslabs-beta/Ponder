import { Pool, PoolClient, Client } from "./deps.ts"; 

const connections = async (URI: string, pools: number, isLazy: boolean) => {
  const pool = new Pool(URI, pools, isLazy);
  const connection = await pool.connect();
  return connection;
}

/* 

***  This is the only place we will be connecting/disconnecting from db ***

We could create our own query function that creates an instance of our pool and makes the connection.
Then it uses queryObject to send a string to the db.  This string will have been built out by whatever CRUD functionality has been invoked
Then disconnect from pool

References:
DenoGres - main/src/class/Model.ts  ~line 270 they have their query function
dORM - lib/db-connectors/pg-connector.ts  Same deal, design their query function
*/

export { connections };