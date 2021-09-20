require("dotenv").config()

const { Pool } = require("pg")

const pol= require('pg').Pool

const pool = new pol({
    user:"postgres",
    password:"qwerty",
    host:"localhost",
    port:5432,
    database:"jwt_database"
})


module.exports={ pool }