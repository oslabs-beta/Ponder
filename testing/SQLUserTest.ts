//this is a file pretending to be an end user

//import things we will need from deps file
import { Client, Pool, PoolClient } from "../deps.ts";

//for now, importing queryBuilder directly from file
import { QueryBuilder } from "../library/querybuilder.ts";

import { poolConnection, query } from "../library/connection.ts";

//bringing in connection from connection (where db is connected)
// import { connections } from "./connection.ts";

// const connect = await connections('postgres://hfwbmzny:AArrmznb9EBr4Tjbxe5XordjASLQ_j4S@heffalump.db.elephantsql.com/hfwbmzny', 3, true);

//declare new instance of PONDER to use throughout this page

//Empty test DB
// const ponderURI = 'postgres://bulwxugb:t2QZQ0uT5VuBP3txTMk__RkMmLv3iQPw@tuffi.db.elephantsql.com/bulwxugb';

//Matt's starwars postgres DB
// const ponder = new QueryBuilder('postgres://hfwbmzny:AArrmznb9EBr4Tjbxe5XordjASLQ_j4S@heffalump.db.elephantsql.com/hfwbmzny', 3, true);

// const firstSearch = await ponder.findAllinOne('people');
// console.log('firstSearch', firstSearch)

//first test of new connections file (exporting functions/functionality)
// const newPool = poolConnection(
//   "postgres://hfwbmzny:AArrmznb9EBr4Tjbxe5XordjASLQ_j4S@heffalump.db.elephantsql.com/hfwbmzny",
//   3,
//   true,
// );

// const ponderTester = new QueryBuilder(newPool);

// const newestTest = await ponderTester.findAllinOne("people");

// console.log("did it work!?", newestTest);

//tried moving new instance of querybuilder to connection file
//the connection to the database is established along with the connection to the methods, so that User can use the methods and connect to the DB in one action
const ponderDB = poolConnection(
    "postgres://hfwbmzny:AArrmznb9EBr4Tjbxe5XordjASLQ_j4S@heffalump.db.elephantsql.com/hfwbmzny",
    3,
    true,
  );
  
//   const newestTest = await ponderDB.findAllinOne("people");


//testing connection to new model methods on querybuilder
// const personExamples = {
//     person_id: ["SERIAL"],
//     personName: ["VARCHAR", "100"],
//     personScore: ["NUMERIC"],
//   };

  const newestTest = await ponderDB.deleteRow('stellaNoMoreTeeth', ['column2'], ['0']);
  console.log("did it work!?", newestTest);

  ponderDB.disconnect();




// const qbTest: string = QueryBuilder.findAllinONe(people);
//   const testQuery = await query("SELECT * FROM people;");
//   console.log("testQuery", testQuery);

//connect to a DB
// const pool = new Pool('postgres://hfwbmzny:AArrmznb9EBr4Tjbxe5XordjASLQ_j4S@heffalump.db.elephantsql.com/hfwbmzny', 3, true) // the number(3) is establishing the number of connections. True is the 'lazy' option, meaning that all the connections won't be initialized until they are needed
// const connect = await pool.connect();

//testing constructor function
// const newSearch = new QueryBuilder('postgres://hfwbmzny:AArrmznb9EBr4Tjbxe5XordjASLQ_j4S@heffalump.db.elephantsql.com/hfwbmzny', 3, true);

// try {
//     const { rows } = await connect.queryObject(`SELECT * FROM species WHERE name = 'matt';`);
//     console.log('row of response', rows);
// } finally {
//     connect.release();
// }

// //new query to already connect DB
// try {
//     const { rows } = await connect.queryObject`SELECT * FROM people WHERE name = 'Luke Skywalker'`;
//     console.log('luke?', rows)
// } finally {
//     connect.release();
// }

// //first attempt at using PONDER
// try {
//     const newFind = ponder.findAllinOne('people');
//     const { rows } = await connect.queryObject(newFind)
//     console.log('newFind', rows)
// } finally {
//     connect.release();
// }

//run queries on DB

//do something with returned results from the query
