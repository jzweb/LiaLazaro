$(document).ready(function(){
	var checkName = false;
	var checkEmail = false;
	var checkMessage = false;

  $('#btnmessage').css('opacity','0.3');
  $('#btnmessage').css('cursor','no-drop');

        function checkButton(){
          if($('#btnmessage').is(':disabled')){
                $('#btnmessage').css('opacity','0.3');
                $('#btnmessage').css('cursor','no-drop');
          }else{
            $('#btnmessage').css('opacity','1');
            $('#btnmessage').css('cursor','pointer');
          }
        }

	//Open and close the Form Message
	$('.btn-message').click(function(){
		$('#popbox').fadeIn();
    $('.contenedor').css('opacity','0.3');
    $('.brand').hide();
    
    if($(window).width() > 375){
      $('.menu').hide();
    }
    
    
	});

	$('#exit-icon').click(function(){
	  $('#popbox').fadeOut();
    $('.contenedor').css('opacity','1');
    $('.brand').show();
    if($(window).width() > 679){
      $('.menu').show();
    }
    
	});
    
    //Filters and process to Send the message
    //Check names
    $("#fullname").keypress(function(){
       var names = $('#fullname').val();
       var list = names.split(/[ ,]+/);
       var name = list[0];
       var lastname = list[1];
       var regex = new RegExp(/^[a-zA-Z\s]+$/);
     
        if (regex.test(name) && regex.test(lastname)) {
           // $('#btnmessage').prop('disabled', false);
           checkName = true;
        }else{checkName = false;}
        checkToEend();
	});
   //check mail
	$("#email").keypress(function(){
       var email = $('#email').val();
       var regex = new RegExp(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
     
        if (regex.test(email)) {
            checkEmail = true;
        }else{checkEmail = false;}
        checkToEend();
	});
	//check message
	$("#message").keypress(function(){
       var message = $('#message').val();
       if (message!="") {
            checkMessage = true;
        }else{checkMessage = false;}
        checkToEend();
	});
    
    function checkToEend(){
    	if(checkName && checkEmail && checkMessage){
    		$('#btnmessage').prop('disabled', false);
        checkButton();
    	}else{
    			$('#btnmessage').prop('disabled', true);
          checkButton();
    	}
    }



       
 

});