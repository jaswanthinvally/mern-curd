const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./modles/User')

const app = express()
const port = 7000

mongoose.connect("mongodb://localhost:27017/curd-app")

app.post("/createuser", (req,res)=> {
    UserModel.create(req.body)
    .then(user => res.json(user) )
    .catch(err => console.log(err))

})

app.use(cors())
app.use(express.json())



app.listen(port, ()=> {
    console.log(`port conneted to ${port}`)
} )