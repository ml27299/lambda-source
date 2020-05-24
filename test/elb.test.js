import LambdaSource from "lambda-source";
import assert from "assert";

import event from "../events/elb.json";

describe("elb", function () {
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
    it("should respond with correct format", function (done) {
        try {
            const source = new LambdaSource(event);
            const response = source.respond(200);
            assert.deepStrictEqual(response, {
                statusCode: 200,
                statusDescription: '200 response',
                isBase64Encoded: false,
                headers: {'Content-Type': 'application/json'},
                body: undefined
            });
            done();
        } catch (err) {
            done(err);
        }
    });
});