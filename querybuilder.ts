//file to create classes and definitions to map commands to PostGres

import { Pool, PoolClient, Client } from "./deps.ts"; 

// we have to declare the types before the constructor
class QueryBuilder {
    URI: string; 
    pools: number;
    isLazy: boolean;
    connect: any;
    constructor(URI: string, pools: number, isLazy: boolean){
        this.URI = URI;
        this.pools = pools;
        this.isLazy = isLazy;
        //could have connect method done here
        const pool = new Pool(URI, pools, isLazy);
        const connection = async () => await pool.connect();
        this.connect = connection();
    }

    //first method, find all data from a table
    findAll(table: string) {
        const queryStr  = `SELECT * FROM ${table}`
        //now will execute postgres query, passing in queryStr as arg

        //then will return result from query to where findAll is being called
    }
}

