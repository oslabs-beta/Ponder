//this is a file pretending to be an end user

//import things we will need from deps file
import { Client, Pool, PoolClient } from '../deps.ts';

//for now, importing queryBuilder directly from file
import { QueryBuilder } from '../library/querybuilder.ts';

import { poolConnection, query } from '../library/connection.ts';

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
// const ponderDB = poolConnection(
//   'postgres://hfwbmzny:AArrmznb9EBr4Tjbxe5XordjASLQ_j4S@heffalump.db.elephantsql.com/hfwbmzny',
//   3,
//   true
// );

// //   const newestTest = await ponderDB.findAllinOne("people");

// //testing connection to new model methods on querybuilder
// const personExamples = {
//   person_id: ['SERIAL'],
//   personName: ['VARCHAR', '100'],
//   personScore: ['NUMERIC'],
// };

// const newestTest = await ponderDB.createTable('personExamples', personExamples);
// console.log('did it work!?', newestTest);

// ponderDB.disconnect();

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

/////below is testing for Sam Stella Monday Dec 12
//split into 2 groups, we are working on managing tables commands

//new instance of POSTGRES to test
// const dbURIMonday =
//   'postgres://rehodqvv:xNQlX9F3AupLL6KCUJ1_5NIsCZGx1vum@mahmud.db.elephantsql.com/rehodqvv';

// const ponderDB1 = poolConnection(dbURIMonday, 3, true);

//   const newestTest = await ponderDB.findAllinOne("people");

//testing connection to new model methods on querybuilder
// const somethingNEW = {
//   newcolumn1: ['SERIAL'],
//   columnBYNEW2: ['VARCHAR', '100'],
//   mangoIsBest: ['NUMERIC'],
// };

// const newestTest1 = await ponderDB1.createTable(
//   'somethingNEWtable',
//   somethingNEW
// );
// console.log('did it work!?', newestTest1);

// const newTablesforNew = {
//   newNEWcolumn4: ['SERIAL'],
//   columnmango5: ['VARCHAR'],
//   mangoIsReallyBest6: ['NUMERIC'],
// }

// const addingToNew = await ponderDB1.addColumns('somethingNEWtable', newTablesforNew)


// const personExamples2 = {
//   person_id: ['SERIAL'],
//   personName: ['VARCHAR', '100'],
//   personScore: ['NUMERIC'],
// };

// const newestTest2 = await ponderDB1.createTable(
//   'personExamples2',
//   personExamples2
// );
// console.log('did it work!?', newestTest2);


//testing delete table
// const deletePersonExamples = await ponderDB1.dropOneTable('personExamples')
// console.log('did it work!?', deletePersonExamples);


// testing dropMultipleTables
// const deletePersonExamples2 = await ponderDB1.dropMultipleTables()

// console.log('did it work!?', deletePersonExamples2);


//test of adding columns
// const columnsToAdd = {
//   mango_id: ['SERIAL'],
//   mangoName: ['VARCHAR'],
//   mangoScore: ['NUMERIC'],
// };

// const mangoTest1 = await ponderDB1.addColumns(
//   'personExamples2',
//   columnsToAdd
// );

// console.log("checking columns", mangoTest1)

// const checkingMangos = await query("INSERT INTO personExamples2 (mango_id, mangoname, mangoscore) values (1, 'hugeNewNameMangoBoy', 3);")


//remember to test drop Columns function
//after dinner MONDAYYYYYYY

//test of droping columns
// const columnsToDrop = {
//   columnmango5: true,
//   newnewcolumn4: false,
//   mangoisbest: true
// }

// const dropColumnsTest = await ponderDB1.dropColumns(
//   'somethingnewtable',
//   columnsToDrop
// )

// console.log('checking drop column', dropColumnsTest);


//set up testing for select/join before writing

const dbURIMonday =
  'postgres://rehodqvv:xNQlX9F3AupLL6KCUJ1_5NIsCZGx1vum@mahmud.db.elephantsql.com/rehodqvv';

const ponderDB1 = poolConnection(dbURIMonday, 3, true);

// const attempt1 = await query(`SELECT * FROM basket_a;`)
const attempt1 = await query(`SELECT
a,
fruit_a,
b,
fruit_b
FROM
basket_a
INNER JOIN basket_b
ON fruit_a = fruit_b;`)

// const attempt1 = await ponderDB1.queryObject(`SELECT * FROM basket_a;`)

console.log('attempt1', attempt1)

ponderDB1.disconnect();


// const { rows } = await connect.queryObject(builtQueryForDB);

// const { rows } = {
//   rows: hasreturn value
// }

// const { rows } = repsonse;

// const rows = response.rows;