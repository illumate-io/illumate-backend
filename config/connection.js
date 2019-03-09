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
  database: process.env.DB_NAME || 'dfbpodq70o6snb',
  username: process.env.DB_USER || 'thexvmbeikljbh',
  password: process.env.DB_PASS || '15e82b041b5a2440222f336efa5ed685f98bcb28cf09aae2b1c01cba70090537',
  host: process.env.DATABASE_URL || 'localhost',
  dialect: 'postgres',
};

module.exports = {
  development,
  testing,
  production,
};
