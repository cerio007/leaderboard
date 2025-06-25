const express = require(`express`);
const dotenv = require(`dotenv`);
const session = require(`express-session`);
const passport = require(`passport`);
const GoogleStrategy = require(`passport-google-oauth20`).Strategy;
// const cron = require(`node-cron`);
// const nodemailer = require(`nodemailer`);
const dbconnect = require(`./config/dbconnect`);
// const redisClient = require(`./config/redisconnect`);
const app = express();

// Database Connection
dbconnect();

dotenv.config();
// Middlewares
app.use(express.json());

// Routes

app.listen(process.env.PORT, () =>
  console.log(`Connected to server on PORT : ${process.env.PORT}`)
);
