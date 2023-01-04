# Ponder

![deno logo](https://d2908q01vomqb2.cloudfront.net/ca3512f4dfa95a03169c5a670a4c91a19b3077b4/2020/05/26/deno_mit-license_850x425.png)

#### Ponder is an ORM for PostGres using the Deno runtime, eliminating the need for developers to spend valuable time writing complex SQL queries.

## How to add to your Project

---
To use, please import the Ponder URI. You now have access to all the methods on the "ponder" object!
```typescript
import * as ponder from "https://deno.land/x/ponder/mod.ts";
```

## Usage

### Using dotenv Module from Deno

It is recommended to use the dotenv module from Deno to protect sensitive information. Import the dotenv module, write your Database URI as a variable in your own .env file, and then you can refer to it using that variable label.

```typescript
#.env
PG_URI=YourDatabaseURI

#app
import "https://deno.land/x/dotenv/load.ts";

const PG_URI = Deno.env.get('PG_URI');  // returns YourDatabaseURI from .env file

```


### Connecting Your Database

Create a new instance of poolConnection passing in the database connection
string. By default, the number of pool connections is set to three and lazy loading is enabled. Users may also specify the number of server connections and whether the loading type is lazy. 

```typescript
import{ poolConnection } from'./deps.ts

const ponder = new poolConnection('PG_URI') // with default three connections and lazy loading
const ponder = new poolConnection('PG_URI', 5, false) // with five connections and lazy loading disabled.

```



## Methods

### Find a Table

findAllInOne(table: string): returns all data from all rows of a table. 

```typescript
const data = await ponder.findAllinOne('people');  // returns an array with an object containing all data on the 'people' table
```
### Find a Column in a Table

findColumn(column: string, table: string): returns a specific column from a specified table. 

```typescript
const data = await ponder.findColumn('age', 'people');  // stores values from age column from the people table in the const data
```
### Find a Row in a Table

findRow(table: string, attr: string, value: string): returns rows matching specific criteria. 

```typescript
const data = await ponder.findRow('people', 'hair', 'brown');  // stores values from rows in the people table where their hair is brown in the const data
```
### Find a Cell in a Table

findCell(table: string, column: string, value: string): returns data from the first row matching specific criteria. 

```typescript
ponder.findCell('people', 'name', 'corey');
```
### Add a Row to a Table

insertIntoTable(table: string, columns: string[], values: string[]): add a new row to an existing table.

```typescript
ponder.insertIntoTable(table, [column1, column2], [value1, value2]);
```
### Update a Column in a Table

updateTable(
    table: string,
    column_name: string[],
    newValue: string[],
    columnToMeet: string[],
    valueToMeet: string[],
    operator?: string,
): updates columns on existing table. The properties columnToMeet and valueToMeet create the conditional statement that must be satisfied before the table is updated. Please note that update table updates the first matching table entry. The operator parameter takes the argument of either "or" or "not." If left blank, the default is "and."

```typescript
Ponder.updateTable(table: string, ...column: string[], ...value: string[], [q1, q2,
...], [a1, a2, ...], operator?);

Ponder.updateTable(people, [hair_color, eye_color], ['blonde', 'hazel'], [name], ['Fyodor']); // UPDATE TABLE people SET hair_color = 'blonde', eye_color = 'hazel' WHERE name = 'Fyodor';

Ponder.updateTable(people, [hair_color, eye_color], ['blonde', 'hazel'], [name, birth_year], ['Anton', '1860'], 'or'); // UPDATE TABLE people SET hair_color = 'blonde', eye_color = 'hazel' WHERE name = 'Anton' OR birth_year = '1860';
```
### Delete a row on a Table

deleteRow(table: string, column: string[], value: string[]): remove an entire row of data from a table.

```typescript
ponder.deleteRow(hair_color, ['blonde', 'pink'], ['Clemntine']);
```

## Basic CRUD Functionality

### Create Table
createTable(tableName: string, columns: any): use this method to create new tables. This method will only return a message that your table is in the database.

```typescript
Ponder.createTable('Cats', columns: {
   id: num,
   areCute: boolean,
});
```

### Drop One Table
dropOneTable(tableName: string, cascade?: boolean): deletes an entire table

```typescript
Ponder.dropOneTable('Cats', true);
```

### Drop Multiple Tables
dropMultipleTables(tableNamesArray : string[], cascade?: boolean): deletes multiple tables.

```typescript
Ponder.dropMultipleTables(['Cats', 'People'], true);
```

### Add Columns to an Existing Table
addColumns(tableToAlter : string, columns: any): add one or more columns to existing Table


```typescript
Ponder.addColumns('programmers', {
   firstName: 'Stella',
   lastName: 'Stellar'
})
```

### Drop Columns from a Table
dropColumns(tableName: string, columnsToDrop: any): delete an entire column

```typescript
dropColumns('people', columnsToDrop: {programmers: true});
```

## Database Introspection
You will need to create a new file in your project root directory to run the introspection functionality.  Within this file add:
```typescript
// Import ponder 
import * as ponder from "https://deno.land/x/ponder@v0.0.2/mod.ts";

// Invoke instrospect function 
ponder.introspect();
```
You will see a new file called ```dataModels.ts``` in your root directory that contain models of your database tables!

```typescript
// class person extends Model and represents the "person" table in database

import { Model } from './deps.ts' 

export class person extends Model { 
tableName = 'person' 
 static person_id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static name = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static hair_color = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static age = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static height = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static favorite_movie = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static favorite_movie = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
  }

// Each class is accompanied by an Interface
export interface person { 
  name: string; 
  hair_color: string; 
  age: number; 
  height: number; 
  favorite_movie: string; 
  favorite_book: string; 
} 
```
## Model Methods
Database introspection allows the user to interact with their database through object representations of the tables.
```typescript
// Create an instance of the Model 
const newPerson = new person();

// Use dot notation to assign values to properties on new object.  
//git sIf the types are incorrect, or a value is added to a property that does not exist on model, an error will be thrown.
newPerson.name = 'Sara';
newPerson.hair_color = 'dark brown';
```
### Save new row to table
After instantiating an instance of your model, invoke the ```save()``` method on it to save it to you database
```typescript
// Invoke method.  A new row will be added to the "person" table with the properties added above saved in their respective columns
newPerson.save();
```
### Update a row
Note that once a foreign key has been set, *you CANNOT update it*
If you change properties on your instance and wish to update your database with the new values, invoke the ```update()``` method
```typescript
//Change properties on instance
newPerson.name = 'Johannes';
newPerson.hair_color = 'black';
newPerson.age = 22;

// Invoking update function makes these changes in database
newPerson.update();
```
### Search all entries in table
Invoking ```search()``` on an instance will return all the data from the table the instance is a part of.
```typescript
const everyone = newPerson.save();  //Stores all data from "people" table in variable
``` 
### Delete from table
Deletes row from table 
```typescript
// Invoke method on instance to delete that row from table
newPerson.delete()
```

## Under Development
- CLI tool


## Making contributions
To make contributions, create a fork of the dev branch. Please be sure to utilize the Deno Typescript linter. 
Ensure that any changes made are reflected in the documentation. Make a pull request to the Dev branch when 
you have finished making your changes, note that once submitted any changes made will be covered under the MIT liscense.
Feel free to contact the maintainers with any questions or concerns

## Submitting bugs
If you come across any bugs or issues while using Ponder feel free to report by simpling opening a new issue on our Github.


## License 

MIT Liscense

