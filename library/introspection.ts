//introspection (introspecting a data source) allows us to turn table data into an object. Once the table data is an object, users can create new table entries with object notation

//pass the URI --> open up a new whole pool
import { query } from './connection.ts';
import { types } from './typeTranslator.ts';
//information schema provides access to database metadata

export class Introspect {
  async introspect () {
  //declare object to represent table
    const tableObj = {};
  //query db for columns. query for all columns from that table
    const columnList = await query(`SELECT column_name, is_nullable, table_name, data_type FROM information_schema.columns WHERE table_schema = 'public' ORDER BY table_name;`);
  // iterate through the column list array
    for (let i = 0; i < columnList.length; i++){
      // Destructure current column, retrieving its properties 
      const { column_name: colName, data_type: dataType, is_nullable, table_name: tableName }: { column_name: string; data_type: string; is_nullable: string; table_name: string} = columnList[i];
      // Check if table containing current column exists as property on tableObj.  If not, add a property to tableObj with a value of an empty object
      if (!tableObj[tableName]) {
          tableObj[tableName] = {}
      }
      // Add current column as property to its associated table property on tableObj
      tableObj[tableName][colName] = {'data_type': dataType, 'is_nullable': is_nullable};
    }
    this.classConstructor(tableObj);
    this.interfaceConstructor(tableObj);
    return tableObj;
  }
  
    // A function to separate our introspected object so that it's not just on one line. 
    classConstructor (tableObject: object) {
      let classString: string = `import { Model } from './deps.ts' \n \n`
      //iterating through our tableObject
      for (const table in tableObject) {
        //we use concatenation to separate our massive object onto different lines. Remember table is a string
        classString += `export class ${table} extends Model { \n`;
        classString += `tableName = '${table}' \n`;
        // Iterate through columns in current table
        for (const column in tableObject[table]) {
          // Add columns to classString, with data type properties on each column
          classString  += ` static ${column} = { \n`
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
        //the extra line break is to separate each class declaration for better readability
        classString += '  } \n \n';
        //The classString is written to the file every time
        // Deno.writeTextFileSync("./dataModels.ts", classString, {
        //   append: true
        // });
        
      }
      Deno.writeTextFileSync("./dataModels.ts", classString, {
        append: true
      });
    }
    
    //Takes all tables in the database and writes interfaces to file to match classes
    interfaceConstructor(tableObj: object) {
      //iterate through the object's keys
      for (const table in tableObj) {
      //declare variable and initialize to empty string.  We'll build our interface from this
      let interfaceString: string = '';
      interfaceString += `export interface ${table} { \n`; //FYI table is a string
      //start another loop that iterates through columns. For each column, concat column : value type (value type will be our types object at the key of column[data_type])
        for (const column in tableObj[table]) {
          // The types object is imported from the typeTranslator file. We're translating SQL types into typescript types
          interfaceString += `  ${column}: ${types[tableObj[table][column]['data_type']]}; \n`
        }
        interfaceString += '} \n \n'
        Deno.writeTextFileSync("./dataModels.ts", interfaceString, {
          append: true
        });
      }
    }
}