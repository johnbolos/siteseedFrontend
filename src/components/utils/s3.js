import S3FileUpload from 'react-s3'
import _ from 'lodash'
import shortid from 'shortid'

const _s3 = {
    uploadFile: (file, s3Dir, cb) => {
        if (!s3Dir) {
            return cb({ error: true })
        }
        const config = {
            bucketName: 'siteseed-dev',
            dirName: s3Dir, /* optional */
            region: 'ap-south-1',
            ACL: "public-read",
            accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        }
        let fileNameTest = file.name.replace(/\.| /gi, '')
        if (!/^[A-Za-z0-9_-]*$/.test(fileNameTest)) {
            return cb({ error: true, message: 'File Name should contain only alphabets, numbers and special charecters ("_", "-")' })
        }
        S3FileUpload.uploadFile(file, config)
            .then(data => {
                if (data.location.includes(' ')) {
                    data.location = data.location.replace(/ /gi, '+')
                }
                return cb({ error: false, data })
            })
            .catch(err => {
                return cb({ error: true, err })
            })
    },
    listFiles: () => {

    },
}

export default _s3




// const client = s3.createClient({
//     maxAsyncS3: 20,     // this is the default
//     s3RetryCount: 3,    // this is the default
//     s3RetryDelay: 1000, // this is the default
//     multipartUploadThreshold: 20971520, // this is the default (20 MB)
//     multipartUploadSize: 15728640, // this is the default (15 MB)
//     s3Options: {
//         accessKeyId: "your s3 key",
//         secretAccessKey: "your s3 secret",
//         // any other options are passed to new AWS.S3()
//         // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
//     },
// });