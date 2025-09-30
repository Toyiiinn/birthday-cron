const express = require('express')
const UsersModel = require('./model/users')
const { connectDB } = require("./db")
const usersRoute = require('./routes/users')
require("dotenv").config()

const PORT = process.env.PORT || 8000
const app = express()


app.set('view engine', 'ejs')
app.set('views', './views')


app.use('/', usersRoute);


app.get('/', (req, res) => {
  res.render('index', { message: null, error: null });
});

require('./croner');

// Connect to database and start server
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});