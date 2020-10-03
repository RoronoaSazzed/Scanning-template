$(document).ready(function(){

	  console.log("W: "+$("#imgContainer").width() + "H: "+$("#imgContainer").height() );

	  var imgX = $("#imgContainer").width() ;
	  var imgY = $("#imgContainer").height() ;

	  $(".scannerIcon").css("background-size", imgX +"px " + imgY + "px");

	  // console.log("Window w: "+ $( window ).width() + "Window h: "+$( window ).height())

	setInterval(function() {
	  var x = $(".scannerIcon").offset();

	  // console.log(x.left , x.top);

	  x.left = x.left + $(".scannerIcon").width()*0.5 -$(".scannerIcon").width();
	  x.top = x.top + $(".scannerIcon").height()*0.5 -$(".scannerIcon").height();

	  // console.log(x.left , x.top);

	  $('.scannerIcon').css('background-position', "-"+ (x.left) +"px -" + (x.top) + "px");

	}, 100);


	//refresh page on browser resize
	// $(window).bind('resize', function(e)
	// {
	//   this.location.reload(false);
	// });
});