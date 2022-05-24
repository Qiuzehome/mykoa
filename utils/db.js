const mysql = require('mysql')

const pool = mysql.createPool({
    host:'localhost',
    port:3000,
    database:'koa',
    user:'root',
    password:'12345678'
})
