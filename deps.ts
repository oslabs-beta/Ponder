//this will be where all the deps (dependencies) are brought in, and then sent to our various files for use

//postgres driver official from deno
// import * as postgres from "https://deno.land/x/postgres@v0.17.0/mod.ts";
// we're importing a few objects from the driver module
export { Pool, PoolClient, Client } from "https://deno.land/x/postgres/mod.ts";