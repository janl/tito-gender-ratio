#!/usr/bin/env node
var csv = require('csv-parser')
var jsonfilter = require('jsonfilter')
var genderize = require('genderize')
var count = require('category-count-stream')
var ndjson = require('ndjson')
var tickets = require('./tickets')

var source

if (process.argv.length > 2) {
  if (!('TITO_KEY' in process.env)) {
    console.error('You have to specify the TITO_KEY env variable')
    process.exit(1)
  }
  source = tickets(process.env.TITO_KEY, process.argv[2])
} else {
  source = process.stdin
    .pipe(csv())
    .pipe(ndjson.stringify())
    .pipe(jsonfilter('Ticket First Name'))
}

source
  .pipe(ndjson.parse())
  .pipe(genderize.stream())
  .pipe(count('gender', function (r) {
    r.female = r.female || 0
    r.male = r.male || 0
    r.missing = r.missing || 0
    console.log(Math.round(r.female / (r.male + r.female + r.missing) * 100) + '%', r.female + 'f', r.male + 'm', r.missing + 'n')
  }))
