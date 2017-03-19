var natural = require('natural');

function lastLetter(name) {
  return name.slice(-1);
}

exports.predictName = function(name) {
    letter = lastLetter(name);
    console.log('name:',name);
    console.log('letter:', letter);
    natural.BayesClassifier.load('./data/classifierLetters.json', null, function(err, classifierLetters) {
        console.log(classifierLetters.getClassifications([letter]));
    });
}

exports.predictName('Lilia');