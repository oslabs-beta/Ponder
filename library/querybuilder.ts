//file to create classes and definitions to map commands to PostGres
//filling out the rows on our tables here retrieving and adding/info

import { Pool, PoolClient, Client } from '../deps.ts';

import { poolConnection, query, poolDisconnect } from './connection.ts';

//starting queries
//select, where, update, delete, insert, create table

//join could be second half
// we have to declare the types before the constructor
export class QueryBuilder {
  pool: Pool;
  constructor(pool: Pool) {
    //old parameters:
    // URI: string, pools: number, isLazy: boolean
    //we had tried putting connection method here but did not work
    //release method was not found
    //open the pool
    // this.pool = new Pool(URI, pools, isLazy)
    this.pool = pool;
  }

  //first method, find all data from a table
  async findAllinOne(table: string) {
    // connect via this.pool
    // const connect = await this.pool.connect();
    //take in argument to make query to run
    const queryStr = `SELECT * FROM ${table};`;
    //execute actual query by passing string into query function imported from connection
    //which will also create individual connection and release after return
    const result = await query(queryStr);
    //execute actual query passing in query string made from arguments
    // const { rows } = await connect.queryObject(queryStr);
    //release pool connection
    // connect.release();
    //then will return result from query to where findAllinONe is being called
    return result;
  }
  //disconnecting with our pool here. User will have to disconnect manually, if they so choose

  //everything above here is for the SQL user testing.






















































































































  //Below this is Model functionality:
  //Stella has autoformattor which is removing these lines
  //start around 161 to be sure of space

  async createTable(tableName: string, columns: any) {
    //convert args into SQL command to create a new table
    // const heffalumpCreateTable = `CREATE TABLE ${tableName} args1, args2, args3, etc' --> Maybe use Object.keys(args) to get column names; iterate through and concatenate to this string
    // connection.query(heffalumpCreateTable)  --> sends create table to our sequel database
    //create a pool connection, disconnect after we create a string
    //use for in to iterate over the args obj to get the columns
    //removed brackets around if not exists

    const args = columns;
    let tableQueryString = `CREATE TABLE IF NOT EXISTS ${tableName} (`;
    for (const columns in args) {
      //first check to see if value of key-value pair is array of data
      let tempString = '';
      if (Array.isArray(args[columns])) {
        //console.log("is array?");
        //need to spread out array elements
        for (let i = 0; i < args[columns].length; i++) {
          if (i === 0) {
            //console.log("inside for loop");
            //datatype
            tempString = tempString.concat(`${args[columns][i]}`);
            //console.log("first loop pass string. Sam is found:", tempString);
          } else if (i === 1) {
            //length
            tempString = tempString.concat(`(${args[columns][i]})`);
          } else {
            //any column-constraints
            tempString = tempString.concat(` ${args[columns][i]}`);
            //console.log("third pass. Matt says this better work:", tempString);
          }
        }
      } //---> we're going to force user to use no arrays //need a helper function to make sure that users are using the correct data type
      tableQueryString = tableQueryString.concat(`${columns} ${tempString},`);
    }
    //we've added all the columns to the tablequery string
    //remove that last comma
    const stringWithoutFinalComma = tableQueryString.slice(0, -1);
    const finalQuery = stringWithoutFinalComma.concat(');');
    //console.log(
    //"Supreme Commander Stella is pleased with final query. Vice Supreme Comander Corey is stil not impressed:",
    //finalQuery,
    //);
    //const connect = await this.pool.connect();//update logic understand connection to DB
    //execute actual query passing in query string made from arguments
   
 

    //move this logic to a try catch block for any errors:
    try {
      await query(finalQuery); //does createTable return anything
      //if success
      const response = `${tableName} is in the database now!`;
      //keep below console log for success message!
      console.log(response)
      //then will return result from query to where findAllinONe is being called
      return response;
    } catch(err) {
      const response = `${err} has occured!`
      return response;
    }
  }
  //disconnecting with our pool here. User will have to disconnect manually, if they so choose
  async disconnect() {
    await poolDisconnect();
    // console.log('truly disconnect and feed me cat father - Tinsely');
  }

  //drop one table
  async dropOneTable(tableName: string, cascade?: boolean) {
    
    //if cascade is included, add to query string
    //else make query string with RESTRICT instead
    const deleteTable : string = (cascade) ?   "CASCADE" :  "RESTRICT"; 
    //create query string based on input
    const deleteQueryString = `DROP TABLE IF EXISTS ${tableName} ${deleteTable};`;
    //print query to check
    console.log('dropOneTable query', deleteQueryString);
    //query string should include the if not exists phrases
     //make a try catch to return POSTGRES error
    try {
      //run actual query string using the query method
      await query(deleteQueryString);
      //return some sort of success message
      console.log(`${tableName} is deleted!`)
      return `${tableName} is deleted!`
    } catch(err) {
      //return some sort of not success message
      console.log(err);
      return err;
    }    
  }

