var images = 
	[
		"chaussures.png", 
		"sac.png", 
		"psg.png"
	];

var text = {};
text["fr"] = {};
text["fr"]["txt-title"] = "Hanh Phuc Sport - Boutique de sport - My Tho";
text["fr"]["txt-home"] = "Accueil";
text["fr"]["txt-products"] = "Nos produits";
text["fr"]["txt-findus"] = "Nous trouver";
text["fr"]["txt-services"] = "Nos prestations";
text["fr"]["txt-footer"] = "Tel: Mme. Huong: +84.912.219.500 - M. Nghiep: +84.918.477.457	/ 	Email: ngcamhuong@yahoo.com";
text["fr"]["txt-football-content"] = "Maillots, Chaussures, Balles, Brassard, Filet de but, ...";
text["fr"]["txt-accessory-content"] = "Chaussures (de course, danse)<br>Sac de sport, à dos";

text["vn"] = {};
text["vn"]["txt-title"] = "Hạnh Phúc Sport - Cửa hàng TDTT - Mỹ Tho";
text["vn"]["txt-home"] = "Trang chủ";
text["vn"]["txt-products"] = "Sản Phẩm";
text["vn"]["txt-findus"] = "Địa chỉ liên hệ";
text["vn"]["txt-footer"] = "Liên hệ: Hương: +84.912.219.500 - Nghiệp: +84.918.477.457	/ 	Email: ngcamhuong@yahoo.com";
text["vn"]["txt-services"] = "Dịch vụ";
text["vn"]["txt-football"] = "Bóng đá";
text["vn"]["txt-football-content"] = "Áo CLB, Giày, Banh, Lưới<br>Băng đội trưởng Lưới ...";
text["vn"]["txt-fitness"] = "Thể dục bụng";
text["vn"]["txt-fitness-content"] = "Máy tập xoay eo<br>Máy tập tình yêu";
text["vn"]["txt-accessory"] = "Giày,Túi xách thể thao";
text["vn"]["txt-accessory-content"] = "Giày thể thao<br>(thời trang, chạy bộ, múa)<br>Túi xách Ba lô";
text["vn"]["txt-tennis"] = "Quần vợt";
text["vn"]["txt-tennis-content"] = "Áo Quần vợt<br>Vợt<br>Banh";
text["vn"]["txt-body"] = "Tập thể hình";
text["vn"]["txt-body-content"] = "Tạ Tay<br>Kìm bóp tay<br>Giá Treo<br>Ghế đẩy tạ";
text["vn"]["txt-combat"] = "Võ thuật thể lực";
text["vn"]["txt-combat-content"] = "Găng Đấm<br>Bao cát";
text["vn"]["txt-yoga-content"] = "Thảm tập<br>Bóng Yoga";
text["vn"]["txt-badminton"] = "Cầu lông<br>Cầu đá";
text["vn"]["txt-badminton-content"] = "Áo cầu lông<br>Vợt cầu lông<br>Cầu lông, Cầu đá";
text["vn"]["txt-basketball"] = "Bóng rổ";
text["vn"]["txt-basketball-content"] = "Quả bóng rổ<br>Trụ, vành & lưới bóng rổ";
text["vn"]["txt-swim"] = "Bơi lội";
text["vn"]["txt-swim-content"] = "Áo bơi<br>Kính bơi<br>Mũ bơi";
text["vn"]["txt-service"] = "DỊCH VỤ IN ẤN TRÊN MỌI CHẤT LIỆU";
text["vn"]["txt-service-content"] = " Với công nghệ in ÁO BÓNG ĐÁ là hệ thống in sơn (in lụa) chuyên nghiệp, chúng tôi đảm bảo giá cả phải chăng, chất lượng sơn không phai màu. Ngoài ra chúng tôi còn nhận in các sản phẩm với nhiều chất liệu khác với công nghệ IN OFFSET:<br><br>- Bao bì sản phẩm (ni lông, giấy , da , vải) <br>- Danh thiếp, Thiệp cưới, Thiệp mời, Bao thư <br> - Hóa đơn, Vé giữ xe, Vé hội chợ. ";
text["vn"]["txt-address-title"] = " Địa chỉ";
text["vn"]["txt-address"] = "12A1, đường Lý Thường Kiệt, P. 5<br>TP. Mỹ Tho, Tỉnh Tiền Giang";
text["vn"]["txt-phone-title"] = "Điện thoại";

text["en"] = {};


function SetLang(lang)
{
	var firstTime = Object.keys(text["en"]).length == 0;

	var elements = $("[id^=txt]");
	for(var i = 0 ; i < elements.length ; i++)
	{
		var e = elements[i];
		if(text[lang][e.id])
		{
			if(firstTime)
				text["en"][e.id] = e.innerHTML;
			e.innerHTML = text[lang][e.id];
		}
	}

	var links = $("#menu a[href^=#]");
	for(var i = 0 ; i < links.length ; i++)
	{
		var e = links[i];
		var elink = $(e).attr("href").split("#")[1];
		var original = elink.split('-');
		if(original.length > 1)
			original = original[1];
		else
			original = original[0];
		
		$(e).attr("href", "#" + lang + "-" + original);
	}
}

function GetLang()
{
	var lang = ["fr", "en"];

	var tbl = document.location.hash.split("#");
	if(tbl.length < 2) 
		return "vn";

	tbl = tbl[1].split("-");
	
	if(tbl.length < 1)
		return "vn";

	var index = lang.indexOf(tbl[0]);
	if(index >= 0)
		return lang[index];
	else
		return "vn";
}

function GetPage()
{
	var tbl = document.location.hash.split("#");
	if(tbl.length < 2) 
		return "#home";

	tbl = tbl[1].split("-");
	
	if(tbl.length < 1)
		return "#home";

	if($("#" + tbl[tbl.length-1]).length)
		return "#" + tbl[tbl.length-1];
	
	return "#home";
}

// qd la page est chargée("ready"), ça cache les 2 suivants
$( document ).ready(function() 
{	
	SetLang(GetLang());
	
	$("#content").children().hide();
	$("#content").children().css("visibility", "visible");
		
	$(GetPage()).show();
	
	for(var index = 0 ; index < images.length; index++)
	{
		var image = images[index];
		$("div[data-u=slides]").append('<div data-p="225.00" style="display: none;"><img data-u="image" src="'+image+'" /></div>');
	}

	// page ------------------------------------

	$("a[href^=#]").click(function(event) {
		event.preventDefault();
		document.location.hash = $(this).attr("href");
		$("#content").children().fadeOut();

		SetLang(GetLang());
		$(GetPage()).fadeIn();


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
	
	var jssor_1_slider = new $JssorSlider$("home", jssor_1_options);
	
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