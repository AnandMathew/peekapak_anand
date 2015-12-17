/**
 * Created by Peekapak on 11/23/2015.
 */

var AWS = new require('aws-sdk');
//set region prior to loading of client objects
AWS.config.update({region: 'us-west-2'});
var fs = require('fs');
var archiver = require('archiver');
var dynamodb = new AWS.DynamoDB();
var s3 = new AWS.S3({region: undefined});
//var glob = require ('glob');

//local requires
//var utl = require('./modules/utl.js');
var verMapSelect = process.argv[2];
var userEmail = process.argv[3];
var versionNumber = '';



function zipAndPushFiles(dir) {

    var zipArchive = archiver('zip');
    var writeStream = fs.createWriteStream(dir + '.zip');


    //zipArchive.directory(dir);
    zipArchive.bulk([
        {src: ['Activity/**','LP/**','Menu/Teacher/**'], /*cwd: dir.dir, expand: true, dest: dir.name*/}
    ]);



    zipArchive.pipe(writeStream);

    writeStream.on('close', function() {
        console.log('Zip file ' + dir + '.zip has been created');
        console.log("Uploading.....")
        pushToS3(dir);
    });
    zipArchive.on('error', function(err){
        console.log('somehing screwed up!', err);
    });

    zipArchive.finalize();

    return dir + '.zip';

}

//console.log(name);

function pushToS3(dir) {

    var body = fs.createReadStream(dir + ".zip");
    var body2 = fs.createReadStream(dir + ".zip");
    var params = {Bucket: 'peekaplatform/' + "MetaVersions", Key: getVerFolderName(versionNumber)+ '/' + "Meta" + '.zip',
        Body: body};
    var backUpParams = {Bucket: 'peekaplatform/' + "MetaVersionsBackUp", Key:  userEmail +  '/' +
    getVerFolderName(versionNumber)+ ' ' + Date() + '/' + "Meta" + '.zip',
        Body: body2};


        s3.putObject(params, function (err, pres) {
            if (err) {
                console.log("Error uploading data ", err);
            } else {
                console.log("Data has been successfully uploaded to S3!");
                console.log("BackUp Data will now begin upload.....");
                s3.putObject(backUpParams, function (err, pres) {
                    if (err) {
                        console.log("Error uploading data ", err);
                    } else {
                        console.log("BackUp Data has been successfully uploaded to S3");
                    }
                });
            }
        });

}

function editDB() {

    var updateParams = {
        TableName: "Version",
        Key: {
            "label": {
                "S": "Meta"
            }
        },
        UpdateExpression: 'SET ver.#verMapSelect = ver.#verMapSelect + :val ',

        "ExpressionAttributeNames" : {
            "#verMapSelect" : verMapSelect
        },

        ExpressionAttributeValues:{
            ":val": {
                "N": "1"
            }
        },
        ReturnValues: 'ALL_NEW'

    };

    var getParams = {
        TableName: "Version",
        Key: {
            "label": {
                "S": "Meta"
            }
        },
        ProjectionExpression: 'ver.#verMapSelect',
        "ExpressionAttributeNames" : {
            "#verMapSelect" : verMapSelect
        },

    };

    dynamodb.updateItem(updateParams, function(err, data) {
        if (err){
            console.log("Unable to update version number", err);
        }
        else{
            console.log("Version number updated in database");
        }
        dynamodb.getItem(getParams, function(err, data) {
            if (err){
                console.log ("Unable to get attribute", err);
            }
            else {
                console.log(data.Item.ver.M[verMapSelect].N);
                console.log("----------------------");
                versionNumber = data.Item.ver.M[verMapSelect].N
            }
            zipAndPushFiles("Meta");

        });
    });





}

function getVerFolderName(num){
    return 'ver ' + [num.toString().slice(0, 1), '.', num.toString().slice(1)].join().replace(/,/g,'');
}

editDB();



