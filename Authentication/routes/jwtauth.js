const LocalStrategy = require('passport-local').Strategy
const { pool } = require('../config/db')
const bcrypt = require('bcrypt')

function initialize (passport){
    const email_things = (cardnumber,done)=>{
        pool.query(
            `SELECT * FROM user_things WHERE email = $1`,[email],
            (err,results)=>{
                if (err){
                    throw err
                }
                console.log(results.rows)
                return done(null,false,{message:"Login Sucessfully"})
            })}
            
        passport.use(
            new LocalStrategy({
                emailField:"email",
            },
            email_things
            )
        )
        passport.serializeUser((userEmail,done)=>done(null,userEmail.id))
    
        passport.deserializeUser((id,done)=>{
            pool.query(
                `SELECT * FROM user_things WHERE id = $1`,[id],
                (err,results)=>{
                    if(err){
                        throw err
                    }
                }
            )
        })
    }
module.exports = initialize