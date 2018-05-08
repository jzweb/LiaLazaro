$(document).ready(function(){


			$("#btnmessage").click(function(){
                
				
					var names = $('#fullname').val();
					var email = $('#email').val();
					var message = $('#message').val();
					console.log("names : " + names+"\nemail: "+email+"\nMessage: "+message);
					var settings = {
						  "async": true,
						  "crossDomain": true,
						  "url": "https://lialazaro.herokuapp.com/mailController",
						  "method": "POST",
						  "headers": {
						    "content-type": "application/x-www-form-urlencoded",
						    "cache-control": "no-cache"
						  },
						  "data": {
						    "names": names,
						    "email": email,
						    "message": message
						  }
						}
					
				    
				    $.ajax(settings).done(function (response) {
					  console.log(response);
					  if(response.status == "202"){
					  		$(".icon-mail").animate({right : '250px'},"slow",function(){
					  			$(".error-message").hide();
					  			$(".success-message").fadeIn();
					  			$(".icon-mail").fadeIn();
					  		});
					  		
			                $('#fullname').val("");
							$('#email').val("");
							$('#message').val("");
					  }else{
					  	   $(".icon-mail").hide();
					  	   $(".success-message").hide();
					  	   $(".error-message").fadeIn();
					  }
					});
				});
	
})
