This module predicts whether given first name is male or female.

The prediction algorithm is based on naive Bayes classifier from [natural](https://github.com/NaturalNode/natural#classifiers).

The data set used for training is from the nlp corpora of [Carnegie Mellon University](http://www.cs.cmu.edu/afs/cs/project/ai-repository/ai/areas/nlp/corpora/)

## Installation

npm install gender-prediction

## Usage

var gender = require ("gender-prediction");

var name = 'Lilly'

```javascript
predictName(name, result => {
    console.log(result);
});
```

License

MIT