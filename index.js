const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const { newUser, verifyUser, getFriends, addRequest, addFriend } = require('./Controlers/user')
const { connector } = require('./connector')
const { verify } = require('./Controlers/verify')
const { auth } = require('./Controlers/Middlewares/auth')
const { addTrip, getTrips, deleteTrip } = require('./Controlers/trip')


const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
connector();


console.log("hello")
app.post('/verify', verify)
app.post("/login", verifyUser)
app.post("/user", newUser)


app.get("/friends", auth, getFriends)
app.get("/friends/:id", auth, addFriend)
app.post("/friends", auth, addRequest)


app.get("/trip", auth, getTrips)
app.post("/trip", auth, addTrip)
app.delete("/trip/:id", auth, deleteTrip)

app.get("/test",(req,res)=>{
    return res.status(200).json("Hello World")
})


app.listen(3000, ()=>{console.log("----------AppStarted-----------");})
