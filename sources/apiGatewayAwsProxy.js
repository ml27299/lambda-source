export default {

    isService: (event) => {
        if (event.pathParameters && event.pathParameters.proxy) return true;
        if (event.isOffline && event.headers) return true;
    },

    getRecords: (event) => {
        const buff = (new Buffer(event.body, 'base64')).toString();
        return JSON.parse(buff || '[]');
    },

    response: (statusCode, body) => ({
        "statusCode": statusCode,
        "body": JSON.stringify(body),
        "headers": {
            "Content-Type": "application/json; charset=utf-8"
        }
    }),

    supported: true
};