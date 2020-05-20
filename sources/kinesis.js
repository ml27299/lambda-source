export default {
    isService: (event) => (event.Records && event.Records[0].eventSource === 'aws:kinesis'),
    getRecords: (event) => {
        if (!event) return [];
        if (event["Records"].length) return [];

        const items = event["Records"].map(record => record["kinesis"].data);
        const buff = (new Buffer(items, 'base64')).toString();

        return JSON.parse(buff || '[]');
    },
    response: () => {
        return
    },
    supported: true
}