#!/usr/bin/env node

const argv = require('yargs')
  .usage('$0 <url>')
  .demandCommand(1, 'You must provide an URL').argv;

const fetch = require('node-fetch');
const { SourceMapConsumer } = require('source-map');

(async function() {
  const [uri] = argv._;

  const [protocol, sourceFile, line, column] = uri.split(':');
  const sourceFileUrl = [protocol, sourceFile].join(':');
  const sourceMapFileUrl = `${sourceFileUrl}.map`;

  const sourceMapFile = await fetch(sourceMapFileUrl);
  const sourceMap = await sourceMapFile.json();
  const smc = new SourceMapConsumer(sourceMap);

  return smc.originalPositionFor({
    line: +line,
    column: +column,
  });
})()
  /* eslint-disable no-console */
  .then(console.log)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
