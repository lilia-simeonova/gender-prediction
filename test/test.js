'use strict';
var expect    = require("chai").expect;

var gender = require('../../index.js');


var name = "Lilia";

describe("test", function() {
	it("gender prediction", function() {
		var gender = gender.predictName(name);
		expect(gender).to.not.throw(Error);
	});
});
