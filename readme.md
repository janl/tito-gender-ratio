# tito-gender-ratio

A script for determining the gender ratio of your tito event.

I created this for gaining insights of how successful I was promoting the event
for people of all genders. It can be used to give a rough indicator of the diversity 
of the group that signed up for your event. Note however that the classification of 
names might be wrong and that names are not a certain indicator of the sexual
identification of a person.

Download the participants list as CSV from [ti.to](https://ti.to/home),
in the exampels referred to as `tito-raw.csv`.

You can install this with `npm install tito-gender-ratio`.

## Gasket

Use [gasket](https://www.npmjs.org/package/gasket) to run the pipeline:

```
gasket run import < tito-raw.csv
```
Example output
```
{"female":8,"male":19,"missing":5}
```

## Shell

Or use the components yourself:

```sh
iconv -f UTF-16le -t UTF-8 tito-raw.csv > tito.csv
csv-parser < tito.csv | jsonfilter "Ticket First Name" | genderize | category-count gender
```