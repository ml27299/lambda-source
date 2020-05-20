export default {
    isService: (event) => (event.source === 'aws.events'),
    getRecords: () => {},
    supported: false
}