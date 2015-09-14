# tito-gender-ratio

A script for roughly guessing the gender ratio of your tito event.

I created this for gaining insights of how successful I was promoting the event
for people of all genders. It can be used to give a rough indicator of the diversity 
of the group that signed up for your event. Note however that the classification of 
names might be wrong and that names are not a certain indicator of the sexual
identification of a person.

Download the participants list as CSV from [ti.to](https://ti.to/home),
in the exampels referred to as `tito-raw.csv`.

You can install this with `npm install tito-gender-ratio -g`.

# Global

You can run
```sh
tito-gender-ratio < tito-raw.csv
```
It will print a percentage.

## Shell

Or use the components yourself:

```sh
csv-parser < tito.csv | jsonfilter "Ticket First Name" | genderize | category-count gender | ndjson-format '${Math.round(this.female / (this.male + this.female + this.missing) * 100)}%'
```
