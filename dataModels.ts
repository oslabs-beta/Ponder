import { Model } from './deps.ts' 
 
export class basket_a extends Model { 
tableName = 'basket_a' 
 static a = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static fruit_a = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
  } 
 
export class basket_b extends Model { 
tableName = 'basket_b' 
 static fruit_b = { 
    data_type: 'character varying', 
    is_nullable: 'NO', 
    } 
 static b = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
  } 
 
export class itsreallllllll extends Model { 
tableName = 'itsreallllllll' 
 static newcolumn1 = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static columnbynew2 = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static mangoisbest = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
  } 
 
export class personexamples extends Model { 
tableName = 'personexamples' 
 static personname = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static person_id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static personscore = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
  } 
 
export class personexamples2 extends Model { 
tableName = 'personexamples2' 
 static mangoscore = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
 static mango_id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static personscore = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
 static person_id = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
 static mangoname = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static personname = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
  } 
 
export class pg_stat_statements extends Model { 
tableName = 'pg_stat_statements' 
 static total_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static min_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static max_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static mean_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static stddev_exec_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static rows = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static shared_blks_hit = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static shared_blks_read = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static shared_blks_dirtied = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static shared_blks_written = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static local_blks_hit = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static local_blks_read = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static local_blks_dirtied = { 
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
 static query = { 
    data_type: 'text', 
    is_nullable: 'YES', 
    } 
 static blk_read_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static blk_write_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static wal_records = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static wal_fpi = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static wal_bytes = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
 static userid = { 
    data_type: 'oid', 
    is_nullable: 'YES', 
    } 
 static dbid = { 
    data_type: 'oid', 
    is_nullable: 'YES', 
    } 
 static queryid = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static plans = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
 static total_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static min_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static max_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static mean_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static stddev_plan_time = { 
    data_type: 'double precision', 
    is_nullable: 'YES', 
    } 
 static calls = { 
    data_type: 'bigint', 
    is_nullable: 'YES', 
    } 
  } 
 
export class somethingnewtable extends Model { 
tableName = 'somethingnewtable' 
 static mangoisreallybest6 = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
 static columnbynew2 = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static newcolumn1 = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
  } 
 
export class somethingnewtable222222 extends Model { 
tableName = 'somethingnewtable222222' 
 static mangoisbest = { 
    data_type: 'numeric', 
    is_nullable: 'YES', 
    } 
 static columnbynew2 = { 
    data_type: 'character varying', 
    is_nullable: 'YES', 
    } 
 static newcolumn1 = { 
    data_type: 'integer', 
    is_nullable: 'NO', 
    } 
  } 
 
export interface basket_a { 
  a: number; 
  fruit_a: string; 
} 
 
export interface basket_b { 
  fruit_b: string; 
  b: number; 
} 
 
export interface itsreallllllll { 
  newcolumn1: number; 
  columnbynew2: string; 
  mangoisbest: number; 
} 
 
export interface personexamples { 
  personname: string; 
  person_id: number; 
  personscore: number; 
} 
 
export interface personexamples2 { 
  mangoscore: number; 
  mango_id: number; 
  personscore: number; 
  person_id: number; 
  mangoname: string; 
  personname: string; 
} 
 
export interface pg_stat_statements { 
  total_exec_time: number; 
  min_exec_time: number; 
  max_exec_time: number; 
  mean_exec_time: number; 
  stddev_exec_time: number; 
  rows: number; 
  shared_blks_hit: number; 
  shared_blks_read: number; 
  shared_blks_dirtied: number; 
  shared_blks_written: number; 
  local_blks_hit: number; 
  local_blks_read: number; 
  local_blks_dirtied: number; 
  local_blks_written: number; 
  temp_blks_read: number; 
  temp_blks_written: number; 
  query: string; 
  blk_read_time: number; 
  blk_write_time: number; 
  wal_records: number; 
  wal_fpi: number; 
  wal_bytes: number; 
  userid: undefined; 
  dbid: undefined; 
  queryid: number; 
  plans: number; 
  total_plan_time: number; 
  min_plan_time: number; 
  max_plan_time: number; 
  mean_plan_time: number; 
  stddev_plan_time: number; 
  calls: number; 
} 
 
export interface somethingnewtable { 
  mangoisreallybest6: number; 
  columnbynew2: string; 
  newcolumn1: number; 
} 
 
export interface somethingnewtable222222 { 
  mangoisbest: number; 
  columnbynew2: string; 
  newcolumn1: number; 
} 
 
