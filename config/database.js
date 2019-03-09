const Sequelize = require('sequelize');
const path = require('path');

const connection = require('./connection');

let database;

switch (process.env.NODE_ENV) {
  case 'production':
    database = new Sequelize(
      'postgres://hxndqobettwyyk:8708afba8019a0d85cbef3aa9508b66e4d14b76f888b8f5ca7cc4f45108f756e@ec2-107-20-185-27.compute-1.amazonaws.com:5432/d8a3m24u3qqk8v',
      null,
      null,
      {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
          ssl: true,
        },
        logging: true, // false
      },
    );
    //   // connection.production.database,
    //   // connection.production.username,
    //   // connection.production.password, {
    //   //   host: connection.production.host,
    //   //   dialect: connection.production.dialect,
    //   //   pool: {
    //   //     max: 5,
    //   //     min: 0,
    //   //     idle: 10000,
    //   //   },
    //   // },
    // );
    break;
  case 'testing':
    database = new Sequelize(
      connection.testing.database,
      connection.testing.username,
      connection.testing.password, {
        host: connection.testing.host,
        dialect: connection.testing.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      },
    );
    break;
  default:
    database = new Sequelize(
      connection.development.database,
      connection.development.username,
      connection.development.password, {
        host: connection.development.host,
        dialect: connection.development.dialect,
        // logging: false,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        storage: path.join(process.cwd(), 'db', 'database.sqlite'),
      },
    );
}

module.exports = database;
