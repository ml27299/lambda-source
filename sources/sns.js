export default {
    isService: (event) => (event.Records && (event.Records[0].EventSource === 'aws:sns')),
    getRecords: () => {},
    supported: false
}