const express = require('express')
const {mongodbconnect} = require('./connect')
const Url = require('./models/url')
const path = require('path')
const cookieParser = require('cookie-parser')
const {checkAuthentication,restrictTo} = require('./middlewares/user')


const urlrouter = require('./routes/url')
const staticRouter = require('./routes/staticRoute')
const userRouter = require('./routes/user')

const app = express()
PORT = 8001

mongodbconnect('mongodb://localhost:27017/url')

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended : false}))
app.set("view engine","ejs")
app.set("views", path.resolve('./views'))
app.use(checkAuthentication)




app.use("/url",restrictTo(['NORMAL','ADMIN']),urlrouter)
app.use("/",staticRouter)
app.use("/user",userRouter)

app.listen(PORT,()=> console.log("server started"))