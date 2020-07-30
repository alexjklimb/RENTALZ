require('dotenv').config();
const express = require('express'),
massive = require('massive'),
session = require('express-session'),
buyCtrl = require('./controllers/buyController'),
sellCtrl = require('./controllers/sellController'),
mainCtrl =  require('./controllers/mainController'),
{SERVER_PORT, CONNECTION_STRING, SESSION_SECRET}= process.env,
app = express();
app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
}))


app.post('/auth/register', buyCtrl.createUser);
app.post('/auth/login', buyCtrl.loginUser);
app.get('/auth/logout', buyCtrl.logoutUser);




massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db=>{
    app.set('db', db);
    console.log('db connected');
});

app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`))