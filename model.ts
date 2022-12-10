import { Pool } from "./deps.ts";
import { connections } from "./connection.ts";
import { QueryBuilder } from "./querybuilder.ts";

//we create our models to either create or parse our tables
// the model is what our table should look like - bulding our table here (i.e the columns of our table)
//model:object

class Model extends QueryBuilder {
  columns: any;
  tableName: string;
  constructor() {
    super(pool);
    this.columns = columns;
    this.tableName = tableName; 
  }
  //create method
  async createTable() {
    //convert args into SQL command to create a new table
    // const heffalumpCreateTable = `CREATE TABLE ${tableName} args1, args2, args3, etc' --> Maybe use Object.keys(args) to get column names; iterate through and concatenate to this string
    // connection.query(heffalumpCreateTable)  --> sends create table to our sequel database
    //create a pool connection, disconnect after we create a string
    //use for in to iterate over the args obj to get the columns
    //removed brackets around if not exists
    console.log("This is the officer's whole-ass betting pool", this.pool)
    const args = this.columns;
    let tableQueryString = `CREATE TABLE IF NOT EXISTS ${this.tableName} (`;
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
        const connect = await this.pool.connect();
        await connect.queryObject(finalQuery); //does createTable return anything
        //release pool connection
        //if success
        
        connect.release(); //update to DB name connect?
        const response = `${this.tableName} has been created!`;
        //then will return result from query to where findAllinONe is being called
        return response;      
  }
  //parse method
  parseTable() {
  }
  insertTable() {
  }
}

// CREATE TABLE users (user_id SERIAL PRIMARY KEY, username VARCHAR(100),score NUMERIC,lifetime_score NUMERIC);
const example_users = {
  user_id: ["SERIAL", "PRIMARY KEY"],
  username: ["VARCHAR", "100"],
  score: ["NUMERIC"],
  lifetime_score: ["INTEGER"],
};

const testOfModel = new Model('example_users', example_users);
testOfModel.createTable();
//already added command below to DB
// const newTableMaybe = testOfModel.createTable('newAwesomeTable', {key1: ['varchar', '10', 'NOT NULL'], key2: ['numeric', '15', 'UNIQUE']})

//CREATE TABLE IF NOT EXISTS newAwesomeTable (key1 varchar(10) NOT NULL,key2 integer(15) UNIQUE);

//another test in elephant
// const newTableMaybe = testOfModel.createTable("StellaNoMoreTeeth", {
//   column1: ["varchar", "10", "NOT NULL"],
//   column2: ["numeric", "15", "UNIQUE"],
// });

// console.log("did it work?!?!!?", newTableMaybe);

//as it stands, we are requiring very specific input for queries
//need string = varchar
//need number = numeric or integer
//expecting create table to include args:
//first: tablename as string
//second, big object
//keys are names of the columns in new table
//values are arrays
//first is datatype
//second is length (of datatype)
//third and beyond, any column constraints

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
