const $ = require('jquery');
const RepLogApp = require('./Components/RepLogApp.js');

$(document).ready(function() {
    var $wrapper = $('.js-rep-log-table');
    var repLogApp = new RepLogApp($wrapper, $wrapper.data('replogs'));
});