import { Client, Pool, PoolClient } from '../deps.ts';
import { QueryBuilder } from '../library/querybuilder.ts';
import { poolConnection, query } from '../library/connection.ts';


const ponder = await poolConnection(
  "postgres://hfwbmzny:AArrmznb9EBr4Tjbxe5XordjASLQ_j4S@heffalump.db.elephantsql.com/hfwbmzny",
  3,
  true,
);


const tables = await query("SELECT table_name FROM information_schema.tables WHERE table_schema='public'");
const columnList = await query(`SELECT column_name, is_nullable, table_name, data_type FROM information_schema.columns WHERE table_schema = 'public' ORDER BY table_name;`);
// console.log('list deez columns', columnList);
const  people  = tables[10];
console.log(people)
