import sources from "./sources";

export const required = (param) => throw (new Error(`Missing parameter: ${param}`));

class EventSource {

    source;
    event;

    constructor(event = required`event`) {
        this.event = event;
        for (const key in sources) {
            if (sources.hasOwnProperty(key) === false) continue;
            if (!sources[key].isService(event)) continue;
            if (!sources[key].supported) throw Error(`${key} is not supported at this time, write an implementation or ask mac`);
            this.source = sources[key];
            break;
        }
    }

    getRecords() {
        return this.source.getRecords(this.event);
    }

    respond(...args) {
        return this.source.response(...args);
    }
}

export default EventSource;