  //drop multiple tables
  async dropMultipleTables(tableNamesArray : string[], cascade?: boolean) : Promise<string> {
    //edge cases
    if (!tableNamesArray.length) return "Error! Must put a table Name inside Array";
    //control flow to make cascade variable
    const deleteTable : string = (cascade) ?   "CASCADE" :  "RESTRICT"; 
    //write a loop to iterate through array
    //for each index, create new string of tablename
    let listOftableNames = `${tableNamesArray[0]}`;
    for (let i = 1; i < tableNamesArray.length; i++) {
        listOftableNames = listOftableNames.concat(`, ${tableNamesArray[i]}`)
    }
    console.log('listoftablesnames', listOftableNames)
    //have final query string
    const dropMultipleTablesQueryString = `DROP TABLE IF EXISTS ${listOftableNames} ${deleteTable};`
    //print to test
    console.log('delete multiple string: ', dropMultipleTablesQueryString);
    //try catch to run query/return messages/errors
    try {
      await query(dropMultipleTablesQueryString)
      console.log(`${listOftableNames}, have been dropped!`)
      return `${listOftableNames}, have been dropped!`
    } catch(err) {
      console.log('err dropping multiple tables', err);
      return `dropMultipleTables ${err}`
    }
  }

  //add one or more columns
  async addColumns(tableToAlter : string, columns: any) {
    //reassign parameter to usuable object;
    const args = columns;
    //set initial string to hold query
    let newColumns = "";
    //set final string to be added into;
    
//might need to move to end
    for (const column in args) {
      //first check to see if value of key-value pair is array of data     

      const arrayOfOptions = args[column].join(' ')
      // console.log('new string of all elements in array?', arrayOfOptions)
      let tempString = `ADD COLUMN ${column} ${arrayOfOptions},`;
      // console.log('tempString', tempString)

      newColumns = newColumns.concat(tempString)
      console.log('newColumns', newColumns);   
 
    }
      const columnAddingQueryString = `ALTER TABLE ${tableToAlter} ${newColumns}`;
      const stringWithoutFinalComma = columnAddingQueryString.slice(0, -1);
      const finalQuery = stringWithoutFinalComma.concat(';');
      console.log('finalQuery', finalQuery)

    //move this logic to a try catch block for any errors:
    try {
      await query(finalQuery); //does createTable return anything
      //if success
      const response = `${tableToAlter} has new columns in the database now!`;
      //keep below console log for success message!
      console.log(response)
      //then will return result from query to where findAllinONe is being called
      return response;
    } catch(err) {
      const response = `${err} has occured!`
      return response;
    }

  }  


  //drop columns
  async dropColumns(tableName: string, columnsToDrop: any) {
  //create string with tableName to edit/add to
    
  //create substring with all columns to later insert to bigger string
    let allColumns = "";
  //iterate through columntodrop object
    const obj = columnsToDrop;
    for (const column in obj) {
      //each value will be either true or false
    //true means to add CASCADE
    //false means to add RESTRICT
      let dropType = "RESTRICT"
      if(obj[column] === true) {
        dropType = "CASCADE"
      }
      //each key will be name of column to drop
      //each subsequent add to substring with include comma
      allColumns = allColumns.concat(`DROP COLUMN IF EXISTS ${column} ${dropType},`)
    }  

    const columnsToDropString = `ALTER TABLE ${tableName} ${allColumns}`
    //might need to remove final comma
    const stringWithoutFinalComma = columnsToDropString.slice(0, -1);
    //might need to add final ;
    const finalQuery = stringWithoutFinalComma.concat(';');
    //console log final query to see 
    console.log('finalQuery', finalQuery)
    
    //create try/catch block to actual run query
    //include success/not success messages
    try {
      await query(finalQuery); 
      //if success
      const response = `${tableName} has less columns in the database now!`;
      //keep below console log for success message!
      console.log(response)
      return response;
    } catch(err) {
      const response = `${err} has occured!`
      return response;
    }
  } 

}



//for now, exporting for use to Workspace, but eventually will export or be packaged for use as module hosted on deno.land
// export queryBuilder;

//originally
//connection was in User
//QueryBuilder "method" was able to work (from querybuilder file)

//conection will be in querybuilder file, in a new func called connecitonbuilder
//querybuilder mehtod, still lives in querybuilder file
