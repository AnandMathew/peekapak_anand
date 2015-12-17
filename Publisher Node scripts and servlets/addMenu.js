/**
 * Created by Peekapak on 12/6/2015.
 */
var fs = require('fs');
var menu = ["grade-1menu.json", "grade0menu.json","grade1menu.json","grade2menu.json","grade3menu.json"];
var unitName = process.argv[2];
var gradeArray = ["pk","k","1","2","3"];
var gradeArrayWords = ["Pre-Kindergarten","Kindergarten","Grade One", "Grade Two", "Grade Three"];
var substitute = "inClassUnits"
var menuRole = ["Teacher","Publisher"];

for (var j = 0; j <menuRole.length; j++) {


    for (var i = 0; i < gradeArray.length; i++) {
        var newUnit = {
            label: unitName,
            title: "Lesson Plan on Self-Regulation for Kindergarten",
            active: true,
            type: "lessonPlan",
            url: "lessonPlanner",
            params: {id: unitName + '-' + gradeArray[i], inClass: true},
            cef: ["A-1", "A-2", "U-1", "V-2", "U-3", "V-1", "U-2"],
            headerImg: "images/homePageHeaders/respect.png"
        };
        //Asynchronous way
        /*fs.readFile( menu[i], function (err, data) {
         if (err){
         throw err;
         }
         else{
         var obj = JSON.parse(data);
         console.log(obj.substitute);
         fs.writeFile(menu[i],JSON.stringify(obj, null, 4), function (err){
         if(err) {
         throw err;
         } else {
         console.log("JSON saved");
         obj = '';
         }

         });
         }
         //obj.substitute.push(newUnit);

         });*/
        //Synchronous way
        console.log("start");
        var content = fs.readFileSync(menuRole[j] + '/' + menu[i], 'utf8');
        //var contentString = JSON.stringify(content);
        //console.log(content);
        var jsonContent = JSON.parse(content);
        jsonContent.inClassUnits.push(newUnit);
        fs.writeFile(menuRole[j] + '/' + menu[i], JSON.stringify(jsonContent, null, 4), function (err) {
            if (err) {
                throw err;
            } else {
                console.log("JSON saved");
                jsonContent = '';
            }

        });
    }
}




