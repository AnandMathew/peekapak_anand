/**
 * Created by Peekapak on 12/11/2015.
 */

var fs = require('fs');
var menu = ["grade-1menu.json", "grade0menu.json","grade1menu.json","grade2menu.json","grade3menu.json"];
var unitName = process.argv[2];
var gradeArray = ["pk","k","1","2","3"];
var gradeArrayWords = ["Pre-Kindergarten","Kindergarten","Grade One", "Grade Two", "Grade Three"];
var substitute = "inClassUnits";
var menuRole = ["Teacher","Publisher"];

for (var j = 0; j <menuRole.length; j++) {
    for (var i = 0; i < menu.length; i++) {
        var content = fs.readFileSync(menuRole[j] + '/' + menu[i], 'utf8');

        var jsonContent = JSON.parse(content);

        var jsonArray = jsonContent.inClassUnits;
        var jsonArray2 = [];



        for (var obj in jsonArray) {
            //console.log(jsonArray[obj].label);
            if(jsonArray[obj].label != unitName){

                jsonArray2.push(jsonArray[obj]);

            }
        }
        /*for (var k = 0; k < jsonArray.length; k++) {
            console.log(jsonArray[k].label);
            if (jsonArray[k].label === unitName) {
                //console.log(jsonArray[k].label);
                console.log(k);
                jsonArray = jsonArray.slice(k);


            }

        }*/






        jsonContent.inClassUnits = jsonArray2;
        //fs.writeFileSync(menuRole[j] + '/' + menu[i], JSON.stringify(jsonContent, null, 4));
        }


    }

console.log(jsonArray2);



