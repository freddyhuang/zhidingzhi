// JavaScript Document
window.onload=function(){
	var oBox = document.getElementById('box');
	var oPrev =	oBox.getElementsByTagName('a')[0];
	var oNext =	oBox.getElementsByTagName('a')[1];
	var aBtn = oBox.getElementsByTagName('input');
	var aDiv = oBox.getElementsByTagName('div');
	var iNow = 0;
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			iNow=this.index;
			tab();
		};
	}
	function tab(){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';
			aDiv[i].style.display='none';
		}
		aBtn[iNow].className='on';
		aDiv[iNow].style.display='block';
	}
	oPrev.onclick=function(){
		iNow--;
		if(iNow<0){
			iNow=aBtn.length-1;
		}
		tab();
	};
	oNext.onclick=function(){
		console.log("now1")
		iNow++;
		if(iNow==aBtn.length){
			iNow=0;
		}
		tab();
	};

	var bodyW=$('body').width();
	var bodyW1000=bodyW-1000;
	$('.nav-main-right').width(bodyW1000/2);

	

	$('.graceful-main-right-box div').click(function(){
		$('.graceful-main-left-box div').hide();
		$(this).css({'border-right':'7px solid #ff0000','color':'#f00'}).siblings().css({'color':'#fff','border-right':'0px solid #ff0000'})
		$('.graceful-main-left-box div').eq($(this).index()).show();
	})

	var jiantZuoBtnNUM=0;
	$('.qixiaxiangmu-main-btn .jiant-zuo-btn').click(function(){
		if(jiantZuoBtnNUM>0){
			jiantZuoBtnNUM--;
		}else{
			if (jiantZuoBtnNUM==0||jiantZuoBtnNUM<0) {
			jiantZuoBtnNUM=$('.qixiaxiangmu-main .qixiaxiangmu-item').length-1;
		}
		}
		
		
		// alert(jiantZuoBtnNUM)
		// alert(jiantZuoBtnNUM)
		$('.qixiaxiangmu-main .qixiaxiangmu-item').eq(jiantZuoBtnNUM).css('display','block').siblings().css('display','none');
		return false;
	})
	var jiantYouBtnNUM=0;
	$('.qixiaxiangmu-main-btn .jiant-you-btn').click(function(){
		jiantZuoBtnNUM++;
		if (jiantZuoBtnNUM==$('.qixiaxiangmu-main .qixiaxiangmu-item').length) {
			jiantZuoBtnNUM=0;
		}
		// alert(jiantZuoBtnNUM)
		// alert(jiantZuoBtnNUM)
		$('.qixiaxiangmu-main .qixiaxiangmu-item').eq(jiantZuoBtnNUM).css('display','block').siblings().css('display','none');
		return false;
	})
	var qixiaxiangmuBoxheight=$('.qixiaxiangmu-item-right').height()+$('.qixiaxiangmu-tit').outerHeight()
	$('.qixiaxiangmu-box').height(qixiaxiangmuBoxheight)
	
};