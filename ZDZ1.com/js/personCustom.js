window.onload = function(){
	var DragImg = document.getElementsByClassName('drag-img')[0];
	var Dragbox = document.getElementsByClassName('img-Editor')[0];
	var X=0,Y=0,T=0,L=0;
	DragImg.onmousedown = function(e){
		var flag = true;
		var e = e||window.event;
		 X = e.clientX;
		 Y = e.clientY;
		 L = DragImg.offsetLeft;
		 T = DragImg.offsetHeight;
		 Dragbox.onmousemove = function(e){
		 	if (flag) {
		 		var e = e||window.event;
			 	var _left = e.clientX-X+L;
			 	var _top = e.clientY-Y+T;
			 	DragImg.style.left = _left+'px';
			 	DragImg.style.top = _top+'px';
		 	}
		 }
		 document.onmouseup = function(){
		 	flag=false;
		 }
	}
}
