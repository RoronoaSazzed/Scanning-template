$(document).ready(function(){

	  var imgX = $("#imgContainer").width() ;
	  var imgY = $("#imgContainer").height() ;

	  $(".scannerIcon").css("background-size", imgX +"px " + imgY + "px");

	  // console.log("Window w: "+ $( window ).width() + "Window h: "+$( window ).height())

	setInterval(function() {
	  var x = $(".scannerIcon").offset();

	  // console.log(x.left , x.top);

	  x.left = (x.left + $(".scannerIcon").width()*0.5 -$(".scannerIcon").width()*1.35) ;
	  x.top = (x.top + $(".scannerIcon").height()*0.5 -$(".scannerIcon").height() * 1.35);

	  if( $( window ).width() <=600 )
	  {
	  	x.left = (x.left + $(".scannerIcon").width()*0.5 -$(".scannerIcon").width()*2) ;
	  	x.top = (x.top + $(".scannerIcon").height()*0.5 -$(".scannerIcon").height() * 2);
	  }

	  if (x.left < 0)
	  {
	  	x.left = 0 ;
	  }
	  if (x.top < 0 )
	  {
	  	x.top = 0;
	  }

	  // console.log(x.left , x.top);

	  // $('.scannerIcon').css('background-position', "-"+ (0) +"px -" + (0) + "px");
	  $('.scannerIcon').css('background-position', "-"+ (x.left) +"px -" + (x.top) + "px");

	}, 100);


	$(window).bind('resize', function(e)
	{
	  this.location.reload(false);
	});
});