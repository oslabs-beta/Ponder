import { query, poolConnection } from './connection.ts'

//we create our models to either create or parse our tables
// the model is what our table should look like - bulding our table here (i.e the columns of our table)
//model:object

export class Model{

  public beg() {
    return 'Help Me, Deno!!!!';
  }

  private record = {};

  async save(){
    const columns = Object.keys(this);
    const values = Object.values(this);

    //initialize query string
    let queryString = `INSERT INTO ${values[1]} (`;
    //loop through columns array and concat each value to query string
    for (let i = 2; i < columns.length; i++) {
      queryString = queryString.concat(`${columns[i]}, `);
    }
    //slice to remove last comma and space of last value
    queryString = queryString.slice(0, -2);
    //concat ending parens and VALUES
    queryString = queryString.concat(") VALUES (");
    //same as above with values array
    for (let i = 2; i < values.length; i++) {
      queryString = queryString.concat(`'${values[i]}', `);
    }
    let queryStringWithoutComma = queryString.slice(0, -2);
    //close query string and specifying what info we want to return
    queryStringWithoutComma = queryStringWithoutComma.concat(") RETURNING _id;");
    const _id = await query(queryStringWithoutComma);
    //console.log('record', this.record);
    this.record.id = _id[0]._id;
    // console.log('record after', this.record)
    // console.log('query', queryStringWithoutComma);
    // console.log('ressult', _id);
  }

  search(){
    // const keys: string[] = Object.keys(this)
    // console.log(Object.values(this))

    return query(`SELECT * FROM ${Object.values(this)[0]};`);
  }
  //update a row: note that once a foreign key has been set, you CANNOT update it
  async update (){
    const columns = Object.keys(this);
    const values = Object.values(this);
    //make a query to update tablename SET column = value where id = this.record.id
    let queryString = `UPDATE ${this.tableName} SET `;
    // i is initialized at two because that's the first column
    for (let i = 2; i < columns.length; i++) {
      if (i === columns.length - 1) queryString = queryString.concat(`${columns[i]}='${values[i]}' `);
      else {
        queryString = queryString.concat(`${columns[i]}='${values[i]}', `);
      }
    }
    queryString = queryString.concat(`WHERE _id=${this.record.id};`)

    console.log('this is query string:', queryString);
    
    await query(queryString);
    return `Successfully updated ${this.tableName}`;
  }

// delete a row
  delete() {
  // DELETE FROM tableName WHERE id = id;
    query(`DELETE FROM ${this.tableName} WHERE _id=${this.record.id}`);
    return `Sucessfully deleted a row from ${this.tableName}`;
  }

  // split a table by columns by a specified number
  // verticalShard(table: object, number: number){
  //   // turn our object columns into an array
  //   const columnArr = Object.keys(this);
  //   // divide a table by the specified number
  //   const substractionNum = Math.floor(columnArr.length / number);
  //   //create tables
  // }

  //split a table by rows by a speccified number
  // horizontalShard(table: object, number:number){
  //   //divide a table by a specified number
  //   //create a table
  // }
}

// CREATE TABLE users (user_id SERIAL PRIMARY KEY, username VARCHAR(100),score NUMERIC,lifetime_score NUMERIC);
// const example_users = {
//   user_id: ["SERIAL", "PRIMARY KEY"],
//   username: ["VARCHAR", "100"],
//   score: ["NUMERIC"],
//   lifetime_score: ["INTEGER"],
// };


// // // // // //

