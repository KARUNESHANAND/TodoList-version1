const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = [];

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.get("/", function(req,res){

    let today = new Date();

    let options = {
        hour :"numeric",
        minute : "numeric", 
        second : "numeric",
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    }; 

    let day = (today.toLocaleDateString("en-US", options));
    res.render("list", {listTitle: day, newListItems: items});
});

app.post('/', function(req, res) {
    let item = req.body.newListItems;
    items.push(item);
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
});

