export default {
    isService: (event) => {
        if (event.records && event.deliveryStreamArn && event.deliveryStreamArn.startsWith('arn:aws:kinesis:')) return true
    },
    getRecords: () => {},
    supported: false
}