import { Model } from './deps.ts' 
 
export class films extends Model { 
tableName = 'films' 
 static opening_crawl = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static release_date = { 
    data_type: 'date', 
    is_nullable: 'NO', 
    } 
 static producer = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static title = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static episode_id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static director = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static _id = { 
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
 
export class newesttablename1 extends Model { 
tableName = 'newesttablename1' 
 static newcolumn1 = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static secondcolumn2 = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static thirdnew3 = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
 static mangoscore = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
  } 
 
export class people extends Model { 
tableName = 'people' 
 static height = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static hair_color = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static birth_year = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static homeworld_id = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static species_id = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static name = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static gender = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static skin_color = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static mass = { 
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
 static film_id = { 
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
 
export class personexamples extends Model { 
tableName = 'personexamples' 
 static personscore = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
 static personname = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static person_id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
  } 
 
export class pg_stat_statements extends Model { 
tableName = 'pg_stat_statements' 
 static blk_read_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static shared_blks_dirtied = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static local_blks_written = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static temp_blks_read = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static temp_blks_written = { 
    data_type: 'bigint', 
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
 static rows = { 
    data_type: 'bigint', 
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
 static dbid = { 
    data_type: 'oid', 
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
 static shared_blks_read = { 
    data_type: 'bigint', 
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
 static max_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static wal_records = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static total_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static blk_write_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static stddev_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static local_blks_read = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static query = { 
    data_type: 'text', 
    is_nullable: 'YES', 
    } 
 static local_blks_hit = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static userid = { 
    data_type: 'oid', 
    is_nullable: 'YES', 
    } 
 static queryid = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static max_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static mean_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static min_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
  } 
 
export class pilots extends Model { 
tableName = 'pilots' 
 static person_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static vessel_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
  } 
 
export class planets extends Model { 
tableName = 'planets' 
 static population = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static climate = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static name = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static gravity = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static rotation_period = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static orbital_period = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static surface_water = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static terrain = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static diameter = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
  } 
 
export class planets_in_films extends Model { 
tableName = 'planets_in_films' 
 static film_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static planet_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
  } 
 
export class species extends Model { 
tableName = 'species' 
 static homeworld_id = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static eye_colors = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static hair_colors = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static average_lifespan = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static language = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static average_height = { 
    data_type: 'character varying', 
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
 static skin_colors = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
  } 
 
export class species_in_films extends Model { 
tableName = 'species_in_films' 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static species_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
 static film_id = { 
    data_type: 'bigint', 
    is_nullable: 'NO', 
    } 
  } 
 
export class starship_specs extends Model { 
tableName = 'starship_specs' 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static MGLT = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static vessel_id = { 
    data_type: 'bigint', 
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
 static consumables = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static vessel_type = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static cargo_capacity = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static crew = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static vessel_class = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static name = { 
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
 static model = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static passengers = { 
    data_type: 'integer', 
    is_nullable: 'YES', 
    } 
 static manufacturer = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static _id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static length = { 
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
  opening_crawl: string; 
  release_date: string; 
  producer: string; 
  title: string; 
  episode_id: number; 
  director: string; 
  _id: number; 
} 
 
export interface newawesometable { 
  key1: string; 
  key2: number; 
} 
 
export interface newesttablename1 { 
  newcolumn1: string; 
  secondcolumn2: string; 
  thirdnew3: number; 
  mangoscore: number; 
} 
 
export interface people { 
  height: number; 
  hair_color: string; 
  birth_year: string; 
  homeworld_id: number; 
  species_id: number; 
  name: string; 
  gender: string; 
  _id: number; 
  skin_color: string; 
  mass: string; 
  eye_color: string; 
} 
 
export interface people_in_films { 
  film_id: number; 
  person_id: number; 
  _id: number; 
} 
 
export interface personexamples { 
  personscore: number; 
  personname: string; 
  person_id: number; 
} 
 
export interface pg_stat_statements { 
  blk_read_time: number; 
  shared_blks_dirtied: number; 
  local_blks_written: number; 
  temp_blks_read: number; 
  temp_blks_written: number; 
  calls: number; 
  wal_fpi: number; 
  rows: number; 
  total_exec_time: number; 
  stddev_plan_time: number; 
  shared_blks_hit: number; 
  dbid: undefined; 
  mean_exec_time: number; 
  min_exec_time: number; 
  shared_blks_written: number; 
  plans: number; 
  shared_blks_read: number; 
  local_blks_dirtied: number; 
  wal_bytes: number; 
  max_plan_time: number; 
  wal_records: number; 
  total_plan_time: number; 
  blk_write_time: number; 
  stddev_exec_time: number; 
  local_blks_read: number; 
  query: string; 
  local_blks_hit: number; 
  userid: undefined; 
  queryid: number; 
  max_exec_time: number; 
  mean_plan_time: number; 
  min_plan_time: number; 
} 
 
export interface pilots { 
  person_id: number; 
  _id: number; 
  vessel_id: number; 
} 
 
export interface planets { 
  population: number; 
  climate: string; 
  name: string; 
  gravity: string; 
  rotation_period: number; 
  _id: number; 
  orbital_period: number; 
  surface_water: string; 
  terrain: string; 
  diameter: number; 
} 
 
export interface planets_in_films { 
  film_id: number; 
  _id: number; 
  planet_id: number; 
} 
 
export interface species { 
  homeworld_id: number; 
  eye_colors: string; 
  hair_colors: string; 
  average_lifespan: string; 
  language: string; 
  _id: number; 
  average_height: string; 
  classification: string; 
  name: string; 
  skin_colors: string; 
} 
 
export interface species_in_films { 
  _id: number; 
  species_id: number; 
  film_id: number; 
} 
 
export interface starship_specs { 
  _id: number; 
  MGLT: string; 
  vessel_id: number; 
  hyperdrive_rating: string; 
} 
 
export interface stellanomoreteeth { 
  column1: string; 
  column2: number; 
} 
 
export interface vessels { 
  consumables: string; 
  vessel_type: string; 
  cargo_capacity: string; 
  crew: number; 
  vessel_class: string; 
  name: string; 
  max_atmosphering_speed: string; 
  cost_in_credits: number; 
  model: string; 
  passengers: number; 
  manufacturer: string; 
  _id: number; 
  length: string; 
} 
 
export interface vessels_in_films { 
  _id: number; 
  film_id: number; 
  vessel_id: number; 
} 
 
