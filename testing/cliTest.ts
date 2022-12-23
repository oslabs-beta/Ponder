import { parse } from "https://deno.land/std@0.168.0/flags/mod.ts";

const test = Deno.args[0];

console.log('this is test from cliTest:', test);