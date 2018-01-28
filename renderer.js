var math = require('./math')
var app = require('electron').remote;
var dialog = app.dialog;
var fs = require('fs');
var result = null;

document.getElementById('createButton').onclick = () => {
    dialog.showSaveDialog((fileName) => {
        if(fileName === undefined){
            alert("You didn't save the file");
            return;
        }

        var content = document.getElementById('content').value;
        fs.writeFile(fileName, content, (err) => {
            if (err) console.log(err);
            alert("The file has been successfully saved.");
        })

    });
};

document.getElementById('Add').onclick = () => {
    var value = document.getElementById('content').value;
    result = math.add(value, value);
    alert(result);
};