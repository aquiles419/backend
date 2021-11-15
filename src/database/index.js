var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'admin',
        password: '',
        database: 'confisped'
    }
});
module.exports = knex
