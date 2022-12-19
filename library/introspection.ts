//introspection (inspecting a data source) allows us to turn table data into an object. Once the table data is an object, users can create new table entries with object notation

//pass the URI --> open up a new whole ass pool
import { Client, Pool, PoolClient } from "../deps.ts";
import { query, poolConnection } from './connection.ts'
//information schema provides access to database metadata

export class Introspect {
  // constructor(){

  // }
  async introspect () {
  //   const ponder = await poolConnection(
  //     "postgres://hfwbmzny:AArrmznb9EBr4Tjbxe5XordjASLQ_j4S@heffalump.db.elephantsql.com/hfwbmzny",
  //     3,
  //     true,
  //   );
  //declare object to represent table
    const tableObj = {}
  //query db for tables
    // const tables = await query("SELECT table_name FROM information_schema.tables WHERE table_schema='public'");//this should be an array
  
    // console.log('tables variable', tables);
  
  //query db for columns. query for all columns from that table
  // FYI information_schema is bulit in
    const columnList = await query(`SELECT column_name, is_nullable, table_name, data_type FROM information_schema.columns WHERE table_schema = 'public' ORDER BY table_name;`);
  // iterate through the column list
    // tableObj[table_name][columnList[0][column_name]] = "test";
  
    for (let i = 0; i < columnList.length; i++){
      // const colName = columnList[i]['column_name'];
      // const dataType = columnList[i]['data_type'];
      // const is_nullable = columnList[i]['is_nullable'];
      // const tableName = columnList[i]['table_name']
      const { column_name: colName, data_type: dataType, is_nullable, table_name: tableName }: { column_name: string; data_type: string; is_nullable: string; table_name: string} = columnList[i];
      //console.log('colName:', colName);
  
      if(!tableObj[tableName]){
          tableObj[tableName] = {}
      }
      tableObj[tableName][colName] = {'data_type': dataType, 'is_nullable': is_nullable};
  
    
    }
    await this.classConstructor(tableObj);
    return tableObj;
  }
  


    // write func to separate our introspected object so that it's not just on one line. Be thankful for this line of psuedocode. Corey didn't want to give you this.
    classConstructor (tableObject: object) {
      //iterating through our tableObject
      for (let table in tableObject) {
        let classString: string = '';
        //console.log("Tables from Ikea:", table);
        //we use concatenation to separate our massive object onto different lines. Remember table is a string
        classString += `export class ${table} { \n`;
        classString += `tableName = '${table}' \n`;
        for (let column in tableObject[table]) {
          classString  += ` static ${column} = { \n`
          // console.log('column', column);
          const tableKeyArr = Object.keys(tableObject[table][column]);
          for (let i = 0; i < tableKeyArr.length; i++) {
            if (i === tableKeyArr.length){
              classString += `    ${tableKeyArr[i]}: '${tableObject[table][column][tableKeyArr[i]]}}' \n`
            } else{
              classString += `    ${tableKeyArr[i]}: '${tableObject[table][column][tableKeyArr[i]]}', \n`
            }
          }
          //close out curly braces
          classString += '    } \n';
        }
        //the extra line break is to separate each class declaration
        classString += '  } \n \n';
        Deno.writeTextFileSync("./testClassListStarWars.ts", classString, {
          append: true
        });
      }
    }
    //takes tableObj and writes interfaces to file to match classes
    interfaceConstructor(tableObj: object) {
      //iterate through the object's keys
      let interfaceString: string = '';
    }
//Tests below
      // loop 1 iterate through keys e.g tables = object.keys(tableObj), tables.forEach()

        //for each key (table names) write 'export class {tablename} { \n

          // loop 2 iterate through keys of each table (column names)
            //write key(colName): { \n
                // loop 3 iterate through values col-Name
                  //write key: value, \n
                   //control flow - if on last iteration (consider looping with iterator), dont add comma, add } 

          // end of loop 2, concat } \n
      
      // end of loop 1, concat };\n 
  
  
  // const testObj = await introspect();
  
  // console.log(testObj);

}

// Deno.writeTextFileSync('./testModelWrite.js', JSON.stringify(testObj));
/*
    column_name: "diameter",
    is_nullable: "YES",classConstructor
    table_name: "planets",
    data_type: "integer"



*/

/*
tableObj = {
  people = {
    name = {
      data_type: varchar,
      is_nullable: varchar,
    },
    hair_color = {
      data_type: varchar,
      is_nullable: varchar,
    }
  }
}


*/

//for loop that loops through tables
  //destructure { table_name } = tables[i]
  //this will give us a current table, i.e. people
  //another for loop
    //this loops through the column_list
    //destructure again {column_name, data_type} = columnList[i]
    //we have column_name and data_type in variable now
    //assign property to table_name above with a vlaue of an object, containing data_type and is_nullable
    //table_name[column_name] = {data_type: data_type, is_nullable: is_nullable} 

/*

GOAL

export class Person extends Model {
  static table = "people";
  static columns = {
    name: {
      type: "varchar",
      notNull: true,
    },
    skin_color: {
      type: "varchar",
      notNull: false,
    },
    homeworld_id: {
      type: "int8",
      notNull: false,
      association: {
        name: "people_fk1",
        mappedTable: "planets",
        mappedColumn: "_id",
      },
    },
    gender: {
      type: "varchar",
      notNull: false,
    },
    eye_color: {
      type: "varchar",
      notNull: false,
    },name = {
      data_type: varchar,
      is_nullable: varchar,
    },
      type: "varchar",
      notNull: false,
    },
    mass: {
      type: "varchar",
      notNull: false,
    },
    species_id: {
      type: "int8",
      notNull: false,
      association: {
        name: "people_fk0",
        mappedTable: "species",
        mappedColumn: "_id",
      },
    },
    hair_color: {
      type: "varchar",
      notNull: false,
    },
    _id: {
      type: "int4",
      notNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
    height: {
      type: "int4",
      notNull: false,
    },
  };
}

*/













