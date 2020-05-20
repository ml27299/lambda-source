export default {
    isService: (event) => (event.configRuleId && event.configRuleName && event.configRuleArn),
    getRecords: () => {},
    supported: false
};