$(document).ready(function(){
	var $shareBtn = $(".shareBtn .left");
	var $shareGuide = $(".shareGuide");
	$shareBtn.bind("click",function(){
		Json.mask();
		$shareGuide.show();
	})
})