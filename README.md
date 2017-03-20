## Gender Prediction

This module provides a prediction how likely is a given first name to belong to male or female. 

## Algorthm

The prediction algorithm is based on Naive Bayes Classifier from [natural](https://github.com/NaturalNode/natural#classifiers).

The data set is extracted from the nlp corpora of [Carnegie Mellon University](http://www.cs.cmu.edu/afs/cs/project/ai-repository/ai/areas/nlp/corpora/)

## Installation

```javscript
npm install gender-prediction
```
## Usage

```javascript
var gender = require ("gender-prediction");

var name = 'Lilly'

predictName(name, result => {
    console.log(result);
});
```

The chances for `Lilly` to be female name is 5 times larger than to be male's name:

```javascript
[ { label: 'female', value: 0.0005035880649628603 },
  { label: 'male', value: 0.00012589701624071505 } ]
```

## Disclaimer

The results are only based on mathematical/statistical approach and are not meant to offend anyone.

License

MIT