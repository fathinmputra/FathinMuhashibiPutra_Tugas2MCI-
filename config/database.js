// const {DATABASE_NAME } = process.env;
module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "db_schbst",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "1k9XzeLeofJkXSA1LtgE",
    "database": "railway",
    "host": "containers-us-west-204.railway.app",
    "dialect": "mysql",
    "port": 5954
  }
}
