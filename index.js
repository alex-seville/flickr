// Flickr constructor
exports = module.exports = require('./services/rest');

// Services
exports.OAuth = require('./services/oauth');
exports.Feeds = require('./services/feeds');
exports.UploadAPI = require('./services/upload');
