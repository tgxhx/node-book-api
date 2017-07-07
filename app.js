/**
 * Created by 12 on 2017/7/3.
 */
const express = require('express')
const app = express()

const query = require('./utils/utils')
// 跨域设置
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})

app.get('/', function (req, res) {
  res.send('hello express')
})

app.get('/book', require('./router/book'))

app.get('/booklist', require('./router/booklist'))

app.get('/titles', require('./router/booktitles'))

app.get('/type', require('./router/type'))

const port = process.env.PORT || 3333

app.listen(3333, () => {
  console.log(`server running @${port}`)
})


/*function pattern(num) {
  for (var i = 0; i < num; i++) {
    let a = `1${'*'.repeat(i)}${i + 1}`
    console.log(i < 1 ? a.replace('11', '1') : a)
  }
}

pattern(10)

function aaa(num) {
  for (var i = 0; i < num; i++) {
    let a = `${'1'.padEnd(i + 1, '*')}${i + 1}`
    console.log(i < 1 ? a.replace('11', '1') : a)
  }
}

function star(tel) {
  return `${tel.substr(0,3)}${'*'.repeat(4)}${tel.substr(7)}`
}*/
