export default {
    isService: (event) => (event.eventType === 'SyncTrigger' && event.identityId && event.identityPoolId),
    getRecords: () => {},
    supported: false
}