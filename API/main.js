const express = require("express");
const path = require('path');
var bodyParser = require('body-parser');
const api = require('./server/api');
const MongoStore = require('connect-mongo'); ///for session store
const cookieParser = require('cookie-parser');
const session = require('express-session');
//const {authorize}=require('./authentication.js')
const passport = require('passport');
require('./server/strategies/local');
//require('./server/strategies/google');
require('dotenv').config({path:'./.env'});


const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const DBUSER="zahir"
const DBPASS="19061990"

const mongodbUrl=`mongodb+srv://${DBUSER}:${DBPASS}@e-commerce.bdlybev.mongodb.net/?retryWrites=true&w=majority`

app.use(cookieParser());

app.use(
  session({
    secret: 'APODAJDSDASMCZXMZADASDASDPASDOASDSAK',               //the secret we can put any random shit
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: mongodbUrl,   //session store so that when server restarts the session does not get reset
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());    //for login and to create session upon login and also checks if user is authenticated to access the other APIs

app.use(function(req, res, next) {

  


  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', api());



/* Enforce https
app.use(function(req, res, next) {
    if(req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] === "http") {
        res.redirect("https://" + req.headers.host + req.url);
    } else {
        next();
    }
});*/

module.exports = {app};
