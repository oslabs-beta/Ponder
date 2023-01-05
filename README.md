![image](./assets/small-ponder.png)


# PONDER
**An Object Relational Mapping Tool for Deno Runtime Environment.** <br>
Ponder is available for import at: https://deno.land/x/ponder and this is our link to documentation website: https://ponder.deno.dev/

> ## What is Ponder?

* Ponder is a simple ORM for PostgreSQL built for Deno. 
* Create, read, update, delete tables, add/delete columns, rows, and cells. 
* Writing raw SQL is cumbersome and time consuming for developers. Ponder seeks to address this by providing simple, intuitive methods for manipulating data and tables in your database along Object Oriented Programming principles. 

## Features

- Basic CRUD functionality for interacting with your PostGRES Database including managing tables.<br>
- Introspect database and modify database tables through models in accordance with principles of OOP <br>
- Introspect your database for an object representation of your tables <br>
- Create model instances from your database.
<br><br>
## Getting Started
<a href="https://deno.land/x/ponder"> Ponder </a> is a third-party module available at deno.land. Simply import/export the dependency for use in your project.

```typescript
import * as ponder from "https://deno.land/x/ponder/mod.ts";
```

### Using dotenv Module from Deno

It is recommended to use the dotenv module from Deno to protect sensitive information. Import the dotenv module, write your Database URI as a variable in your own .env file, and then you can refer to it using that variable label.

```typescript
#.env
PG_URI=YourDatabaseURI

#app
import "https://deno.land/x/dotenv/load.ts";

const PG_URI = Deno.env.get('PG_URI');  // returns YourDatabaseURI from .env file

```

### Connect your PostgreSQL Database
Connect your existing PostGRES Database using the built-in method called poolConnection. Ponder uses a pool connection which is strongly recommended by PostGRES for use in their databases. Simply insert your database URI (or insert from a dotenv file). <br><br>
*OPTIONAL Arguments: how many pool connections you'd like to have, true or false for Lazy Loading (recommended true).*

```typescript
import{ poolConnection } from'./deps.ts'

const yourVariable = ponder.poolConnection(PG_URI);
```

Now, using `yourVariable` you can access and use any of Ponder's built-in methods.


## Documentation

The documentation is available <a href="https://ponder.deno.dev/docsfolder/docshome">here</a>. <br>
See docs for complete list of methods, their functionality, and how to use them.

## Upcoming Features and Developments
Features currently in development include:
- Ponder CLI coming soon!


## Contributing and Issues
We are always looking to improve! <br>
To make contributions, create a fork of the dev branch. Please be sure to utilize the Deno Typescript linter. 
Ensure that any changes made are reflected in the documentation. Make a pull request to the Dev branch when 
you have finished making your changes, note that once submitted any changes made will be covered under the MIT liscense. <br>
* Feel free to contact the maintainers with any questions or concerns. <br>
* If you come across any bugs or issues while using Ponder feel free to report by simply opening a new issue on our Github.

## Built with

<p float="left">

<a href="https://deno.land/"><img src="https://img.shields.io/badge/Deno-white?style=for-the-badge&logo=deno&logoColor=464647" alt="Deno Logo" style="display: inline-block"></a>
<a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL Logo" style="display: inline-block"></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript Logo" style="display: inline-block"></a>

</p>

## Contributors
<p>
- Sara Brown : <a href="https://github.com/Sbrown2018" target="_blank"><img alt="GitHub" src="https://img.shields.io/badge/-@Sara-181717?style=flat-square&logo=GitHub&logoColor=white"></a> <a href="https://www.linkedin.com/in/sara-brown15/" target="_blank"> <img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=Linkedin&logoColor=white"></a> <br> 
- Sam Goldenberg : <a href="https://github.com/sammyb1rd" target="_blank"><img alt="GitHub" src="https://img.shields.io/badge/-@Sam-181717?style=flat-square&logo=GitHub&logoColor=white"></a> <a href="https://www.linkedin.com/in/samuel-goldenberg/" target="_blank"> <img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=Linkedin&logoColor=white"></a> <br>
- Matt Connell :<a href="https://github.com/Matt-2112" target="_blank"><img alt="GitHub" src="https://img.shields.io/badge/-@Matt-181717?style=flat-square&logo=GitHub&logoColor=white"></a> <a href="https://www.linkedin.com/in/matt-connell-/" target="_blank"> <img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=Linkedin&logoColor=white"></a> <br>
- Corey McClendon-Brown : <a href="https://github.com/mcbrownc" target="_blank"><img alt="GitHub" src="https://img.shields.io/badge/-@Corey-181717?style=flat-square&logo=GitHub&logoColor=white"></a> <a href="https://www.linkedin.com/in/coreymcclendonbrown/" target="_blank"> <img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=Linkedin&logoColor=white"></a> <br>
- Stella Baek : <a href="https://github.com/StellaBaek" target="_blank"><img alt="GitHub" src="https://img.shields.io/badge/-@Stella-181717?style=flat-square&logo=GitHub&logoColor=white"> </a> <a href="https://www.linkedin.com/in/stellabaek" target="_blank"> <img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=Linkedin&logoColor=white"></a> 
  
</p>

