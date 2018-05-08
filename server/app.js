var express = require('express');
var bodyParser = require('body-parser');
var util = require('./utilities.js');
var cors = require('cors');
var app = express();
app.use(cors()); 
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/',function(req,res){
      res.send("HEllO");
})

app.post('/mailController',function(req,res){
       var names = req.body.names;
       var email = req.body.email;
       var message = req.body.message;

       var listnames  = names.split(" ");
       firstName =  listnames[0];
       lastName =  listnames[1];

       if(util.checkVariable(firstName) && util.checkVariable(lastName) && util.checkVariable(email) && util.checkVariable(message)){
       		var fullName = firstName + lastName;
                  util.sendEmail(fullName,email,message);
                  util.saveClient(firstName,lastName,email);
                  res.json({"status":"202"});

       }else{
       	res.json({"status":"500","message":"Some of de fields are not fill correct"});
       }

       
})

app.listen(process.env.PORT || 3000);