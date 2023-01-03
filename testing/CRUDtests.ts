//this file is where tests for basic functionality of ponder
import { bdd, asserts } from '../deps.ts';
import "https://deno.land/x/dotenv/load.ts";
import "https://deno.land/std@0.168.0/dotenv/mod.ts"
import * as ponder from '../mod.ts'

// Test the create and drop table methods
bdd.describe('Creates and drops tables', async () => {
  // Test Suites
  bdd.it('Creates a table', async ()=> {
    //create an instance of db connection
    const db = await ponder.poolConnection(
        Deno.env.get('DatabaseURI'),
        3,
        true,
      );
    // look for table that does not exist
    let result = await db.findAllinOne('tableNonexistent');
    
  })

  //connect to db
  //create a table
  //see if table exists
  //delete a table
  //see if table does not exist
})