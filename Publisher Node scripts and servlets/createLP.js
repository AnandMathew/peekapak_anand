/**
 * Created by Peekapak on 12/4/2015.
 */

var fs = require('fs');
var unitName = process.argv[2];
var gradeArray = ["pk","k","1","2","3"];
var gradeArrayWords = ["Pre-Kindergarten","Kindergarten","Grade One", "Grade Two", "Grade Three"];
var i ;



for (i = 0; i < gradeArray.length; i++) {
    var lpData = {

    "label": unitName,
    "title": gradeArrayWords[i] + ' ' +  "Lesson Plan on " + unitName,
    "grade": gradeArray[i],
    "story": "treeOfGratitudeGPK-K",
    "primer": {
        "label": "Read Aloud",
        "title": "Read Aloud",
        "url": unitName + '-' + gradeArray[i] + '-primer'
    },
    "activities": [
        {
            "label": "Lesson 1",
            "title": "Guess the Name",
            "url": unitName + '-' + gradeArray[i] + "-activityOne"
        },
        {
            "label": "Lesson 2",
            "title": "Classroom Tree of Happiness",
            "url": unitName + '-' + gradeArray[i] + "-activityTwo"
        },
        {
            "label": "Lesson 3",
            "title": "Streetscape Mural",
            "url": unitName + '-' + gradeArray[i] + "-activityThree"
        },
        {
            "label": "Lesson 4",
            "title": "Story Sequence",
            "url": unitName + '-' + gradeArray[i] + "-activityFour"
        }
    ],
    "thumbnail": "\\media\\images\\thumbnails\\gratitude.jpg",
    "summary": {
        "vocabulary": "Edit",
        "theme": unitName,
        "synopsis": "Edit",
        "sel": "Edit"
    },
    "origin": {
        "dir": "LP\\teacher\\",
        "name": "lp-" + unitName + '-' + gradeArray[i]
    }
}

    fs.writeFile("lp-" + unitName + '-' + gradeArray[i] + '.json', JSON.stringify(lpData, null, 4), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("JSON saved");
        }
    });
}


