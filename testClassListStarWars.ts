import { Model } from './library/model.ts'

export class films { 
tableName = 'films' 
 _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 opening_crawl = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 release_date = { 
    data_type: 'date', 
    is_nullable: 'NO', 
    } 
 title = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 director = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 producer = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 episode_id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
  } 
 
export class newawesometable { 
tableName = 'newawesometable' 
 key1 = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 key2 = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
  } 

  export interface people {
   mass: number;
   skin_color: string;
   name: string;
   homeworld_id: number
   hair_color: string;
   _id: number;
   height: number;
   species_id: number;
   birth_year: number;
   eye_color: string;
   gender: string
  }
 
export class people extends Model { 
tableName = 'people' 
  static mass = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static skin_color = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static name = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static homeworld_id = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static hair_color = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static height = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static species_id = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static birth_year = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static gender = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static eye_color = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
  } 
 
export class people_in_films { 
tableName = 'people_in_films' 
 person_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 film_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
  } 
 
export class personexamples { 
tableName = 'personexamples' 
 personscore = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
 person_id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 personname = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
  } 
 
export class pg_stat_statements { 
tableName = 'pg_stat_statements' 
 wal_records = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 dbid = { 
    data_type: 'oid', 
    is_nullable: 'YES', 
    } 
 userid = { 
    data_type: 'oid', 
    is_nullable: 'YES', 
    } 
 local_blks_hit = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 query = { 
    data_type: 'text', 
    is_nullable: 'YES', 
    } 
 local_blks_read = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 mean_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 min_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 shared_blks_written = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 plans = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 temp_blks_written = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 shared_blks_read = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 stddev_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 min_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 local_blks_dirtied = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 wal_bytes = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
 blk_write_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 shared_blks_dirtied = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 total_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 temp_blks_read = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 mean_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 max_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 calls = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 wal_fpi = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 local_blks_written = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 rows = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 queryid = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 blk_read_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 max_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 total_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 stddev_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 shared_blks_hit = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
  } 
 
export class pilots { 
tableName = 'pilots' 
 vessel_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 person_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
  } 
 
export class planets { 
tableName = 'planets' 
 surface_water = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 climate = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 terrain = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 name = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 population = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 diameter = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 rotation_period = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 orbital_period = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 gravity = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
  } 
 
export class planets_in_films { 
tableName = 'planets_in_films' 
 _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 film_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 planet_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
  } 
 
export class species { 
tableName = 'species' 
 language = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 average_height = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 average_lifespan = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 eye_colors = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 skin_colors = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 hair_colors = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 homeworld_id = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 classification = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 name = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
  } 
 
export class species_in_films { 
tableName = 'species_in_films' 
 film_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 species_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
  } 
 
export class starship_specs { 
tableName = 'starship_specs' 
 vessel_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 MGLT = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 hyperdrive_rating = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
  } 
 
export class stellanomoreteeth { 
tableName = 'stellanomoreteeth' 
 column1 = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 column2 = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
  } 
 
export class vessels { 
tableName = 'vessels' 
 model = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 crew = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 cargo_capacity = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 name = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 manufacturer = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 length = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 vessel_type = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 vessel_class = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 max_atmosphering_speed = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 cost_in_credits = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 passengers = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 consumables = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
  } 
 
export class vessels_in_films { 
tableName = 'vessels_in_films' 
 _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 film_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 vessel_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
  } 
 
