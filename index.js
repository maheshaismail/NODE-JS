const express = require("express")

const app = express();

app.get("/test", (req, res) => {
    console.log(res);
    
    console.log("hello world");
    res.send("test")
    
}) ;
app.listen(3000);