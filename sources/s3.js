export default {
    isService: (event) => (event.Records && event.Records[0].eventSource === 'aws:s3'),
    getRecords: () => {},
    supported: false
}