const express=require("express");
const app=express();
const path=require("path");

let port=8080;
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen(port,() =>{
    console.log(`SERVER is listening on port:${port}`);
});

app.get("/",(req,res)=>{
    res.render("hello.ejs");
});

app.get("/:username",(req,res)=>{
    let {username}=req.params;
    console.log(username);
    res.send(`<h1>Welcome to the page of ${username} </h1>`)
});

app.get("/search",(req,res)=>{
    res.send("Success");
});

// const express = require('express');
// const app = express();
// const path = require('path');
// const PORT = 8080;

// // Without middleware
// app.get('/', function (req, res) {
// 	const options = {
// 		root: path.join("./practice")
// 	};

// 	const fileName = 'irctc.html';
// 	res.sendFile(fileName, options, function (err) {
// 		if (err) {
// 			console.error('Error sending file:', err);
// 		} else {
// 			console.log('Sent:', fileName);
// 		}
// 	});
// });

// app.listen(PORT, function (err) {
// 	if (err) console.error(err);
// 	console.log("Server listening on PORT", PORT);
// });
