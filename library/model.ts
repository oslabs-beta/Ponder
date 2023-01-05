import { query } from './connection.ts'

//we create our models to either create or parse our tables
// the model is what our table should look like - building our table here (i.e the columns of our table)
//model:object

export class Model{

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
    this.record.id = _id[0]._id;
  }

  async search(){
    // Returns all rows from table
    return await query(`SELECT * FROM ${Object.values(this)[1]};`);
  }

  
  //update a row: note that once a foreign key has been set, you CANNOT update it
  async update (){
    const columns = Object.keys(this);
    const values = Object.values(this);
    //make a query to update tablename SET column = value where id = this.record.id
    let queryString = `UPDATE ${this.tableName} SET `;
    // i is initialized at 2 because that's the first column (record and tableName are 0 and 1 respectively, followed by the columns)
    for (let i = 2; i < columns.length; i++) {
      // Check if current column is the last one.  If so, no comma necessary 
      if (i === columns.length - 1) queryString = queryString.concat(`${columns[i]}='${values[i]}' `);
      else {
        queryString = queryString.concat(`${columns[i]}='${values[i]}', `);
      }
    }
    // Retrieve unique id stored in instance's record object
    queryString = queryString.concat(`WHERE _id=${this.record.id};`)    
    await query(queryString);
    return `Successfully updated ${this.tableName}`;
  }

// delete a row
  async delete() {
  // DELETE FROM tableName WHERE id = id;
    await query(`DELETE FROM ${this.tableName} WHERE _id=${this.record.id}`);
    return `Sucessfully deleted a row from ${this.tableName}`;
  }
}