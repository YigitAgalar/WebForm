//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res)
{
var ad = req.body.AD;
var soyad = req.body.SOYAD;
var tarih = req.body.TARIH;
var telefon = req.body.Telefon;
var kanal = req.body.KANAL;
var not = req.body.NotAlanı;
console.log(ad , soyad , tarih , telefon , kanal , not );

});







app.listen(3000,function(){

  console.log("This server is running on port 3000");

});
