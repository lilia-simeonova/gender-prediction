var natural = require('natural');

var result = '';

function lastLetter(name) {
  return name.slice(-1);
}

exports.predictName = function(name, callback) {
   // letter = lastLetter(name);
    natural.BayesClassifier.load('../data/classifier.json', null, function(err, classifier) {
        result = classifier.getClassifications(name);
        callback(result)
    });
}
exports.predictName('Lilly', r => {console.log(r)})