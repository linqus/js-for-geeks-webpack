'use strict';

var $ = require('jquery');
window.jQuery = $;
require('bootstrap');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
