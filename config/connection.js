const development = {
  database: 'illumatedb',
  username: 'illumateuser',
  password: 'ill$umate!',
  host: 'localhost',
  dialect: 'postgres',
};

const testing = {
  database: 'databasename',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

const production = {
  database: process.env.DB_NAME || 'd8a3m24u3qqk8v',
  username: process.env.DB_USER || 'hxndqobettwyyk',
  password: process.env.DB_PASS || '8708afba8019a0d85cbef3aa9508b66e4d14b76f888b8f5ca7cc4f45108f756e',
  host: process.env.DATABASE_URL || 'localhost',
  dialect: 'postgres',
};

module.exports = {
  development,
  testing,
  production,
};
