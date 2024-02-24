const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', express.static(__dirname + "/public"))
app.set('view engine', 'ejs');

items = ["Eat", "Code", "Read", "Sleep"];
workItems = [];

const port = 3000;

app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
})


app.get("/", function(req, res){
    let day = date.getDate(); // Date
    // let day = date.getDay(); -- Day

    res.render('list', {
        listTitle: day, 
        newListItems: items});
});

app.post("/", function(req, res) {
    var newItem = req.body.newItem;
    if(req.body.list === "Work") {
        workItems.push(newItem);
        res.redirect("/work");
    } else {
        items.push(newItem);
        res.redirect("/");
    }
});


app.get("/work", function(req, res) {
    res.render('list', 
    {
        listTitle: "Work List", 
        newListItems: workItems
    });
});
