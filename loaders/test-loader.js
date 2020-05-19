
var utils = require('loader-utils');
module.exports = function (source) {
    const options = utils.getOptions(this);
    // console.log(options);
    return source;
};