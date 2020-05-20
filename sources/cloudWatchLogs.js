export default {
    isService: (event) => (event.awslogs && event.awslogs.data),
    getRecords: () => {},
    supported: false
}