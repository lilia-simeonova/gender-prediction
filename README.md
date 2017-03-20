## Gender Prediction

This module provides a prediction how likely is a given first name to belong to male or female. 

## Algorthm

There aren't any general rules on whether a name is feminine or masculine, but there are some observations that female names are more likely to have as last letter "a" or "e", while male's could end with "r" or "s".
A lot of names could be also unisex. 

The prediction algorithm is based on Naive Bayes Classifier from [natural](https://github.com/NaturalNode/natural#classifiers). The training examples use only he last letter of given corpus with the names.

The data set is extracted from the nlp corpora of [Carnegie Mellon University](http://www.cs.cmu.edu/afs/cs/project/ai-repository/ai/areas/nlp/corpora/)

## Installation

```javscript
npm install gender-prediction
```
## Usage

```javascript
var gender = require ("gender-prediction");

var name = 'Joanna'

predictName(name, result => {
    console.log(result);
});
```

The output for `Joanna` is:

```javascript
[ { label: 'female', value: 0.22322889140556182 },
  { label: 'male', value: 0.00377500943752359 } ]
```

## Disclaimer

The results are only based on mathematical/statistical approach and are not meant to offend anyone.

License

MIT