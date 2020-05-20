export default {
    isService: (event) => (event.requestContext && event.requestContext.elb),
    getRecords: (event) => {
        if (!event) return [];
        const buff = (new Buffer(event.body, 'base64')).toString();
        return JSON.parse(buff || '[]');
    },
    response: (statusCode, body) => {
        return {
            "statusCode": statusCode,
            "statusDescription": `${statusCode} response`,
            "isBase64Encoded": false,
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
    },
    supported: true
}