
import { query, poolConnection } from './connection.ts'

//we create our models to either create or parse our tables
// the model is what our table should look like - bulding our table here (i.e the columns of our table)
//model:object

export class Model{
  // keys: string[] = Object.keys(this)

  plead() {
    return 'help';
  }

  async save(){
    const columns = Object.keys(this)
    const values = Object.values(this);

    //initialize query string
    let queryString = `INSERT INTO ${values[0]} (`;
    //loop through columns array and concat each value to query string
    for (let i = 1; i < columns.length; i++) {
      queryString = queryString.concat(`${columns[i]}, `);
    }
    //slice to remove last comma and space of last value
    queryString = queryString.slice(0, -2);
    //concat ending parens and VALUES
    queryString = queryString.concat(") VALUES (");
    //same as above with values array
    for (let i = 1; i < values.length; i++) {
      queryString = queryString.concat(`'${values[i]}', `);
    }
    let queryStringWithoutComma = queryString.slice(0, -2);
    //close query string
    queryStringWithoutComma = queryStringWithoutComma.concat(");");
    await query(queryStringWithoutComma);
    // console.log(queryStringWithoutComma);


  }

  search(){
    // const keys: string[] = Object.keys(this)
    // console.log(Object.values(this))

    return query(`SELECT * FROM ${Object.values(this)[0]};`);
  }

  //create method
  // async createTable() {
  //   //convert args into SQL command to create a new table
  //   // const heffalumpCreateTable = `CREATE TABLE ${tableName} args1, args2, args3, etc' --> Maybe use Object.keys(args) to get column names; iterate through and concatenate to this string
  //   // connection.query(heffalumpCreateTable)  --> sends create table to our sequel database
  //   //create a pool connection, disconnect after we create a string
  //   //use for in to iterate over the args obj to get the columns
  //   //removed brackets around if not exists
  //   //console.log("This is the Pool connection", this.pool)
  //   const args = this.columns;
  //   let tableQueryString = `CREATE TABLE IF NOT EXISTS ${this.tableName} (`;
  //   for (const columns in args) {
  //     //first check to see if value of key-value pair is array of data
  //     let tempString = "";
  //     if (Array.isArray(args[columns])) {
  //       //console.log("is array?");
  //       //need to spread out array elements
  //       for (let i = 0; i < args[columns].length; i++) {
  //         if (i === 0) {
  //           //console.log("inside for loop");
  //           //datatype
  //           tempString = tempString.concat(`${args[columns][i]}`);
  //           //console.log("first loop pass string:", tempString);
  //         } else if (i === 1) {
  //           //length
  //           tempString = tempString.concat(`(${args[columns][i]})`);
  //         } else {
  //           //any column-constraints
  //           tempString = tempString.concat(` ${args[columns][i]}`);
  //           //console.log("third pass:", tempString);
  //         }
  //       }
  //     } //---> we're going to force user to use no arrays //need a helper function to make sure that users are using the correct data type
  //     tableQueryString = tableQueryString.concat(`${columns} ${tempString},`);
  //   }
  //   //we've added all the columns to the tablequery string
  //   //remove that last comma
  //   const stringWithoutFinalComma = tableQueryString.slice(0, -1);
  //   const finalQuery = stringWithoutFinalComma.concat(");");
  //   //console.log(
  //     //"finalQuery:", finalQuery);
  //   //const connect = await this.pool.connect();//update logic understand connection to DB
  //       //execute actual query passing in query string made from arguments
  //       const connect = await this.pool.connect();
  //       await connect.queryObject(finalQuery); //does createTable return anything
  //       //release pool connection
  //       //if success
        
  //       connect.release(); //update to DB name connect?
  //       const response = `${this.tableName} has been created!`;
  //       //then will return result from query to where findAllinONe is being called
  //       return response;      
  // }
  // //parse method
  // parseTable() {
  // }
  // insertTable() {
  // }
}

// CREATE TABLE users (user_id SERIAL PRIMARY KEY, username VARCHAR(100),score NUMERIC,lifetime_score NUMERIC);
// const example_users = {
//   user_id: ["SERIAL", "PRIMARY KEY"],
//   username: ["VARCHAR", "100"],
//   score: ["NUMERIC"],
//   lifetime_score: ["INTEGER"],
// };

// const testOfModel = new Model('example_users', example_users);
// testOfModel.createTable();
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
