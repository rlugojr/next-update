#!/usr/bin/env node

var package = require('./package.json');

var info = package.name + ' - ' + package.description + '\n' +
    '  version: ' + package.version + '\n' +
    '  author: ' + JSON.stringify(package.author);

/*
var program = require('optimist')
    .usage(info)
    .argv;

if (process.argv.length === 2) {
    console.log(info);
    process.exit(0);
}
*/

var nextUpdate = require('./src/next-update');
nextUpdate();