//This file is where connection to PostGres Database is made. This functionality is exported for use elsewhere. 
//It is imported to querybuilder and referenced in mod.ts to use as module on deno.land.

import { Pool } from "../deps.ts";
import { QueryBuilder } from "./querybuilder.ts";

let pool: Pool;

// The pool connection function takes the user database URI and makes the connection to that database.  
// The number of pools and lazy loading have default values but may be specified by user.      
function poolConnection(URI: string, pools: number = 3, isLazy: boolean = true) {
  try {
    // create a new pool connection to pass to QueryBuilder
    pool = new Pool(URI, pools, isLazy);
    //If connection is successful, simple success message will appear in console.
    console.log("Connected to Postgres DB.");
    // Call new instance of QueryBuilder passing in newly created Pool. 
    // That way, all functions on the created QueryBuilder, will have access to the correct pool connection to run the individual queries.
    const db = new QueryBuilder(pool);
    return db;
  } catch (err) {
    console.log("Connection unsuccessful", err);
    return err;
  }
}

// Modulized query function that will query DB each time, without needing to connect/disconnect WHOLE pool connection each time
async function query(builtQueryForDB: string) {
  try {
    // Individual connection
    const connect = await pool.connect();
    // Query DB and store result
    const { rows } = await connect.queryObject(builtQueryForDB);
    // Release individual pool connect
    await connect.release();

    //for testing 
    await connect.close()

    // Return anything returned from DB query
    return (rows) ? rows : "Query Successful";
  } catch (err) {
    console.log("Individual connection unsuccessful", err);
  }
}

// Create a disconnect function. 
async function poolDisconnect(){
  console.log("Disconnecting Database...");
  await pool.end();
  console.log("Disconnected now. Pool's closed!")
}


export { poolConnection, query, poolDisconnect};
