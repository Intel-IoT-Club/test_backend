const express = require("express")
const cors = require("cors")


const app = express();
app.use(cors())
app.listen(5000,()=>{
    console.log("The backend live on port 5000");
})