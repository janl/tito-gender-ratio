#!/usr/bin/env node
var csv = require('csv-parser')
var jsonfilter = require('jsonfilter')
var genderize = require('genderize')
var count = require('category-count-stream')
var ndjson = require('ndjson')

process.stdin
  .pipe(csv())
  .pipe(ndjson.stringify())
  .pipe(jsonfilter('Ticket First Name'))
  .pipe(ndjson.parse())
  .pipe(genderize.stream())
  .pipe(count('gender', function (r) {
    console.log(`${Math.round(r.female / (r.male + r.female + r.missing) * 100)}%`)
  }))