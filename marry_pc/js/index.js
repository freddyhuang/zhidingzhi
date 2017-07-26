$(function(){
	var oWrap = $("#wrapbg");
	var oImg = $("#wrapbg img");
	var oImgLen = oImg.length;
	var Deg = 360 / oImgLen;
	var lastX,lastY,moveX,moveY,minusX,minusY;
	var roY = 0,roX = -10;
	var timer = null;
	oImg.each(function(){
		var i = $(this).index();
		$(this).css({transform:"rotateY("+i*Deg+"deg) translateZ(350px)",transition:"transform 1s "+i+"s"});
});
	$('.bg2').mousedown(function(e){
		var e = e || window.event;
		
		lastX = e.clientX;
		lastY = e.clientY;
		$(this).bind({
			mousemove:function(e){
				var e = e || window.event;
				moveX = e.clientX;
				moveY = e.clientY;
				
				minusX = moveX - lastX;
				minusY = moveY - lastY;
				roY += minusX * 0.2;
				roX -= minusY * 0.2;
				lastX = moveX;
				lastY = moveY;
				oWrap.css("transform","rotateX("+roX+"deg) rotateY("+roY+"deg)");
			},
			mouseup:function(){
				$(this).unbind("mousemove");
				timer = setInterval(function(){
					minusX *= 0.95;
					minusY *= 0.95;
					roY += minusX * 0.2;
					roX -= minusY * 0.2;
					oWrap.css("transform","rotateX("+roX+"deg) rotateY("+roY+"deg)");
					if(Math.abs(minusX) < 0.5)clearInterval(timer);
				},30);
			}
		});
		return false;
	});
});