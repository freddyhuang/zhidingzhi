(function(){
	var _index = 0;
	var timer = null;
	var k = $(".ban-nav ul li");
	var s = $(".banner .ban-img ul li");
	var nextBtn = $('.btn  .next');
	var preBtn = $('.btn .pre');
	function auto(){
		s.eq(_index).show().siblings().hide();
		k.eq(_index).addClass('ban-sex').siblings().removeClass('ban-sex');
	}
	function play(){
			timer = setInterval(function(){
				_index++;
				if (_index > 3) {
					_index = 0 ;
				}
				auto();
			},2000)
		}
		play();
		$(".banner").hover(function(){
			clearInterval(timer);
		},function(){
			play();
		});
		k.eq(_index).addClass('ban-sex');
		k.hover(function(){
			var i = $(this).index();
			s.eq(i).show().siblings().hide();
			$(this).addClass('ban-sex').siblings().removeClass('ban-sex');
		});
		function next(){
			_index++;
				if (_index > 3) {
					_index = 0 ;
				}
			auto();
		}
		function pre(){
			_index--;
				if (_index < 0) {
					_index = 3 ;
				}
			auto();
		}
		nextBtn.click(function(){
			next();
		});
		preBtn.click(function(){
			pre();
		});
		
		//登陆注册弹窗  修改密码弹窗
		var register = $(".header-right .register");
		var login = $(".header-right .login");
		var resetpsd = $("#loginTip .forgetpsd");
		var logClose = $("#loginTip .loginTip-close");
		var regClose = $("#registerTip .registerTip-close");
		var resetClose = $("#resetpsd .resetpsd-close");
		function toggle(event) {
			$('#'+event.data.name2).hide();
			$('#'+event.data.name1).toggle();
		}
		register.on("click", { name1: "registerTip",name2:"loginTip" }, toggle);
		login.on("click", { name1: "loginTip",name2:"registerTip" }, toggle);
		
		resetpsd.bind('click',function(){
			$("#loginTip").hide();
			$("#registerTip").hide();
			$("#resetpsd").toggle();
		});
		
		logClose.click(function(){
			$("#loginTip").hide();
		});
		
		regClose.click(function(){
			$("#registerTip").hide();
		});
		
		resetClose.click(function(){
		$("#registerTip").hide();
		$("#resetpsd").hide();
		});
})();