// dataset - http://www.cs.cmu.edu/afs/cs/project/ai-repository/ai/areas/nlp/corpora/

const fs = require('fs');

var natural = require('natural');
var classifierLetters = new natural.BayesClassifier();
var classifierNames = new natural.BayesClassifier();

function lastLetter(name) {
  return name.slice(-1);
}

var lastLetterOfNames = [];
//var listOfNames = [];

function createTrainingData(gender) {
	var data = fs.readFileSync('./data/' + gender + '.txt', "utf-8");
	var names = data.toString().split("\n");
	names.map(name => lastLetterOfNames.push({letter:lastLetter(name), gender:gender}));
}

// function createTrainingDataNames(gender) {
// 	var data = fs.readFileSync('./data/' + gender + '.txt', "utf-8");
// 	var names = data.toString().split("\n");
// 	names.map(name => listOfNames.push({name:name, gender:gender}));
// }


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
// createTrainingDataNames('female');
// createTrainingDataNames('male');

lastLetterOfNames = shuffle(lastLetterOfNames);
listOfNames = shuffle(listOfNames);

fs.writeFile('./names.json', JSON.stringify(listOfNames) , 'utf-8', (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});

var trainingSet = [];

lastLetterOfNames.map(value => classifierLetters.addDocument([value.letter], value.gender))
//listOfNames.map(value => classifierNames.addDocument(value.name, value.gender))

classifierLetters.train();
//classifierNames.train();

classifierLetters.save('./data/classifierLetters.json', function(err, classifierLetters) {
    console.log('it is saved!')
});

// classifierNames.save('./data/classifierNames.json', function(err, classifierNames) {
//     console.log('it is saved!')
// });


exports.gender = function(value) {
	classifierLetters.getClassifications(value);
}

