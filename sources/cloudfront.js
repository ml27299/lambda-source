export default {
    isService: (event) => (event.Records && event.Records[0].cf),
    getRecords: () => {},
    supported: false
}