//file to create classes and definitions to map commands to PostGres

//

//starting queries
    //select, where, update, delete, insert, create table

    //join could be second half

export class queryBuilder {
    // constructor(URI: string) {
    //     this.URI = URI;
    //     //could have connect method done here
    // }

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

