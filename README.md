# Introduction
AWS Lambda functions are great, but many times developers have many triggers on a single lambda function, this package 
aims to make handling the events from the triggers a lot easier, as well as knowing how to respond when the lambda is done executing

supports >=node@v6.x.x

# Getting Started
```javascript
import LambdaSource from "lambda-source";
exports.handler = (event) =>{
    const source = new LambdaSource(event);
    source.getRecords(); //gets passed in input data from source;
    return source.respond(200); //responds with the correct format depending on the event
}
```