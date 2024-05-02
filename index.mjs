import {log} from './log.mjs';

export const handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(event),
    };
    log("Log de Execução :" + JSON.stringify(event))

    return response;
  };
  // aws lambda update-function-code --function-name primeiraFunc --zip-file fileb://lambda.zip