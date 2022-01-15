require('dotenv').config()
const AWS = require('aws-sdk')

console.log(`Access key: ${AWS.config.credentials.accessKeyId}`)

console.log(process.env.AWS_SDK_LOAD_CONFIG)

console.log('Region:', AWS.config.region)

// AWS.config.getCredentials((err) => {
//   if (err) console.log(err.stack)

//   else console.log(`Access key: ${AWS.config.credentials.accessKeyId}`)
// })


