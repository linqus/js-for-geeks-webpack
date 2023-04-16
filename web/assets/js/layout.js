'use strict';

var $ = require('jquery');
require('bootstrap');

require('../css/main.css');

require('babel-polyfill');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
