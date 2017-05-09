var request = require('superagent');

function Upload(isAsync) {
	this.async = !!isAsync;
}

/**
 * @module services/upload
 */

module.exports = Upload;

Upload.prototype.upload = function (args) {
	var req = request('POST', 'https://up.flickr.com/services/upload/')
	Object.keys(args || {}).forEach(function (key) {
		req.field(key, args[key]);
	});
	//.attach('photo', file)
	//.send(args);
	return req;
};

Upload.prototype.replace = function (args) {
	return request('POST', 'https://up.flickr.com/services/replace')
	//.attach('photo', file)
	//.send(args);
};
