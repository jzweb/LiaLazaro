
var sg = require('sendgrid')(process.env.LIAMAIL);
var helper = require('sendgrid').mail;
var mongoose = require('mongoose');
var clientSchema = require('./schemas/schemaModel.js');

module.exports = {

  checkVariable: function(variable){
	var check = false;
	if(variable!=""){
		check = true;
	}
	return check;
  },
  sendEmail: function(name,email,message){
        var x;
  		var fromEmail = new helper.Email(email);
	    var toEmail = new helper.Email('info@lialazaro.com');
	    var subject = "Consultations from website";
	    var content = new helper.Content('text/html', '<h1>Message from LIA LAZARO Website</h1><p>'+message+'<br><br>De: '+name+'</p>');
	    var mail = new helper.Mail(fromEmail, subject, toEmail, content);
	    var request = sg.emptyRequest({
	        method: 'POST',
	        path: '/v3/mail/send',
	        body: mail.toJSON()
	    });
        

		sg.API(request, function(error, response) {
		    
		    if (error) {
		        console.log('Error response received');
		        
		        
		    }
		    console.log(response.statusCode);
		    console.log(response.body);
		    console.log(response.headers);

		});
		
  },
  saveClient: function(entryname, entrylastname, entryemail){
		  	var mongoDB = process.env.URLDB;
			mongoose.connect(mongoDB);
			

			var newClient = {
							  name: entryname,
							  lastname: entrylastname,
							  email: entryemail
			}

			var clientModel = new clientSchema(newClient);
			clientModel.save(

				function (err) {
			        if (err) { 
			            console.log("ERROR"+err);
			        }
			        else {
			            console.log("Save it");
			        }
		    });
		    
  }

};