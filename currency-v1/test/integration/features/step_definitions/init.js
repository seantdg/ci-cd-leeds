/* jshint node:true */
'use strict';

var apickli = require('apickli');
var config = require('../../test-config.json');

console.log('currency api: [' + config.currencyApi.domain + ', ' + config.currencyApi.basepath + ']');

module.exports = function() {
	// cleanup before every scenario
	this.Before(function(scenario, callback) {
		this.apickli = new apickli.Apickli('https', 'seandavis-test.apigee.net/currency/v1' ,'./test/integration/features/fixtures/');
		callback();
	});
};
