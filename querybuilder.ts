//file to create classes and definitions to map commands to PostGres

import { Pool, PoolClient, Client } from "./deps.ts"; 

//starting queries
    //select, where, update, delete, insert, create table

    //join could be second half
// we have to declare the types before the constructor
export class QueryBuilder {
    constructor(){
        //we had tried putting connection method here but did not work
        //release method was not found
    }

    //first method, find all data from a table
    findAllinOne(table: string) {
        const queryStr  = `SELECT * FROM ${table}`;
        //now will execute postgres query, passing in queryStr as arg
        return queryStr;
        //then will return result from query to where findAllinONe is being called
    }
}

//for now, exporting for use to Workspace, but eventually will export or be packaged for use as module hosted on deno.land
// export queryBuilder;


//originally
    //connection was in User
    //QueryBuilder "method" was able to work (from querybuilder file)

    //conection will be in querybuilder file, in a new func called connecitonbuilder
    //querybuilder mehtod, still lives in querybuilder file