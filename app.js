const express = require('express')
const bodyParser = require('body-parser')  
const UsersModel = require('./model/users')
const { connectDB } = require("./db")
const usersRoute = require('./routes/users')
require("dotenv").config()

const PORT = process.env.PORT || 8000
const app = express() 


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/', usersRoute);

app.get('/', (req, res) => {
  res.render('index', { message: null, error: null });
});

require('./croner');


connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});