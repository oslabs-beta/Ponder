//file to create classes and definitions to map commands to PostGres

//

class queryBuilder {
    constructor(URI: string) {
        this.URI = URI;
        //could have connect method done here
    }

    //first method, find all data from a table
    findAll(table: string) {
        const queryStr  = `SELECT * FROM ${table}`
        //now will execute postgres query, passing in queryStr as arg

        //then will return result from query to where findAll is being called
    }
}

