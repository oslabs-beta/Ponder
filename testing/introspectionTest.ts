import { Client, Pool, PoolClient } from '../deps.ts';
import { QueryBuilder } from '../library/querybuilder.ts';
import { poolConnection, query } from '../library/connection.ts';
import "https://deno.land/x/dotenv/load.ts";

// import '../testClassList1.js'

// import { config } from "../deps.ts"
import "https://deno.land/std@0.168.0/dotenv/mod.ts"
// import { basket_a } from '../testClassList1.ts'
import { people } from '../testClassListStarWars.ts'
// app.ts
// import { config } from "https://deno.land/std@0.168.0/dotenv/mod.ts";

// console.log(await config.DatabaseURI());
console.log(Deno.env.get('SECRETPASS'));
const URI = Deno.env.get('DatabaseURI')

// console.log(config()
const ponder: QueryBuilder = await poolConnection(
  URI,
  3,
  true,
);

//write an interface in introspect

// add extends model to writeClass

// add static in front of table properties


const sam = new people();
console.log('sammy', sam);
sam.name = 'new sam';
sam.hair_color = 'red';
sam.species_id = 3
await sam.save();

sam.name = 'sam updated and improved'
// sam.species_id = 99;
sam.mass = '3000';

sam.delete();


// const peaches = new basket_a;
// peaches.fruit_a = 'Tangerine';
// console.log( await peaches.save());

// console.log(await ponder.findAllinOne('basket_a'));

//  await ponder.introspect();

// const testBasket = new basket_a();
// ponder.disconnect();

// const password: string = config()['SECRETPASS']

// console.log('password', password)


// const tables = await query("SELECT table_name FROM information_schema.tables WHERE table_schema='public'");
// const columnList = await query(`SELECT column_name, is_nullable, table_name, data_type FROM information_schema.columns WHERE table_schema = 'public' ORDER BY table_name;`);
// // console.log('list columns', columnList);
// const  people  = tables[10];
// console.log(people)
