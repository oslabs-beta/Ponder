import { Client, Pool, PoolClient } from "./deps.ts";
import { QueryBuilder } from "./querybuilder.ts";
//lines three to 8 were connections for both the whole ass pool and an individual connection
// const connections = async (URI: string, pools: number, isLazy: boolean) => {
//   const pool = new Pool(URI, pools, isLazy);
//   const connection = await pool.connect();
//   //
//   return connection;
// }

// type pool: Pool;
let pool: Pool;

//the whole ass pool connection goes here
function poolConnection(URI: string, pools: number, isLazy: boolean) {
  try {
    pool = new Pool(URI, pools, isLazy);
    console.log("connected to db.");
    //return pool to use actual connection elsewhere (querybuilder)
    const db = new QueryBuilder(pool);
    return db;
  } catch (err) {
    console.log("Big-ass connection unsuccessful", err);
    return err;
  }
}

//modulizer query function that will query DB each time, without needing to connetion WHOLE ASS pool each time
async function query(builtQueryForDB: string) {
  try {
    //individual connection
    const connect = await pool.connect();
    //query DB and store result
    const { rows } = await connect.queryObject(builtQueryForDB);
    //release individual pool connect
    connect.release();
    //return whatever is return from DB if anything
    //might need to add error handling
    return (rows) ? rows : "Query Successful";
  } catch (err) {
    console.log("Individual connection unsuccessful", err);
  }
}

//test of new functions
poolConnection(
  "postgres://hfwbmzny:AArrmznb9EBr4Tjbxe5XordjASLQ_j4S@heffalump.db.elephantsql.com/hfwbmzny",
  3,
  true,
);

const testQuery = await query("SELECT * FROM people;");
console.log("testQuery", testQuery);

//create an whole ass disconnect function. 
async function poolDisconnect(){
  console.log("Disconnecting now")
  //using .end because we're closing the entire pool. .release is for the single connection
  await pool.end();
  console.log("Disconnected now. Pool's closed go home")
}

/*
***  This is the only place we will be connecting/disconnecting from db ***

We could create our own query function that creates an instance of our pool and makes the connection.
Then it uses queryObject to send a string to the db.  This string will have been built out by whatever CRUD functionality has been invoked
Then disconnect from pool

References:
DenoGres - main/src/class/Model.ts  ~line 270 they have their query function
https://github.com/open-source-labs/DenoGres/blob/main/src/functions/Db.ts
dORM - lib/db-connectors/pg-connector.ts  Same deal, design their query function


add the smaller pool connection to the model.ts file.
*/

export { poolConnection, query, poolDisconnect};
