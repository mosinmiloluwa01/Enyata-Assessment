import dotenv from 'dotenv';

dotenv.config();
module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL_DEVELOPMENT',
    url: process.env.DATABASE_URL_DEVELOPMENT,
    dialect: 'postgres',
    logging: false
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  }
};
