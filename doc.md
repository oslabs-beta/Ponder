# Ponder

![deno logo](https://d2908q01vomqb2.cloudfront.net/ca3512f4dfa95a03169c5a670a4c91a19b3077b4/2020/05/26/deno_mit-license_850x425.png)

#### Ponder is an ORM for PostGres using the Deno runtime, eleminating the need for developers to spend valuale time writing complex SQL queries.

## Installation

---

```
console.log('Hello')
deno install ponder
```

## Usage

### Connecting Your Database

```
import{ poolConnection } from'./deps.ts

const ponder = new poolConnection('PG_URI', 3, true)
```

Create a new instance of poolConnection passing in the database connection
string, number of pool connections, and a boolean to determine lazy connection

## API Reference

## A detailed reference of all the classes, functions, and methods provided by the library, including their inputs, outputs, and behavior.

Methods for manipulating records and attributes:

```
findAllinOne(table), 
findColumn(column, table), 
findRow(table, attribute, value), 
findCell(table, column, value), 
insertIntoTable(table, [column1, column2], [value1, value2]), 
updateTable(table, [column1, column2, ...], [value1, value2, ...], [q1, q2, ...], [a1, a2, ...], operator?), 
deleteRow(table, [column1, column2, ...], [value1, value2, ...])
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

## Contributing

Instructions for how to contribute to the development of the library, including
how to submit bugs, suggestions, and pull requests.

###### Future developers must have 15 years experience in Deno

## License

Information about the license under which the library is released, including any
applicable copyright and attribution notices.

****** MIT license ******

```
```

```
```

```
```

```
```

```
```

```
```
