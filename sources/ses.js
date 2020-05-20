export default {
    isService: (event) => (event.Records && (event.Records[0].eventSource === 'aws:ses')),
    getRecords: () => {},
    supported: false
}