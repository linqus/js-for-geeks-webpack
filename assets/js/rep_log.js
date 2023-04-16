import $ from 'jquery';
import RepLogApp from './Components/RepLogApp.js';

$(document).ready(function() {
    var $wrapper = $('.js-rep-log-table');
    var repLogApp = new RepLogApp($wrapper, $wrapper.data('replogs'));
});