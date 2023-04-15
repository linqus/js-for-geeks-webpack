var path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, './web/build'),
        filename: 'rep_log.js'
    },
    mode: 'development'
}