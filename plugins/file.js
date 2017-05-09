module.exports = function (file) {
	return function (req) {

		var _end = req.end;

		req.end = function (fn) {


			console.log("***2");

			Object.keys(file).forEach(function (key) {
				this.attach(key, file[key]);
			}.bind(this));
			console.log("req:", req);
			_end.call(this, fn);

		};


	}
};
