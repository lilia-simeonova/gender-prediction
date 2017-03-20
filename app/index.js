var natural = require('natural');

var result = '';

function lastLetter(name) {
  return name.slice(-1);
}

exports.predictName = function(name, callback) {
    letter = lastLetter(name);
    natural.BayesClassifier.load('../data/classifierLetters.json', null, function(err, classifierLetters) {
        result = classifierLetters.getClassifications([letter]);
        callback(result)
    });
}
