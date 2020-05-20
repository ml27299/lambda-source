export default {
    isService: (event) => (event.Records && (event.Records[0].eventSource === 'aws:dynamodb')),
    getRecords: () => {},
    supported: false
}