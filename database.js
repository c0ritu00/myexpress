const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'netuser',
  password: 'opiskelija',
  database: 'netdb'
});
module.exports = connection;