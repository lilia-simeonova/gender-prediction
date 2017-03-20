var gender = require('../app/index.js');

var name = "Lilly";

test('retrieving data', () => {
  function callback(data) {
		console.log(data);
    expect(data).not.toBe('undefined');
  }

  gender.predictName(name, callback);
});