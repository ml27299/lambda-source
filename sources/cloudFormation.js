export default {
    isService: (event) => (event.StackId && event.RequestType && event.ResourceType),
    getRecords: () => {},
    supported: false
};