
const {Cache} = require("./index");

class NullCache extends Cache {
    /** @inheritdoc */
    async get(key) {
        return null;
    };

    /** @inheritdoc */
    async set(key, value, ttl = null) {};
}

module.exports = {NullCache};
