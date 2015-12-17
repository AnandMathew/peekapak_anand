/**
 * Created by Peekapak on 12/4/2015.
 */

var fs = require('fs');
var unitName = process.argv[2];
var gradeArray = ["pk","k","1","2","3"];
var gradeArrayWords = ["Pre-Kindergarten","Kindergarten","Grade One", "Grade Two", "Grade Three"];
var activityArr = ["Lesson 1","Lesson 2", "Lesson 3", "Lesson 4"];
var activityName = ["activityOne","activityTwo","activityThree","activityFour"];
var i,j ;



for (i = 0; i < gradeArray.length; i++){
    for(j = 0; j < activityName.length; j++) {

        var activityData = {
            "label": activityArr[j],
            "title": "Edit ",
            "bannerImage": "bannerImages/gratitude-activityFour.jpg",

            "objective": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus dui facilisis ligula viverra commodo. Maecenas id scelerisque lacus, sed finibus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lobortis semper odio, a convallis quam aliquam a. Nulla arcu magna, vehicula nec orci sit amet, molestie hendrerit ligula. In suscipit dignissim ipsum, sed iaculis nunc vulputate non. Sed auctor risus et eleifend mollis. Etiam interdum est odio, ac rutrum massa cursus vitae.",
            "coreStandards": [
                "1-RL-1",
                "1-RL-7",
                "1-SL-4",
                "1-W-2",
                "1-L-5-c"
            ],
            "skills": [
                "Edit",
                "Edit",
                "Edit"
            ],
            "preparation": "",
            "requirements": "Edit",
            "implementation": [{
                "title": "",
                "steps": [
                    {
                        "text": "Aenean vehicula iaculis auctor. Cras tincidunt mauris at tellus consectetur, eu interdum elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est tortor, elementum vitae metus in, cursus convallis magna. Nunc eu magna sit amet velit sodales dictum. Quisque nulla ante, ultrices eget tristique quis, hendrerit et ante.",
                        "type": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus dui facilisis ligula viverra commodo. Maecenas id scelerisque lacus, sed finibus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lobortis semper odio, a convallis quam aliquam a."
                    },
                    {
                        "text": "Aenean vehicula iaculis auctor. Cras tincidunt mauris at tellus consectetur, eu interdum elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est tortor, elementum vitae metus in, cursus convallis magna. Nunc eu magna sit amet velit sodales dictum. Quisque nulla ante, ultrices eget tristique quis, hendrerit et ante.",
                        "type": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus dui facilisis ligula viverra commodo. Maecenas id scelerisque lacus, sed finibus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lobortis semper odio, a convallis quam aliquam a."
                    }
                ]
            }],
            "modifications": "Aenean vehicula iaculis auctor. Cras tincidunt mauris at tellus consectetur, eu interdum elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est tortor, elementum vitae metus in, cursus convallis magna. Nunc eu magna sit amet velit sodales dictum. Quisque nulla ante, ultrices eget tristique quis, hendrerit et ante.",
            "extensions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus dui facilisis ligula viverra commodo. Maecenas id scelerisque lacus, sed finibus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lobortis semper odio, a convallis quam aliquam a.",
            "homework": {
                "label": "Thankfulness Jar",
                "text": "Edit",
                "url": "gratitude-AG-activity4.pdf"
            },
            "summary": {
                "label": "How Do We Apply Gratitude To Our Lives?",
                "text": "Edit",
                "classSummary": "Edit",
                "homeSummary": "Edit"
            },
            "origin": {
                "dir": "Activity/",
                "name": "activity-" + unitName + '-' + gradeArray[i] + '-' + activityName[j],
            }
        };



        fs.writeFile("activity-" + unitName + '-' + gradeArray[i] + '-' + activityName[j] + '.json', JSON.stringify(activityData, null, 4),
            function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("JSON Activity saved");
            }
        });

    }
    var primerData = {
        "label": "Edit",
        "title": "Classroom Read Aloud",
        "bannerImage": "bannerImages/00.header-book.jpg",
        "overview": "",
        "objective":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus dui facilisis ligula viverra commodo. Maecenas id scelerisque lacus, sed finibus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lobortis semper odio, a convallis quam aliquam a.",
        "coreStandards": [
            "PK-RL-2",
            "PK-RL-6",
            "PK-RF-1-a",
            "PK-RF-1-e",
            "PK-RF-2"
        ],
        "skills": [
            "Literacy",
            "Communication"
        ],
        "preparation": "Edit",
        "requirements": "Edit",
        "reading": {
            "before": {
                "thumbnail": "../media/images/thumbnails/gratitudeGrade1Primer1.jpg",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus dui facilisis ligula viverra commodo. Maecenas id scelerisque lacus, sed finibus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lobortis semper odio, a convallis quam aliquam a.",
            },
            "during": {
                "thumbnail": "../media/images/thumbnails/gratitudeGrade1Primer2.jpg",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus dui facilisis ligula viverra commodo. Maecenas id scelerisque lacus, sed finibus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lobortis semper odio, a convallis quam aliquam a."
            },
            "after": {
                "thumbnail": "../media/images/thumbnails/gratitudeGrade1Primer3.jpg",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus dui facilisis ligula viverra commodo. Maecenas id scelerisque lacus, sed finibus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lobortis semper odio, a convallis quam aliquam a."
            }
        },
        "implementation": [],
        "modifications": "",
        "extensions": "",
        "misc": [],
        "homework": {
            "label": "Reading Together",
            "text": "Edit ",
            "url": "kindness-AG-readAloud.pdf"
        },
        "summary": {
            "label": "Classroom Read Aloud",
            "text": "Edit",
            "classSummary": "Edit",
            "homeSummary": "Edit"
        },
        "origin": {
            "dir": "Activity/",
            "name": "activity-" + unitName + '-' + gradeArray[i] + "-primer"
        }
    };

    fs.writeFile("activity-" + unitName + '-' + gradeArray[i] + '-' + 'primer.json', JSON.stringify(primerData, null, 4),
        function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("JSON Primer saved");
            }
        });
}