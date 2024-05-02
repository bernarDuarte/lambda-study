import {log} from './log.mjs';
import { S3 } from '@aws-sdk/client-s3'

const s3client = new S3({region: 'us-east-1'})

export const handler = async (event) => {
    const record = event.Records[0];
    const Bucket = record.s3.bucket.name;
    const Key = record.s3.object.key;
    const getObjectResult = await s3client.getObject({
        Bucket,
        Key
    })
     const mega_byte = 1024 * 1024
     if(getObjectResult.ContentLength > 1* mega_byte){
        log('Objeto Muito Grande')
        return 'Objeto Muito Grande'
     } else{
      log('Objeto Muito Grande')
      return 'Objeto Muito Grande'
     }
  };
  // aws lambda update-function-code --function-name primeiraFunc --zip-file fileb://lambda.zip