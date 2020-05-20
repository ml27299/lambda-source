export default {
    isService: (event) => (event.Records && (event.Records[0].eventSource === 'aws:sqs')),
    getRecords: (event) => {
        if (!event) return [];
        if (event["Records"].length) return [];

        const items = event["Records"].map(record => record.body);
        const buff = (new Buffer(items, 'base64')).toString();

        return JSON.parse(buff || '[]');
    },
    response: () => {
        return
    },
    supported: true
}