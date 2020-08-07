require('dotenv').config();
const express = require('express'),
app = express(),
massive = require('massive'),
session = require('express-session'),
buyCtrl = require('./controllers/buyController'),
sellCtrl = require('./controllers/sellController'),
mainCtrl =  require('./controllers/mainController'),
http = require('http').createServer(app),
io = require('socket.io')(http),
{SERVER_PORT, CONNECTION_STRING, SESSION_SECRET}= process.env;
app.use(express.json());
const path = require('path'); 

app.use(express.static(__dirname + '/../build'));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
}))


app.post('/auth/register', buyCtrl.createUser);
app.post('/auth/login', buyCtrl.loginUser);
app.get('/auth/logout', buyCtrl.logoutUser);

app.post('/auth/register1', sellCtrl.createUser);

app.get('/api/posts', mainCtrl.getAllPosts);
app.get('/api/post', mainCtrl.getPost);
app.post('/api/posts', mainCtrl.createPost);
app.delete('/api/posts/:id', mainCtrl.deletePost);





massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db=>{
    app.set('db', db);
    console.log('db connected');
});
io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('SEND_MESSAGE', function(data){
      io.emit('RECEIVE_MESSAGE', data);
  })

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  
  http.listen(SERVER_PORT, () => {
    console.log('listening on *:3000');
  });
