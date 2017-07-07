/**
 * Created by 12 on 2017/7/4.
 */
var mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '460520',
  database: 'book',
  port: 3306
})

for (var i = 1; i <= 200; i++) {
  (function (i) {
    var sql = `
      CREATE TABLE IF NOT EXISTS \`book${i}\`(
      \`id\` decimal(10,0) NOT NULL,
      \`err\` decimal(3,0) DEFAULT NULL,
      \`bookName\` varchar(100) DEFAULT NULL,
      \`title\` varchar(100) DEFAULT NULL,
      \`content\` mediumtext,
      PRIMARY KEY (\`id\`)
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8;
    `
    pool.query(sql, function (error, results, fields) {
      // And done with the connection.
      console.log('create ' + i + ' success!')
      // Handle error after the release.
      if (error) throw error
      // Don't use the connection here, it has been returned to the pool.
    })
  })(i)
}
