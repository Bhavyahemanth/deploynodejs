const express = require("express")
const app =express()

app.get("/", function(req,res) {
    res.send("It Worked")
});
app.get("/new",function(req, res){
    res.semd("New also worked");
})

app.listen(process.env.PORT || 5000)
module.exports = app