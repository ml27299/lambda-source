export default {
    isService: (event) => {
        if (event.records && event.records[0].approximateArrivalTimestamp) return true
    },
    getRecords: () => {},
    supported: false
}