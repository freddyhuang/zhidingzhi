$(function(){
	var mobile = $('#header .tel .mobile');
	$("#header .tel").bind('click',function(){
		fixedcenterGetposition();
		mobile.fadeIn(500,function(){
			$("#header .tel .mobile .close").bind('click',function(){
				mobile.fadeOut(500);
				return false;
			});
		});
	});
	function fixedcenterGetposition(){
		var w = $(window).width();
		var h = $(window).height();
		var left = (w/2) - parseInt(mobile.css("width"))/2;
		var top = (h/2) - parseInt(mobile.css("height"))/2;
		mobile.css({"left":(left) + "px", "top": (top) + "px" });
	}
});
