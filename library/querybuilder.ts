//file to create classes and definitions to map commands to PostGres
//filling out the rows on our tables here retrieving and adding/info

import { Client, Pool, PoolClient } from "../deps.ts";

import { poolConnection, poolDisconnect, query } from "./connection.ts";

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
  //Select specific columns
  async findColumn(column_name: string, table: string) {
    //creating our SQL
    const queryString = `SELECT ${column_name} FROM ${table};`;
    //variable to store the SQL results
    const result = await query(queryString);
    return result;
  }

  //selecting a row of info
  async findRow(table: string, attr: string, value: string) {
    //creating our SQL
    const queryString = `SELECT * FROM ${table} WHERE ${attr}='${value}';`;
    //variable to store the SQL results
    const result = await query(queryString);
    return result;
  }

  //select a specific cell on the table
  async findCell(table: string, column_name: string, value: string) {
    const queryString =
      `SELECT ${column_name} FROM ${table} WHERE ${column_name} = '${value}' LIMIT 1;`;
    const result = await query(queryString);
    return result;
  }

  //insert data into columns
  async insertIntoTable(table: string, columns: string[], values: string[]) {
    //initialize query string
    let queryString = `INSERT INTO ${table} (`;
    //loop through columns array and concat each value to query string
    for (let i = 0; i < columns.length; i++) {
      queryString = queryString.concat(`${columns[i]}, `);
    }
    //slice to remove last comma and space of last value
    queryString = queryString.slice(0, -2);
    //concat ending parens and VALUES
    queryString = queryString.concat(") VALUES (");
    //same as above with values array
    for (let i = 0; i < values.length; i++) {
      queryString = queryString.concat(`'${values[i]}', `);
    }
    let queryStringWithoutComma = queryString.slice(0, -2);
    //close query string
    queryStringWithoutComma = queryStringWithoutComma.concat(");");
    await query(queryStringWithoutComma);
  }

  async updateTable(
    table: string,
    column_name: string[],
    value: string[],
    q: string[],
    a: string[],
    operator?: string,
  ) {
    //partial Sql command for update
    let queryString = `UPDATE ${table} SET `;
    //loop through the columns array
    for (let i = 0; i < column_name.length; i++) {
      if (column_name[i] && value[i]) {
        queryString = queryString.concat(`${column_name[i]} = '${value[i]}', `);
      }
    }
    //remove the final comma and space
    let queryStringWithoutComma = queryString.slice(0, -2);



    queryStringWithoutComma = queryStringWithoutComma.concat(' WHERE')
    //add the WHERE conditional here

    //add OR 
    if (operator?.toLowerCase() === 'or') {
      for (let i = 0; i < q.length; i++) {
        queryStringWithoutComma = queryStringWithoutComma.concat(
          ` ${q[i]} = '${a[i]}' OR`,
        );
     }
     queryStringWithoutComma = queryStringWithoutComma.slice(0, -3).concat(';');
     return await query(queryStringWithoutComma);
     
    } else if (operator?.toLowerCase() === 'not') {
      //add NOT
      for (let i = 0; i < q.length; i++) {
        queryStringWithoutComma = queryStringWithoutComma.concat(
          ` NOT ${q[i]} = '${a[i]}' AND `
        )
      
      }
    } else {
      //default AND 
      for (let i = 0; i < q.length; i++){
        queryStringWithoutComma = queryStringWithoutComma.concat(
          ` ${q[i]} = '${a[i]}' AND`,
        );
      }
    }

    queryStringWithoutComma = queryStringWithoutComma.slice(0, -4).concat(';');
    //sends this query off to our database
    await query(queryStringWithoutComma);
  }

//delete row - nothing but raw power behind this command
async deleteRow(table: string, column: string[], value: string[]) {
  //without including WHERE, DELETE FROM will delete all entries in a table.  Necessary?
  let queryString = `DELETE FROM ${table} WHERE`;
  for (let i = 0; i< column.length; i++) {
    queryString = queryString.concat(
      ` ${column[i]}='${value[i]}' AND`
    )
  }
  const queryStringWithoutComma = queryString.slice(0, -4).concat(';');
  console.log(queryStringWithoutComma);
  await query(queryStringWithoutComma);
}

















  











  //Below this is Model functionality:









































  
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
      let tempString = "";
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
    const finalQuery = stringWithoutFinalComma.concat(");");
    //console.log(
    //"Supreme Commander Stella is pleased with final query. Vice Supreme Comander Corey is stil not impressed:",
    //finalQuery,
    //);
    //const connect = await this.pool.connect();//update logic understand connection to DB
    //execute actual query passing in query string made from arguments
    await query(finalQuery); //does createTable return anything
    //release pool connection
    //if success

    const response = `${tableName} has been created!`;
    //then will return result from query to where findAllinONe is being called
    return response;
  }
  //disconnecting with our pool here. User will have to disconnect manually, if they so choose
  async disconnect() {
    await poolDisconnect();
    console.log("truly disconnect and feed me cat father - Tinsely");
  }
}

//for now, exporting for use to Workspace, but eventually will export or be packaged for use as module hosted on deno.land
// export queryBuilder;

//originally
//connection was in User
//QueryBuilder "method" was able to work (from querybuilder file)

//conection will be in querybuilder file, in a new func called connecitonbuilder
//querybuilder mehtod, still lives in querybuilder file
