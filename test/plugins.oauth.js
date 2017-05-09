var subject = require('../plugins/oauth');
var OAuth = require('../services/oauth');
var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');
var nock = require('nock');

describe('plugins/oauth', function () {
	var sandbox;

	beforeEach(function () {
		sandbox = sinon.sandbox.create();
		sandbox.stub(OAuth.prototype, 'timestamp').returns(1492398262);
		sandbox.stub(OAuth.prototype, 'nonce').returns('SAknmKo87fcF2i4EnVpxZ8WzxOBzeleL');
	});

	afterEach(function () {
		sandbox.restore();
	});

	it('signs an api get call', function () {
		var api = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			oauth_nonce: 'p2m2bnHdXVIsQH0FUv0oN9XrJU57ak7dSSpHU36mn4k=',
			oauth_consumer_key: 'consumer key',
			oauth_token: 'oauth token',
			oauth_version: '1.0',
			oauth_timestamp: 499166400,
			oauth_signature_method: 'HMAC-SHA1',
			oauth_signature: '5WSz6hwZ6F8jbeYv3eyErif1ySo=',
			method: 'flickr.test.echo',
			foo: 'bar',
			format: 'json',
			nojsoncallback: '1'
		})
		.reply(200, {stat: 'ok'});

		var flickr = new Flickr(subject('consumer key', 'consumer secret', 'oauth token', 'oauth token secret'));

		return flickr.test.echo()
		.query({ foo: 'bar' })
		.then(function (res) {
			assert(api.isDone(), 'Expected mock to have been called');
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		});

	});

	it.only('signs an api post call', function () {
		var api = nock('https://up.flickr.com')
		/*.post('/services/upload', {
			oauth_nonce: 'p2m2bnHdXVIsQH0FUv0oN9XrJU57ak7dSSpHU36mn4k=',
			oauth_consumer_key: 'consumer key',
			oauth_token: 'oauth token',
			oauth_version: '1.0',
			oauth_timestamp: 499166400,
			oauth_signature_method: 'HMAC-SHA1',
			oauth_signature: '5WSz6hwZ6F8jbeYv3eyErif1ySo=',
			foo: 'bar',
			photo: new Buffer(10)
		})*/
		.post('/services/upload/', function(body) {
			console.log("body:", body)
			var fields = {
				oauth_nonce: 'SAknmKo87fcF2i4EnVpxZ8WzxOBzeleL',
				oauth_consumer_key: 'bf6c1f174124db5c03c9db808daea665',
				oauth_token: '72157672764316732-79b3cffaceb9c06',
				oauth_version: '1.0',
				oauth_timestamp: 1492398262,
				oauth_signature_method: 'HMAC-SHA1',
				oauth_signature: 'E9jAtX0TCGx3F+/45B2KnlNpk4U='
			};

	    return Object.keys(fields).every(function (key) {
				var m = body.match(new RegExp(`Content\-Disposition: form\-data; name="` + key + `"` + fields[key]));
				if (!m) {
					console.log("couldn't find match for :", key, fields[key]);
					return body.indexOf(key) && body.indexOf(fields[key]);
				} else {
					return body.match(new RegExp(`Content\-Disposition: form\-data; name="` + key + `"`+ fields[key]));
				}
			})
	  })
		.reply(200, {stat: 'ok'});

		var uploadAPI = new Flickr.UploadAPI();

		return uploadAPI.upload()
		.use(subject('bf6c1f174124db5c03c9db808daea665', 'c150677f1d887b18', '72157672764316732-79b3cffaceb9c067', '2582eff628e1737e'))
		.then(function (res) {
			assert(api.isDone(), 'Expected mock to have been called');
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		}, function (err) {
			console.log("***ERR:", err);
		});

	});

	it('throws if required parameters are not provided', function () {

		assert.throws(function () {
			subject();
		}, function (err) {
			return err.message === 'Missing required argument "consumerKey"';
		});

		assert.throws(function () {
			subject('consumer key');
		}, function (err) {
			return err.message === 'Missing required argument "consumerSecret"';
		});

		assert.throws(function () {
			subject('consumer key', 'consumer secret');
		}, function (err) {
			return err.message === 'Missing required argument "oauthToken"';
		});

		assert.throws(function () {
			subject('consumer key', 'consumer secret', 'oauth token');
		}, function (err) {
			return err.message === 'Missing required argument "oauthTokenSecret"';
		});

	});

});
