// qd la page est chargée("ready"), ça cache les 2 suivants
$( document ).ready(function() {	

	$("#content").children().hide();
	$("#content").children().css("visibility", "visible");
		
	if($(document.location.hash).length)
		$(document.location.hash).show();
	else
		$("#jssor_1").show();
	
});

// page ------------------------------------

$("a[href^=#]").click(function(event) {
	event.preventDefault();
	document.location.hash = $(this).attr("href");
	$("#content").children().fadeOut();
	$($(this).attr("href")).fadeIn();

	// if responsive, hide menu
	if($("#menu-icon").css("width") != "0px") {
		$("#menu ul").fadeOut();
	}
});

// burger menu -------------------------------

$("#menu-icon").click(function() {
	// 1st time 
	if($("#menu ul").css("display") == "none")
		$("#menu ul").css("display", "inline-block");
	else
		$("#menu ul").fadeToggle();
});
			

$(window).resize(function() 
{
	if($("#menu-icon").css("width") == "0px") {
		$("#menu ul").fadeIn();
	}
	else {
		$("#menu ul").hide();
	}
});

// slider --------------------------------------

jQuery(document).ready(function ($) 
{
	var jssor_1_options = {
	  $AutoPlay: true,
	  $SlideDuration: 500,
	  $Idle: 1500,
	  $SlideEasing: $Jease$.$OutQuint,
	  $ArrowNavigatorOptions: {
		$Class: $JssorArrowNavigator$
	  },
	  $BulletNavigatorOptions: {
		$Class: $JssorBulletNavigator$
	  }
	};
	
	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
	
	//responsive code begin
	//you can remove responsive code if you don't want the slider scales while window resizes
	function GetSize(id)
	{
		var pattern = new RegExp("[0-9]+"); // see http://www.w3schools.com/jsref/jsref_obj_regexp.asp
		var result = pattern.exec($(id).css("width"));
		return result;
	}
	
	function ScaleSlider() {
		//var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;				
		var refSize = 
			GetSize("#sous_container") 
			- 100;

		if($("#menu-icon").css("width") == "0px") {
			refSize -=  GetSize("#menu");
		}	
		
		if (refSize) 
		{
			refSize = refSize * .7;
			jssor_1_slider.$ScaleWidth(refSize);
		}
		else {
			window.setTimeout(ScaleSlider, 30);
		}
	}
	ScaleSlider();
	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
	//responsive code end
});