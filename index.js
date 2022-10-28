#!/usr/bin/env node

import si from "systeminformation";
import pc from "picocolors";
import camelCase from "camelcase";

if (process.argv.length === 2) {
  console.log(`${pc.red("error:")} no command was provided`);
  process.exit(1);
}

const args = process.argv.slice(2).map((arg) => camelCase(arg));

if (!si[args[0]]) {
  console.log(`${pc.red("error:")} unrecognized command '${args[0]}'`);
  process.exit(1);
}

const data = await si[args[0]]();

console.log(data);
