var addMode = false;
var remMode = false;

$("#map").click(function(e){
	if(addMode){
	   var parentOffset = $(this).parent().offset(); 
	   //or $(this).offset(); if you really just want the current element's offset
	   var relX = e.pageX - parentOffset.left;
	   var relY = e.pageY - parentOffset.top;
	   console.log(relX + " : " + relY);
	   $("#map").append("<div class='entrance white' style='position:absolute;left: " + (relX+2) + "px; top: " + (relY+2) + "px;'></div>");
	   $(".entrance").off('click');
	   $(".entrance").on('click',function(){
			if(remMode)
				$(this).remove();
			if(!remMode && !addMode)
			{
				if($(this).hasClass("white"))
					$(this).removeClass("white").addClass("yellow");
				else if($(this).hasClass("green"))
					$(this).removeClass("green").addClass("white");
				else if($(this).hasClass("yellow"))
					$(this).removeClass("yellow").addClass("red");
				else if($(this).hasClass("red"))
					$(this).removeClass("red").addClass("green");
			}
		});
	}
});

$("#addButton").click(function(){
	if(addMode)
	{
		$("#addButton").removeClass('on').addClass('off');
		addMode = false;
	}else{
		$("#addButton").removeClass('off').addClass('on');
		addMode = true;
		remMode = false;
		$("#remButton").removeClass('on').addClass('off');
	}
	
});

$("#remButton").click(function(){
	if(remMode)
	{
		$("#remButton").removeClass('on').addClass('off');
		remMode = false;
	}else{
		$("#remButton").removeClass('off').addClass('on');
		remMode = true;
		addMode = false;
		$("#addButton").removeClass('on').addClass('off');
	}
	
});

$(document).ready(function(){ 
	if(addMode)
	{	
		$("#addButton").removeClass('off').addClass('on');
	}
	if(remMode)
	{	
		$("#addButton").removeClass('off').addClass('on');
		addMode = false;
	}
	$(".entrance").off('click');
   $(".entrance").on('click',function(){
		if(remMode)
			$(this).remove();
		if(!remMode && !addMode)
		{
			if($(this).hasClass("white"))
				$(this).removeClass("white").addClass("yellow");
			else if($(this).hasClass("green"))
				$(this).removeClass("green").addClass("white");
			else if($(this).hasClass("yellow"))
				$(this).removeClass("yellow").addClass("red");
			else if($(this).hasClass("red"))
				$(this).removeClass("red").addClass("green");
		}
	});
});


	

