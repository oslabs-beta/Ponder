//this file is where tests for basic functionality of ponder
// import { bdd, asserts } from '../deps.ts';
import "https://deno.land/x/dotenv/load.ts";
import "https://deno.land/std@0.168.0/dotenv/mod.ts"
// import * as ponder from '../mod.ts'
import { poolConnection } from '../mod.ts';

//alternate import

import {
    assertEquals,
    assertStrictEquals,
    assertThrows,
  } from "https://deno.land/std@0.168.0/testing/asserts.ts";
  import {
    describe,
    it,
  } from "https://deno.land/std@0.168.0/testing/bdd.ts";



  //this is the command used to test this file:
  // deno test testing/CRUDtests.ts --no-check --allow-env --allow-read --allow-net

// Test the create and drop table methods


//used Deno.test over other methods that provided too many errors
//format is Deno.test(passing in a large object)
Deno.test({
    name: "Create Table, Drop Table", 
    fn: async function () {
     //create an instance of db connection
     const db = await poolConnection(
         Deno.env.get('DatabaseURI'),
         3,
         true,
       );
     // look for table that does not exist
     const result = await db.findAllinOne('totallynotreal');
    //Function definition will console.log PostGres error and return value expected to be undefined
     assertEquals(result, undefined)
     
     //now create table and check to see if table exists now
    const created = await db.createTable('totallynotreal', {
            column1: ['VARCHAR']
        });

    const result2 = await db.findAllinOne('totallynotreal');
    //Table should now exist and func definition return value is empty array
        assertEquals(result2, [])

        //drop the table and search again
        const dropTable = await db.dropOneTable('totallynotreal')
        const result3 = await db.findAllinOne('totallynotreal');
        //Table is now dropped, should get same PostGres Error and return value will again be undefined
        assertEquals(result3, undefined)
        //disconnect DB
     await db.disconnect();   
 },
 //still within object, put these special sanitize options to ignore resource leaks
     sanitizeResources: false,
     sanitizeOps: false,
     sanitizeExit: false
});


//Testing Find Cell
Deno.test({
    name: "Find Cell", 
    fn: async function () {
     //create an instance of db connection
     const db = await poolConnection(
         Deno.env.get('DatabaseURI'),
         3,
         true,
       );
     // look for cell that does not exist
     let result = await db.findCell('basket_a', 'fruit_a', 'mango');
    // Function definition return value will be an array with the cell, because we know cell doesn't exist, should be an empty array
     assertEquals(result, [])

     result = await db.findCell('basket_a', 'fruit_a', 'Apple');
     //Function will return object containing cell, check for accuracy
      assertEquals(result, [{ fruit_a: 'Apple'}])

     await db.disconnect();   
 },
 //still within object, put these special sanitize options to ignore resource leaks
     sanitizeResources: false,
     sanitizeOps: false,
     sanitizeExit: false
});