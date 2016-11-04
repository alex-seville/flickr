/**
 * Asserts that any of the N keys passed in
 * are found in the obj
 * @param {Object} obj
 * @param {String} key
 * @throws {Error}
 */

 // I am not sure I like calling this assert because of the native node assert

module.exports = function () {
	if (arguments.length === 0) { return void 0; }
	var obj = arguments[0];
	var matches = [].slice.call(arguments, 1).filter(function (key) { return !!obj[key]; });
  if (matches.length === 0) { throw new Error('Expected at least one key to be included in the object'); }
};
