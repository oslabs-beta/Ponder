//introspection (inspecting a data source) allows us to turn table data into an object. Once the table data is an object, users can create new table entries with object notation

//pass the URI --> open up a new whole ass pool
import { Client, Pool, PoolClient } from "../deps.ts";
import { query, poolConnection } from './connection.ts'
//information schema provides access to database metadata


async function introspect () {
  const ponder = await poolConnection(
    "postgres://hfwbmzny:AArrmznb9EBr4Tjbxe5XordjASLQ_j4S@heffalump.db.elephantsql.com/hfwbmzny",
    3,
    true,
  );
//declare object to represent table
  const tableObj = {}
//query db for tables
  const tables = await query("SELECT table_name FROM information_schema.tables WHERE table_schema='public'"); //this should be an array

//query db for columns. query for all columns from that table
  const columnList = await query(`SELECT column_name, is_nullable, table_name, data_type FROM information_schema.columns WHERE table_schema = 'public' ORDER BY table_name;`);
  console.log('column list', columnList)
// iterate through the column list
  // tableObj[table_name][columnList[0][column_name]] = "test";

  for (let i = 0; i < columnList.length; i++){
    let colName = columnList[i]['column_name'];
    let dataType = columnList[i]['data_type'];
    let is_nullable = columnList[i]['is_nullable'];
    let tableName = columnList[i]['table_name']
    console.log('colName', colName);

    if(!tableObj[tableName]){
        tableObj[tableName] = {}
    }
    tableObj[tableName][colName] = {'data_type': dataType, 'is_nullable': is_nullable};

  
  }
  return tableObj;
}


introspect();
/*
    column_name: "diameter",
    is_nullable: "YES",
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













