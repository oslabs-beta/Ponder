// This file is where all the function definitions live. 
// These are the JavaScript functions that execute specific queries to a connected PostGres Database. Often replacing verbose SQL syntax with simple functions.

import { Pool } from "../deps.ts";
import { poolDisconnect, query } from "./connection.ts";
import { Introspect } from './introspection.ts'

export class QueryBuilder extends Introspect{
  pool: Pool;
  constructor(pool: Pool) {
    super();
    this.pool = pool;
  }

  // Find all data from a table
  async findAllinOne(table: string) {
    try {
      // Take in table as argument on which to run query
      const queryStr = `SELECT * FROM ${table};`;
      // Execute actual query by passing queryString into query function, which will also create an individual connection and release after return
      const result = await query(queryStr);
      // return result;
    } catch (err) {
      console.log('Find all failed', err);
      //changing to undefined from err to help with testing
      return undefined;
    }
  }

  // Select specific columns
  async findColumn(column_name: string, table: string) {
    try {
    // Creating our SQL query
    const queryString = `SELECT ${column_name} FROM ${table};`;
    // Variable to store the SQL results
    const result = await query(queryString);
    return result;
    } catch (err) {
      console.log('Find column failed', err);
    }
  }

  // Selecting a row of info
  async findRow(table: string, attr: string, value: string) {
    try {
      // Creating our SQL query string from arguments
      const queryString = `SELECT * FROM ${table} WHERE ${attr}='${value}';`;
      // Variable to store the SQL results
      const result = await query(queryString);
      return result;
      } catch (err) {
        console.log('Find row failed', err);
      }
  }

  // Select a specific cell on the table
  async findCell(table: string, column_name: string, value: string) {
    try {
      // Creating our SQL query
      const queryString =
        `SELECT ${column_name} FROM ${table} WHERE ${column_name} = '${value}' LIMIT 1;`;
      // Variable to store the SQL results
      const result = await query(queryString);
      return result;
    } catch (err) {
      console.log('Find cell failed', err);
    }
  }

  // Insert data into rows 
  async insertIntoTable(table: string, columns: string[], values: string[]) {
    try {
      // Initialize query string
    let queryString = `INSERT INTO ${table} (`;
    // Loop through columns array and concat each value to query string
    for (let i = 0; i < columns.length; i++) {
      queryString = queryString.concat(`${columns[i]}, `);
    }
    // Slice to remove last comma and space of last value
    queryString = queryString.slice(0, -2);
    // Concat ending parens and VALUES
    queryString = queryString.concat(") VALUES (");
    // Same as above with values array
    for (let i = 0; i < values.length; i++) {
      queryString = queryString.concat(`'${values[i]}', `);
    }
    // Remove the empty space at the end of the query and then close query string
    queryString = queryString.slice(0, -2).concat(");");
    await query(queryString);
    } catch(err) {
      console.log('Insertion failed', err);
    }
  }

  async updateTable(
    table: string,
    column_name: string[],
    newValue: string[],
    columnToMeet: string[],
    valueToMeet: string[],
    operator?: string,
  ) {
    try {
      // Partial Sql command for update
      let queryString= `UPDATE ${table} SET `;
      // Loop through the columns array
      for (let i = 0; i < column_name.length; i++) {
        if (column_name[i] && newValue[i]) {
          // Concating column names and values to queryString
          queryString = queryString.concat(`${column_name[i]} = '${newValue[i]}', `);
        }
      }
      // Remove the final comma and space
      queryString = queryString.slice(0, -2);
      // Add the WHERE conditional to queryStringWithoutComma
      queryString = queryString.concat(' WHERE')

      // Adding OR to database query 
      if (operator?.toLowerCase() === 'or') {
        for (let i = 0; i < columnToMeet.length; i++) {
          queryString = queryString.concat(
            ` ${columnToMeet[i]} = '${valueToMeet[i]}' OR`,
          );
      }
      queryString = queryString.slice(0, -3).concat(';');
      return await query(queryString);
      
      } else if (operator?.toLowerCase() === 'not') {
        // Adding NOT to database query
        for (let i = 0; i < columnToMeet.length; i++) {
          queryString = queryString.concat(
            ` NOT ${columnToMeet[i]} = '${valueToMeet[i]}' AND `
          )
        }
      } else {
        // AND is added as a default to the database query
        for (let i = 0; i < columnToMeet.length; i++){
          queryString = queryString.concat(
            ` ${columnToMeet[i]} = '${valueToMeet[i]}' AND`,
          );
        }
      }
      queryString = queryString.slice(0, -4).concat(';');
      // Sends this query off to our database
      await query(queryString);
  } catch (err) {
    console.log('Update failed', err)
  }
  }

// Delete row 
async deleteRow(table: string, column: string[], value: string[]) {
  // Partially building the queryString and we'll add the condition for "where" a few lines later
  let queryString = `DELETE FROM ${table} WHERE`;
  // Iterate through the array of columns
  for (let i = 0; i< column.length; i++) {
    queryString = queryString.concat(
      ` ${column[i]}='${value[i]}' AND`
    )
  }
  queryString = queryString.slice(0, -4).concat(';');
  await query(queryString);
}



