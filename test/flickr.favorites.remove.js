var flickr = require('..')();
var assert = require('assert');

describe('flickr.favorites.remove', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.favorites.remove({ photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.favorites.remove({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('calls the correct API method');

});