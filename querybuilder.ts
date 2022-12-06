//file to create classes and definitions to map commands to PostGres

import { Pool, PoolClient, Client } from "./deps.ts"; 

//starting queries
    //select, where, update, delete, insert, create table

    //join could be second half

// we have to declare the types before the constructor
export class QueryBuilder {
    URI: string; 
    pools: number;
    isLazy: boolean;
    connect: any;
    constructor(URI: string, pools: number, isLazy: boolean){
        this.URI = URI;
        this.pools = pools;
        this.isLazy = isLazy;
    //     //could have connect method done here
        const pool = new Pool(URI, pools, isLazy);
        const connection = async () => await pool.connect();
        this.connect = connection();
    }

    release() {
        this.connect.release();
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