  //Below this is functions that Manage Tables:

// Create Table with table name, with column object (each key is name  of column, value is array where first is datatype, next is length, any more will be column constraints)
  async createTable(tableName: string, columns: any) {
    // Convert args into SQL command to create a new table
    const args = columns;
    let tableQueryString = `CREATE TABLE IF NOT EXISTS ${tableName} (`;
    // Iterating through the args object
    for (const columns in args) {
      // First check to see if value of key-value pair is array of data
      let tempString = '';
      if (Array.isArray(args[columns])) {
        // Need to spread out array elements
        for (let i = 0; i < args[columns].length; i++) {
          if (i === 0) {
            //datatype
            tempString = tempString.concat(`${args[columns][i]}`);
          } else if (i === 1) {
            //length
            tempString = tempString.concat(`(${args[columns][i]})`);
          } else {
            //any column-constraints
            tempString = tempString.concat(` ${args[columns][i]}`);
          }
        }
      } // we're going to force user to use no arrays 
      // STRETCH FEATURE?: need a helper function to make sure that users are using the correct data type
      tableQueryString = tableQueryString.concat(`${columns} ${tempString},`);
    }
    //we've added all the columns to the tablequery string
    //remove that last comma and add semicolon
    tableQueryString = tableQueryString.slice(0, -1).concat(');');

    try {
      await query(tableQueryString);
      //if successful
      const response = `${tableName} is in the database now!`;
      //keep below console log for success message!
      // console.log(response)
      //then will return result from query to where findAllinONe is being called
      return response;
    } catch(err) {
      const response = `${err} has occured!`
      return response;
    }
  }
  

  // Drop one table
  async dropOneTable(tableName: string, cascade?: boolean) {
    // If cascade is included, add to query string
    // Else make query string with RESTRICT instead
    const deleteTable : string = (cascade) ?   "CASCADE" :  "RESTRICT"; 
    // Create query string based on input
    // Query string should include the "if exists" phrases
    const deleteQueryString = `DROP TABLE IF EXISTS ${tableName} ${deleteTable};`;
    // Make a try catch to return POSTGRES error
    try {
      // Run actual query string using the query method
      await query(deleteQueryString);
      //return some sort of success message
      return `${tableName} is deleted!`
    } catch(err) {
      //return some sort of not success message
      console.log(err);
      return err;
    }    
  }

  // Drop multiple tables
  async dropMultipleTables(tableNamesArray : string[], cascade?: boolean) : Promise<string> {
    // Edge case when an incorrect tablename has been entered 
    if (!tableNamesArray.length) return "Error! Must put a table Name inside Array";
    // Control flow to make cascade variable
    const deleteTable : string = (cascade) ?   "CASCADE" :  "RESTRICT"; 
    // Write a loop to iterate through array
    // For each index, create new string of tablename
    let listOftableNames = `${tableNamesArray[0]}`;
    for (let i = 1; i < tableNamesArray.length; i++) {
        listOftableNames = listOftableNames.concat(`, ${tableNamesArray[i]}`)
    }
    //have final query string
    const dropMultipleTablesQueryString = `DROP TABLE IF EXISTS ${listOftableNames} ${deleteTable};`
    //try catch to run query/return messages/errors
    try {
      await query(dropMultipleTablesQueryString)
      return `${listOftableNames}, have been dropped!`
    } catch(err) {
      return `dropMultipleTables ${err}`
    }
  }

  //add one or more columns to existing Table
  //Expect second argument to be an object, each key is name of column to add, each value is array with first being datatype, then length, then column constraints
  async addColumns(tableToAlter : string, columns: any) {
    //reassign parameter to usuable object;
    const args = columns;
    //set initial string to hold query
    let newColumns = "";
    //set final string to be added into;
    
    for (const column in args) {
      const arrayOfOptions = args[column].join(' ')
      let tempString = `ADD COLUMN ${column} ${arrayOfOptions},`;
      newColumns = newColumns.concat(tempString)
    }
      const columnAddingQueryString = `ALTER TABLE ${tableToAlter} ${newColumns}`;
      // const stringWithoutFinalComma = columnAddingQueryString.slice(0, -1);
      // const finalQuery = stringWithoutFinalComma.concat(';');
      const finalQuery = columnAddingQueryString.slice(0, -1).concat(';');
    //move this logic to a try catch block for any errors:
    try {
      await query(finalQuery); //does createTable return anything
      //if success
      const response = `${tableToAlter} has new columns in the database now!`;
      //then will return result from query to where findAllinONe is being called
      return response;
    } catch(err) {
      const response = `${err} has occured!`
      return response;
    }
  }  


  //drop columns
  //second argument again is an object, will key being name of column, value being true for cascade, false for restrict
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
    //remove final comma and add semicolon
    const finalQuery = columnsToDropString.slice(0, -1).concat(';');
    
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



  // Function to disconnect from Database: 
  async disconnect() {
    await poolDisconnect();
  }

}

