$(document).ready(function(){
	var $shareBtn = $(".shareBtn .left");
	var $shareGuide = $(".mask");
	$shareBtn.bind("click",function(){
		$shareGuide.show();
	})
	$(document).on("click",'.mask',function(){
		$(this).fadeOut();
	})
	$(".bg").css({'height':$(document).height()+'px'})//动态设置瓶子的高度
})