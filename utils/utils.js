/**
 * Created by 12 on 2017/7/3.
 */
let mysql = require('mysql')
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '460520',
  database: 'book',
  port: 3306
})

const query = function (sql, option, callback) {
  pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query(sql, option, function (error, results, fields) {
      // And done with the connection.
      connection.release()

      // Handle error after the release.
      if (error) throw error
      callback(err, results, fields)
      // Don't use the connection here, it has been returned to the pool.
    })
  })
}

module.exports = query