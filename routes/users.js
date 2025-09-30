const express = require("express")
const UsersModel = require("../model/users")

const usersRoute = express.Router()

usersRoute.post("/", (req, res) => { 
    const user = {
        ...req.body,
    }
    console.log(user)
    
    UsersModel.create(user)
     .then((user) => {
            res.render('index', {
                message: "User registered successfully!",
                error: null 
            })
        }).catch((err)=> {
            res.render('index', {
                message: null,
                error: err.message

            })
})
})

module.exports = usersRoute