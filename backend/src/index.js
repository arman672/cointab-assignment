const express = require("express")
const app = express()
const router = require("./routes/route")
var cors = require('cors')

//require("./sqlConnection")
app.use(cors())

app.use(express.json())

app.use(router);

app.listen(process.env.PORT || 3001, ()=>{
    console.log("running on 3001")
})