export default {
    isService: (event) => (event.authorizationToken === "incoming-client-token"),
    getRecords: (event) => { return event.authorizationToken },
    supported: false
};

