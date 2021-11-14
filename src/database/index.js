var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'mysql.cmnnc2cjifqj.sa-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'adminadmin',
        database: 'confisped'
    }
});
module.exports = knex
