var AWS = require('aws-sdk');
var config = require('../config');

AWS.config.update({
    accessKeyId: config.AWS_ID,
    secretAccessKey: config.AWS_SECRET,
    region: 'us-west-1'
});

var s3bucket = new AWS.S3({params: {Bucket: 'olympusfootball'}})


module.exports.uploadToS3 = function(fileObj, callback) {

    var params = {
        Key: fileObj.name,
        Body: fileObj.body,
        ContentType: fileObj.type,
        ACL: 'public-read'
    }
    s3bucket.upload(params, callback)
}
