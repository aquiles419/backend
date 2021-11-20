var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.RDS_HOSTNAME || 'localhost',
        user: process.env.RDS_USERNAME || 'admin',
        password: process.env.RDS_PASSWORD || '',
        database: process.env.RDS_DB_NAME || 'confisped'
    }
});
module.exports = knex
