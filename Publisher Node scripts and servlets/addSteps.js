/**
 * Created by Peekapak on 12/16/2015.
 */
var fs = require ('fs');
console.log("start");
var path = process.argv[2];
var newStep =  {
    "text": "Aenean vehicula iaculis auctor. Cras tincidunt mauris at tellus consectetur, eu interdum elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est tortor, elementum vitae metus in, cursus convallis magna. Nunc eu magna sit amet velit sodales dictum. Quisque nulla ante, ultrices eget tristique quis, hendrerit et ante.",
    "type": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus dui facilisis ligula viverra commodo. Maecenas id scelerisque lacus, sed finibus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lobortis semper odio, a convallis quam aliquam a."
};
var content = fs.readFileSync(path, 'utf8');
//var contentString = JSON.stringify(content);
//console.log(content);
var jsonContent = JSON.parse(content);
jsonContent.implementation[0].steps.push(newStep);

fs.writeFile(path, JSON.stringify(jsonContent, null, 4), function (err) {
    if (err) {
        throw err;
    } else {
        console.log("JSON saved");

    }

});