import LambdaSource from "lambda-source";
import assert from "assert";

import event from "../events/sqs.json";

describe("sqs", function () {
    it("should get records", function (done) {
        try {
            const source = new LambdaSource(event);
            const records = source.getRecords();
            assert.deepStrictEqual(records, [
                {
                    index: 'providersserviceconfigurations',
                    data: {_id: '5dcaf4e5b01cab0010aa0caa'}
                }
            ]);
            done();
        } catch (err) {
            done(err);
        }
    });
});