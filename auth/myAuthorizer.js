const knexFile = require("../knexfile").development;
const knex = require("knex")(knexFile);

function myAuthorizer() {
    return async (username, password, cb) => {
        const data = await knex("users")
            .where({ username, password })
            .first();

        return data ? cb(null, true) : cb(null, false);
    }
}

module.exports = myAuthorizer;