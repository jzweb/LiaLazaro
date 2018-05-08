

$(document).ready(function(){
    

    $('.icon-menu').click(function(){
    	//$('.icon-menu').hide();
    	/*$('.contenedor').css("margin-left","-50%");*/
    	$('.contenedor').animate({'margin-left' : '-50%'},700,function(){
				$('.icon-menu').hide();
				$('.small-device-menu').fadeIn();
				$('.icon-hidemenu').fadeIn();
		});
        

	});

	$('.icon-hidemenu').click(function(){
    	//$('.icon-menu').hide();
    	/*$('.contenedor').css("margin-left","-50%");*/
    	$('.contenedor').animate({'margin-left' : '0%'},700,function(){
				$('.icon-menu').show();
				$('.small-device-menu').fadeOut();
				$('.icon-hidemenu').fadeOut();
		});
        

	});

	$('.carousel').carousel({
		interval: 3000,
		
	  });
	  


});