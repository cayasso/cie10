module.exports = function (type) {
	type = type || 'json';
	return require('./cie10-' + type + '.json');
};