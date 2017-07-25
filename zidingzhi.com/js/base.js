var Json = {
	mask: function() {
		var div = $("<div>").addClass("div_obj");
		console.log(div);
		$("body").append(div);
		var div_obj = $(".div_obj");
		var height = document.body.clientHeight;
		div_obj.css({
			'position': 'fixed',
			'left': '0',
			'top': '0',
			'z-index':'1000000000',
			'background': 'rgba(0,0,0,0.8)',
			'width': '100%',
			'height': "136%"
		});
	},
	//自定义toast弹框  
	Toast:function (msg,duration){  
	    duration=isNaN(duration)?3000:duration;  
	    var m = document.createElement('div');  
	    m.innerHTML = msg;  
	    m.style.cssText="width:60%; min-width:150px; background:#000; opacity:0.9; height:40px; color:#fff; line-height:40px; text-align:center; border-radius:5px; position:fixed; bottom:20%; left:20%; z-index:999999;";  
	    document.body.appendChild(m);  
	    setTimeout(function() {  
	        var d = 0.5;  
	        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';  
	        m.style.opacity = '0';  
	        setTimeout(function() { document.body.removeChild(m) }, d * 1000);  
	    }, duration);  
	}, 
	EventStop:function(flag,event){
		document.addEventListener('touchmove',function(){
			if (flag==1) {
				event.preventDefault();
			}
		});
	}
}