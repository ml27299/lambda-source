const log = require('debug')("lambdasource:sqs");

export default {
    isService: ({Records} = {}) => (Records && (Records[0].eventSource === 'aws:sqs')),
    getRecords: (event) => {
        log(event);
        if (!event) return [];
        if (event["Records"].length === 0) return [];
        return event["Records"].map(record => JSON.parse((new Buffer(record.body, 'base64')).toString()));
    },
    response: () => {
        return;
    },
    supported: true
}