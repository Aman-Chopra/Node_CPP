var math = require('./math')
var app = require('electron').remote;
var dialog = app.dialog;
var fs = require('fs');
var result = null;

document.getElementById('Add').onclick = () => {
    var value = document.getElementById('content').value;
    result = math.add(value, value);
    document.getElementById('content').value = result;
};