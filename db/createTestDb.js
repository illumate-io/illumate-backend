require('require-sql');
const { Client } = require('pg');
const dropTables = require('./drop_tables.sql');
const testdataUser = require('./testdata/testdata_users.sql');

const env = process.env.NODE_ENV || 'development';

const getConfig = () => ({
  development: {
    username: 'illumateuser',
    database: 'illumatedb',
    password: 'ill$umate!',
    host: 'localhost',
    dialect: 'postgres',
  },
  test: {
    username: 'illumateuser',
    database: 'illumatedb',
    password: 'ill$umate!',
    host: 'localhost',
    dialect: 'postgres',
  },
}[env]);

const queryList = [
  // dropTables,
  // Test data
  testdataUser,
].join('\n')

const client = new Client(getConfig());
client.connect();

client.query(queryList, (err, res) => {
  console.log(err, res);
  client.end();
});
