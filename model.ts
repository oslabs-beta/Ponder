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
  createTable(tableName: string, args) {
    //convert args into SQL command to create a new table
    // const heffalumpCreateTable = `CREATE TABLE ${tableName} args1, args2, args3, etc' --> Maybe use Object.keys(args) to get column names; iterate through and concatenate to this string
    // connection.query(heffalumpCreateTable)  --> sends create table to our sequel database
    //create a pool connection, disconnect after we create a string
    //use for in to iterate over the args obj to get the columns
    let tableQueryString = `CREATE TABLE [IF NOT EXISTS] ${tableName} (`
    for (const columns in args) {
      //first check to see if value of key-value pair is array of data
      let tempString = '';
      if (Array.isArray(args[columns])){
        console.log('is array?')
        //need to spread out array elements
        for (let i = 0; i < args[columns].length; i++){
          if (i === 0) {
            console.log('inside for loop');
            //datatype
            tempString = tempString.concat(`${args[columns][i]}`)
            console.log('first loop pass string. Sam is lost:', tempString)
          } 
          else if (i === 1) {
            //length
            tempString = tempString.concat(`(${args[columns][i]})`) 
          } else {
            //any column-constraints
            tempString = tempString.concat(` ${args[columns][i]}`)
            console.log('third pass. Matt says this better work:', tempString);
          }
        }
      } //---> we're going to force user to use no arrays //need a helper function to make sure that users are using the correct data type
      tableQueryString = tableQueryString.concat(`${columns} ${tempString},`);
    }
    //we've added all the columns to the tablequery string
    //remove that last comma
    const stringWithoutFinalComma = tableQueryString.slice(0, -1);
    const finalQuery = stringWithoutFinalComma.concat(');');
    console.log('Supreme Commander Stella is pleased with final query. Vice Supreme Comander Corey is still  not impressed:', finalQuery)
    return finalQuery;
    
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

const testOfModel = new Model(example_users);

const newTableMaybe = testOfModel.createTable('newAwesomeTable', {key1: ['string', '10', 'NOT NULL'], key2: ['number', '15', 'UNIQUE']})

console.log('did it work?!?!!?', newTableMaybe);

// // // // // //  

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
// const test = {
//   lastName: "Witttgenstein",
//   publication: "Tractatus Logico-Philosophicus"
// }

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