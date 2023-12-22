const express = require('express');
const connect = require('./Connection');
const authRoute = require('./Routers/authRouter');
const cors = require('cors');

const app = express();

const port = 4000;

// app.get('/get',(req,res)=>{
//     res.send({messaage:"true"})
// })

// middleware..........
app.use(express.json());
app.use(cors());

app.use(authRoute)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    connect()
})