import { Model } from './library/model.ts'

export class films extends Model { 
tableName = 'films' 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static opening_crawl = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static release_date = { 
    data_type: 'date', 
    is_nullable: 'NO', 
    } 
 static title = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static director = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static producer = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static episode_id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
  } 
 
export class newawesometable extends Model { 
tableName = 'newawesometable' 
 static key1 = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static key2 = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
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
 
export class people_in_films extends Model { 
tableName = 'people_in_films' 
 static person_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static film_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
  } 
 
export class personexamples extends Model { 
tableName = 'personexamples' 
 static personscore = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
 static person_id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static personname = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
  } 
 
export class pg_stat_statements extends Model { 
tableName = 'pg_stat_statements' 
 static wal_records = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static dbid = { 
    data_type: 'oid', 
    is_nullable: 'YES', 
    } 
 static userid = { 
    data_type: 'oid', 
    is_nullable: 'YES', 
    } 
 static local_blks_hit = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static query = { 
    data_type: 'text', 
    is_nullable: 'YES', 
    } 
 static local_blks_read = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static mean_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static min_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static shared_blks_written = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static plans = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static temp_blks_written = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static shared_blks_read = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static stddev_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static min_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static local_blks_dirtied = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static wal_bytes = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
 static blk_write_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static shared_blks_dirtied = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static total_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static temp_blks_read = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static mean_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static max_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static calls = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static wal_fpi = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static local_blks_written = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static rows = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static queryid = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static blk_read_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static max_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static total_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static stddev_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static shared_blks_hit = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
  } 
 
export class pilots extends Model { 
tableName = 'pilots' 
 static vessel_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 static person_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
  } 
 
export class planets extends Model { 
tableName = 'planets' 
 static surface_water = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static climate = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static terrain = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static name = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static population = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static diameter = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static rotation_period = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static orbital_period = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static gravity = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
  } 
 
export class planets_in_films extends Model { 
tableName = 'planets_in_films' 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static film_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 static planet_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
  } 
 
export class species extends Model { 
tableName = 'species' 
 static language = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static average_height = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static average_lifespan = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static eye_colors = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static skin_colors = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static hair_colors = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static homeworld_id = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static classification = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static name = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
  } 
 
export class species_in_films extends Model { 
tableName = 'species_in_films' 
 static film_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static species_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
  } 
 
export class starship_specs extends Model { 
tableName = 'starship_specs' 
 static vessel_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 static MGLT = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static hyperdrive_rating = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
  } 
 
export class stellanomoreteeth extends Model { 
tableName = 'stellanomoreteeth' 
 static column1 = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static column2 = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
  } 
 
export class vessels extends Model { 
tableName = 'vessels' 
 static model = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static crew = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static cargo_capacity = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static name = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static manufacturer = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static length = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static vessel_type = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static vessel_class = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static max_atmosphering_speed = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static cost_in_credits = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static passengers = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static consumables = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
  } 
 
export class vessels_in_films extends Model { 
tableName = 'vessels_in_films' 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static film_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 static vessel_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
  } 
 
export interface films { 
  _id: number; 
  opening_crawl: string; 
  release_date: string; 
  title: string; 
  director: string; 
  producer: string; 
  episode_id: number; 
} 
 
export interface newawesometable { 
  key1: string; 
  key2: number; 
} 
 
export interface people { 
  mass: string; 
  skin_color: string; 
  name: string; 
  homeworld_id: number; 
  hair_color: string; 
  _id: number; 
  height: number; 
  species_id: number; 
  birth_year: string; 
  gender: string; 
  eye_color: string; 
} 
 
export interface people_in_films { 
  person_id: number; 
  _id: number; 
  film_id: number; 
} 
 
export interface personexamples { 
  personscore: number; 
  person_id: number; 
  personname: string; 
} 
 
export interface pg_stat_statements { 
  wal_records: number; 
  dbid: undefined; 
  userid: undefined; 
  local_blks_hit: number; 
  query: string; 
  local_blks_read: number; 
  mean_exec_time: number; 
  min_exec_time: number; 
  shared_blks_written: number; 
  plans: number; 
  temp_blks_written: number; 
  shared_blks_read: number; 
  stddev_exec_time: number; 
  min_plan_time: number; 
  local_blks_dirtied: number; 
  wal_bytes: number; 
  blk_write_time: number; 
  shared_blks_dirtied: number; 
  total_plan_time: number; 
  temp_blks_read: number; 
  mean_plan_time: number; 
  max_plan_time: number; 
  calls: number; 
  wal_fpi: number; 
  local_blks_written: number; 
  rows: number; 
  queryid: number; 
  blk_read_time: number; 
  max_exec_time: number; 
  total_exec_time: number; 
  stddev_plan_time: number; 
  shared_blks_hit: number; 
} 
 
export interface pilots { 
  vessel_id: number; 
  person_id: number; 
  _id: number; 
} 
 
export interface planets { 
  surface_water: string; 
  climate: string; 
  _id: number; 
  terrain: string; 
  name: string; 
  population: number; 
  diameter: number; 
  rotation_period: number; 
  orbital_period: number; 
  gravity: string; 
} 
 
export interface planets_in_films { 
  _id: number; 
  film_id: number; 
  planet_id: number; 
} 
 
export interface species { 
  language: string; 
  average_height: string; 
  average_lifespan: string; 
  _id: number; 
  eye_colors: string; 
  skin_colors: string; 
  hair_colors: string; 
  homeworld_id: number; 
  classification: string; 
  name: string; 
} 
 
export interface species_in_films { 
  film_id: number; 
  _id: number; 
  species_id: number; 
} 
 
export interface starship_specs { 
  vessel_id: number; 
  MGLT: string; 
  _id: number; 
  hyperdrive_rating: string; 
} 
 
export interface stellanomoreteeth { 
  column1: string; 
  column2: number; 
} 
 
export interface vessels { 
  model: string; 
  _id: number; 
  crew: number; 
  cargo_capacity: string; 
  name: string; 
  manufacturer: string; 
  length: string; 
  vessel_type: string; 
  vessel_class: string; 
  max_atmosphering_speed: string; 
  cost_in_credits: number; 
  passengers: number; 
  consumables: string; 
} 
 
export interface vessels_in_films { 
  _id: number; 
  film_id: number; 
  vessel_id: number; 
} 
 
