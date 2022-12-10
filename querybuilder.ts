//file to create classes and definitions to map commands to PostGres
//filling out the rows on our tables here retrieving and adding/info

import { Pool, PoolClient, Client } from "./deps.ts"; 

import { poolConnection, query, poolDisconnect } from "./connection.ts";

//starting queries
    //select, where, update, delete, insert, create table

    //join could be second half
// we have to declare the types before the constructor
export class QueryBuilder {
    pool: Pool
    constructor(pool: Pool){
        //old parameters:
        // URI: string, pools: number, isLazy: boolean
        //we had tried putting connection method here but did not work
        //release method was not found
        //open the pool
        // this.pool = new Pool(URI, pools, isLazy)
        this.pool = pool;
    }

    //first method, find all data from a table
    async findAllinOne(table: string) {
        // connect via this.pool
        // const connect = await this.pool.connect();
        //take in argument to make query to run
        const queryStr  = `SELECT * FROM ${table};`;
        //execute actual query by passing string into query function imported from connection
        //which will also create individual connection and release after return
        const result = await query(queryStr);
        //execute actual query passing in query string made from arguments
        // const { rows } = await connect.queryObject(queryStr);
        //release pool connection
        // connect.release();
        //then will return result from query to where findAllinONe is being called
        return result;        
    }
    //disconnecting with our pool here. User will have to disconnect manually, if they so choose
    async disconnect() {
        await poolDisconnect();
        console.log('truly disconnect')
    } 
}

//for now, exporting for use to Workspace, but eventually will export or be packaged for use as module hosted on deno.land
// export queryBuilder;


//originally
    //connection was in User
    //QueryBuilder "method" was able to work (from querybuilder file)

    //conection will be in querybuilder file, in a new func called connecitonbuilder
    //querybuilder mehtod, still lives in querybuilder file