const knex = require('knex');
// IMPORT DB CONFIGURATIONS
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;