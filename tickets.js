var tito = require('tito-api')
var jsonfilter = require('jsonfilter')

module.exports = function (apiKey, eventSlug) {
  return tito(apiKey).request(eventSlug + '/tickets')
    .pipe(jsonfilter('tickets.*.first_name'))
}
