#!/usr/bin/env node

const parseArgs = require('minimist');
const createServer = require('./index.js');

const args = parseArgs(process.argv.slice(2), { string: ['port'] });
if (!args.port) {
  console.error('Please specify a port using --port <number>');
  process.exit(1);
}

createServer(args).then((server) => {
  server.start();
});
