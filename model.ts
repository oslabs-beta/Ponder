import { pool } from "./deps.ts";
import { connections } from "./connection.ts";

//we create our models to either create or parse our tables
    // the model is what our table should look like - bulding our table here (i.e the columns of our table)
//model:object

class Model {

  model: any
  constructor(model) {
    this.model = model
  }
  //create method
  createTable(tableName: string, args: object) {
    //convert args into SQL command to create a new table
    // const heffalumpCreateTable = `CREATE TABLE ${tableName} args1, args2, args3, etc' --> Maybe use Object.keys(args) to get column names; iterate through and concatenate to this string
    // connection.query(heffalumpCreateTable)  --> sends create table to our sequel database
    //create a pool connection, disconnect after we create a string

  } 
  //parse method
  parseTable() {
    
  }
  insertTable() {

  }
}

// CREATE TABLE users (user_id SERIAL PRIMARY KEY, username VARCHAR(100),score NUMERIC,lifetime_score NUMERIC);


const example_users = {
  user_id: 'SERIAL PRIMARY KEY',
  username: 'VARCHAR(100)',
  score: 'NUMERIC',
  lifetime_score: 'NUMERIC'
} 

/*

table
blank column1 colum2 colums3
row1  info11  info21 info31
row2  info12  info22 info32
row3  info13  info23 info33

tablename = new Model();
ponder = new query builder
ponder.insert(name of table, )

MODEL for table = {
  column1: string,
  column2: string,
  column3: number,
}

QUERIES for row1 {
  column1: info11
  column2: info21
  column3: info31
}


New Query that inserts a new row {
  column1: info14
  column2: info24
  column3: info34
}
*/
const test = {
  lastName: "Witttgenstein",
  publication: "Tractatus Logico-Philosophicus"
}

//ponder

//export this down here







// import model from ...

// const users = new Model({
//  user_id: 'SERIAL PRIMARY KEY',
//  username: 'VARCHAR(100)',
//  score: 'NUMERIC',
//  lifetime_score: 'NUMERIC'
//})

//users.createTable()

// users.insert({
//  username: Sara,
//  score: 1,000,000,
//  lifetime_score: 10000000000
// })