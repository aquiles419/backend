var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'admin',
        password: 'adminadmin',
        database: 'confisped'
    }
});
module.exports = knex
