const Sequelize = require('sequelize');
const path = require('path');

const connection = require('./connection');

var database;  // eslint-disable-line

switch (process.env.NODE_ENV) {
  case 'production':
    database = new Sequelize('postgres://thexvmbeikljbh:15e82b041b5a2440222f336efa5ed685f98bcb28cf09aae2b1c01cba70090537@ec2-54-197-232-203.compute-1.amazonaws.com:5432/dfbpodq70o6snb')
    //   null,
    //   {
    //     dialect: 'postgres',
    //     protocol: 'postgres',
    //     dialectOptions: {
    //       ssl: true,
    //     },
    //     logging: true, // false
    //   },
    // // );
    console.log({
      database: connection.production.database,
      username: connection.production.username,
      password: connection.production.password,
      host: connection.production.host,
      dialect: connection.production.dialect,
    });
    // database = new Sequelize(
    //   connection.production.database,
    //   connection.production.username,
    //   connection.production.password, {
    //     host: connection.production.host,
    //     dialect: connection.production.dialect,
    //     pool: {
    //       max: 5,
    //       min: 0,
    //       idle: 10000,
    //     },
    //   },
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
    // database = new Sequelize(
    //   connection.development.database,
    //   connection.development.username,
    //   connection.development.password, {
    //     host: connection.development.host,
    //     dialect: connection.development.dialect,
    //     // logging: false,
    //     pool: {
    //       max: 5,
    //       min: 0,
    //       idle: 10000,
    //     },
    //     storage: path.join(process.cwd(), 'db', 'database.sqlite'),
    //   },
    // );
    database = new Sequelize(
      connection.production.database,
      connection.production.username,
      connection.production.password, {
        host: connection.production.host,
        dialect: connection.production.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      },
    );
}

module.exports = database;
