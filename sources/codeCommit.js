export default {
    isService: (event) => (event.Records && (event.Records[0].eventSource === 'aws:codecommit')),
    getRecords: () => {},
    supported: false
}