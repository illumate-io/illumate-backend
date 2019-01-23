require('require-sql');
const { Client } = require('pg');
const testdataUser = require('./testdata/testdata_users.sql');

console.log(testdataUser)

// const pool = new Pool({
//   database: 'illumatedb',
//   username: 'illumateuser',
//   password: 'ill$umate!',
//   host: 'localhost',
//   dialect: 'postgres',
// })
//
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
const client = new Client({
  database: 'illumatedb',
  username: 'illumateuser',
  password: 'ill$umate!',
  host: 'localhost',
  dialect: 'postgres',
});
client.connect();

client.query(testdataUser, (err, res) => {
  console.log(err, res);
  client.end();
});
