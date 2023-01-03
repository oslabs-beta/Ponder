# Ponder

![deno logo](https://d2908q01vomqb2.cloudfront.net/ca3512f4dfa95a03169c5a670a4c91a19b3077b4/2020/05/26/deno_mit-license_850x425.png)

#### Ponder is an ORM for PostGres using the Deno runtime, eliminating the need for developers to spend valuable time writing complex SQL queries.

## Installation

---
CLI coming soon!:
```
console.log('Hello')
deno install ponder
```

## Usage

### Using dotenv Module from Deno

It is recommended to use the dotenv module from Deno to protect sensitive information. Import the dotenv module, write your Database URI as a variable in your own .env file, and then you can refer to it using that variable label.

```
#.env
PG_URI=YourDatabaseURI

#app
import "https://deno.land/x/dotenv/load.ts";

const PG_URI = Deno.env.get('PG_URI');  // returns YourDatabaseURI from .env file

```


### Connecting Your Database

Create a new instance of poolConnection passing in the database connection
string, number of pool connections, and a boolean to determine lazy connection

```
import{ poolConnection } from'./deps.ts

const ponder = new poolConnection('PG_URI', 3, true)
```



## API Reference

## A detailed reference of all the classes, functions, and methods provided by the library, including their inputs, outputs, and behavior.

Methods for manipulating records and attributes:

findAllInOne(table): returns all data from all rows of a table

```
const data = await ponder.findAllinOne(people);  // stores all values from "people" table in data variable
```

findColumn(column, table): returns a specific column from a specified table

```
const data = await ponder.findColumn(age, people);  // stores values from age column from the people table in data
```

findRow(tabvle, attr, value): returns rows matching specific critria

```
const data = await findRow(people, 'hair', 'brown');  // stores data from rows in the people table where their hair is brown
```

findCell(table, column, value): return data from the first row matching specific
criteria

```
findCell(table, column, value),
```

Add a new row to an existing table, takes argument of table name, array of
column names and array of values to insert.

```
insertIntoTable(table, [column1, column2], [value1, value2]),
```

Updates columns on existing table. Takes arguments of table name, array of
columns to update, array of values to insert, array of columns wo meet WHERE
conditions, array of conditions. Optionally takes argument ofoperator, string of
either 'or'or 'not'

```
updateTable(table, [column1, column2, ...], [value1, value2, ...], [q1, q2,
...], [a1, a2, ...], operator?),

updateTable(people, [hair_color, eye_color], ['blonde', 'hazel'], [name], ['Fyodor']) -> UPDATE TABLE people SET hair_color = 'blonde', eye_color = 'hazel' WHERE name = 'Fyodor';

updateTable(people, [hair_color, eye_color], ['blonde', 'hazel'], [name, birth_year], ['Anton', '1860'], 'or') -> UPDATE TABLE people SET hair_color = 'blonde', eye_color = 'hazel' WHERE name = 'Anton' OR birth_year = '1860';
```

deleteRow: remove an entire row of data from a table.

```
deleteRow(hair_color, ['blonde', 'pink'], ['Clemntine'])
```

## Basic CRUD Functionality

Use simple methods to create, read, update, and delete tables.

```
createTable()
```

Select tables, columns, rows, or cells from your table

```
tableName.findAllInOne(table);
```

Insert new columns into your table

```
tableName.insertIntoTable(table, [column1, column2], [value1, value2]);
```

Delete rows

```
tableName.deleteRow(table, column, value);
```

## Managing Tables

Create Tables using the ```createTable()``` method. The method expects 2 arguments: tableName (a string), and columns, an object! This object should have the name of the column you'd like to create as the key. And the value should be an array of strings. The first index should be a SQL datatype, the optional second index should be the length of the datatype, the optional third and beyond can be any column constraints you'd like (NULL, NOT NULL, UNIQUE, etc).

```
const columnsForNewTable = {
   column1Name: ['DATATYPE', 'LENGTH', 'COLUMN CONSTRAINT1', 'COLUMN CONSTRAINT2'...],
   column2Name: ['DATATYPE', 'LENGTH', 'COLUMN2 CONSTRAINT1', 'COLUMN2 CONSTRAINT2'...],
   column3Name: ['DATATYPE', 'LENGTH', 'COLUMN CONSTRAINT1', 'COLUMN CONSTRAINT2'...],
   ...
};

const createYOURtable = await yourVariable.createTable('newTableName', columnsForNewTable);
```
createTable will only return a success message. You may configure your middleware to update your response.



```
addColumns('newTableName', {columnName,[dataType]}),

const addNewColumn = await yourVariable.addColumns('newTableName',)
```


## Contributing

Instructions for how to contribute to the development of the library, including
how to submit bugs, suggestions, and pull requests.

## License

Information about the license under which the library is released, including any
applicable copyright and attribution notices.

****** MIT license ******

