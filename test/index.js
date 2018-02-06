'use strict';

const {
  StorageProvider,
  MessageTransport,
  Logger,
} = require('../build');
// console.log(common);

const logger = new Logger();
logger.info('test');

// let transport = new MessageTransport('test-jal', true);
// transport.publish({ jal: 'test' }, { attr1: '1', attr2: '2' })
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((err) => {
//     console.error(err);
//     console.log(err.code, err.message, err.details);
//   });

// let storage = new StorageProvider({
//   // "forBigQuery": true,
//   "bucketName": "now-ims-core-dev_bigquery-staging"
// });

// storage.save('test_jal/jal.txt', 'hey')
//   .then((resp)=>{
//     console.log(resp);
//   })
//   .catch((err)=>console.error(err));
