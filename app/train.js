// dataset - http://www.cs.cmu.edu/afs/cs/project/ai-repository/ai/areas/nlp/corpora/

const fs = require('fs');

var natural = require('natural');
var classifier= new natural.BayesClassifier();


// function lastLetter(name) {
//   return name.slice(-1);
// }

// var lastLetterOfNames = [];
var names = [];

function createTrainingData(gender) {
	var data = fs.readFileSync('../data/' + gender + '.txt', "utf-8");
	var listOfNames = data.toString().split("\n");
	listOfNames.map(name => names.push({name:name, gender:gender}));
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
  return array;
}

createTrainingData('female');
createTrainingData('male');

console.log(names);
//lastLetterOfNames = shuffle(lastLetterOfNames);

names = shuffle(names);

names.map(value => classifier.addDocument(value.name, value.gender))

classifier.train();

classifier.save('../data/classifier.json', function(err, classifier) {
	console.log('it is saved!')
});


exports.gender = function(value) {
	classifier.getClassifications(value);
}



