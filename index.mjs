import {log} from './log.mjs';

export const handler = async (event) => {
    log("Log de Execução :" + JSON.stringify(event))  
  
    const response = {
      statusCode: 200,
      body: `<html><body>Dados da req ${JSON.stringify(event)}</html>`,
      headers: {
        "content-type": "text/html"
      }
    };
    

    return response;
  };
  // aws lambda update-function-code --function-name primeiraFunc --zip-file fileb://lambda.zip