/**
 * Created by Peekapak on 12/16/2015.
 */

var fs = require ('fs');
console.log("start");
var path = process.argv[2];

var content = fs.readFileSync(path, 'utf8');
//var contentString = JSON.stringify(content);
//console.log(content);
var jsonContent = JSON.parse(content);
var num = jsonContent.implementation[0].steps.length;
jsonContent.implementation[0].steps.splice(num - 1 , 1);

fs.writeFile(path, JSON.stringify(jsonContent, null, 4), function (err) {
    if (err) {
        throw err;
    } else {
        console.log("JSON saved");

    }

});