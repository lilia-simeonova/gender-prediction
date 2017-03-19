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

// function setResult(r) { 
//     console.log(r);
// }

exports.predictName('Lilia', r => {
    //console.log(r);
    //console.log(result);
});

//console.log(l)
//var l = exports.predictName('Lilia');

//console.log(typeof l);