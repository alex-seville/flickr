var Upload = require('../services/upload');
var request = require('superagent');
var assert = require('assert');
var sinon = require('sinon');
var nock = require('nock');

describe('services/upload', function () {
	var subject;

	beforeEach(function () {
		subject = new Upload();
	});

	describe('#upload', function () {

		it('makes the correct API call', function () {
			var api = nock('https://www.flickr.com')
			.post('/services/upload')
			.reply(200, '<photoid>1234</photoid>');

			return subject.upload(new Buffer(10), { title: 'blah' }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, '<photoid>1234</photoid>');
			});

		});
	});

	describe('#replace', function () {

		it('makes the correct API call', function () {
			var api = nock('https://www.flickr.com')
			.post('/services/replace')
			.reply(200, '<photoid>1234</photoid>');

			return subject.replace(new Buffer(10), { photo_id: '1234' }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, '<photoid>1234</photoid>');
			});

		});

	});

});
