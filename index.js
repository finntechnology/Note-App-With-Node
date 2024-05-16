#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const fs = require("fs");
const {
  createNote,
  readNote,
  deleteSingleNote,
  readSingleNote,
} = require("./noteFunctions");
// const { log } = require("console");

const { command } = argv;

if (command === "create note") {
  createNote(argv);
} else if (command === "read note") {
  console.log(readNote());
} else if (command === "delete note") {
  deleteSingleNote(argv);
} else if (command === "read single note") {
  readSingleNote(argv);
}
