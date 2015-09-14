# tito-gender-ratio

A script for roughly guessing the gender ratio of your tito event.

I created this for gaining insights of how successful I was promoting the event
for people of all genders. It can be used to give a rough indicator of the diversity
of the group that signed up for your event. Note however that the classification of
names might be wrong and that names are not a certain indicator of the sexual
identification of a person.


You can install this with `npm install tito-gender-ratio -g`.

# Global

Download the participants list as CSV from [ti.to](https://ti.to/home),
in the exampels referred to as `tito-raw.csv`.

You can run
```sh
tito-gender-ratio < tito-raw.csv
```

Alternatively you can use the tito api. Get your access token here https://api.tito.io.

Then do
```sh
TITO_KEY=_your_api_key tito-gender-ratio organisation/event
```

`organisation/event` is the last part of your event url, e.g. `nodeschool-berlin/11`
for `http://ti.to/nodeschool-berlin/11`.
