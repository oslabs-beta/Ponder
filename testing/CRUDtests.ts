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



// Test the create and drop table methods
// bdd.describe('Creates and drops tables', async () => {
//   // Test Suites
//   bdd.it('Creates a table', async ()=> {
//     //create an instance of db connection
//     const db = await poolConnection(
//         Deno.env.get('DatabaseURI'),
//         3,
//         true,
//       );
//     // look for table that does not exist
//     // console.log('in the test');
//     let result = await db.findAllinOne('tableNonexistent');
//     asserts.assertEquals(result, []);
//   })

  //connect to db
  //create a table
  //see if table exists
  //delete a table
  //see if table does not exist
// })


//alternate
// describe('Creates and drops tables', async () => {
//     // Test Suites
//     // Deno.test({sanitizeResources: false
//     //     sanitizeOps: false
//     //     sanitizeExit: false})
//     await it('Creates a table', async ()=> {
//       //create an instance of db connection
//       const db = await poolConnection(
//           Deno.env.get('DatabaseURI'),
//           3,
//           true,
//         );
//       // look for table that does not exist
//       // console.log('in the test');
//       let result = await db.findAllinOne('tableNonexistent');
//       await db.disconnect();
//       console.log('result', result)
//       console.log('result undefined?', (result === undefined))
//       assertEquals(result, undefined);
//       sanitizeResources: false
//       sanitizeOps: false
//       sanitizeExit: false
//     }, {sanitizeResources: false,
//         sanitizeOps: false,
//         sanitizeExit: false})

//     //  it('Tests if success works at all', ()=> {
//     //   //create an instance of db connection
//     //   const test = 1;
//     //   assertEquals(1, test);
//     // })




// })

///alternate alternate style of test as object

describe({
    name: 'Creates and drops tables',
    async fn() {
    // Test Suites
    // Deno.test({sanitizeResources: false
    //     sanitizeOps: false
    //     sanitizeExit: false})
    // await it('Creates a table', async ()=> {
      //create an instance of db connection
      const db = await poolConnection(
          Deno.env.get('DatabaseURI'),
          3,
          true,
        );
        console.log('hello')
      // look for table that does not exist
      // console.log('in the test');
      console.log('hello1')
      let result = await db.findAllinOne('tableNonexistent');
      console.log('hello2')
      await db.disconnect();
      console.log('hello3')
      console.log('result', result)
      console.log('hello4')
      console.log('result undefined?', (result === undefined))
      assertEquals(result, undefined);},
    //   sanitizeResources: false,
    //   sanitizeOps: false,
    //   sanitizeExit: false

    //  it('Tests if success works at all', ()=> {
    //   //create an instance of db connection
    //   const test = 1;
    //   assertEquals(1, test);
    // })

    


})