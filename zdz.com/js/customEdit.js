$(document).ready(function(){
	var footerImg = $(".footerImg");
	
	footerImg.on('click',function(){
		var _this = $(this);
		_this.find(".block").css({"display":"block"}).parent().siblings().children(".block").css({"display":"none"})
		_this.find(".none").css({"display":"none"}).parent().siblings().children(".none").css({"display":"block"})
		_this.find("p").css({"color":"#903991"}).parent().siblings().children("p").css({"color":"#333"})
	})
})
	
