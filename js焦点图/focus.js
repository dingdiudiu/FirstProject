(function(){
	var move = DK.$("move");
	var toleft = DK.$("toleft");
	var toright = DK.$("toright");
	var wrapBd = DK.$("wrapBd");

	var page_count = DK.$("move").getElementsByTagName("li").length;//焦点图图片数

	var speed = 8;
	var rightnum = 0;
	var page = 1;
	var i = 4;
	var boxwidth = wrapBd.clientWidth;

	var focus = {
		init:function(){
			this.bindEvent();
		},
		bindEvent:function(){
			var self= this;
			DK.event.addEventListener(toright,"click",function(){
				self.adjustMove("right");
			})
			DK.event.addEventListener(toleft,"click",function(){
				self.adjustMove("left");
			})
			
		},
		adjustMove:function(direction){
			if(direction=="right"){
				if(rightnum%boxwidth==0){
					if(page==page_count){
						rightnum = DK.move(move,rightnum,0,speed*(page_count-1),page);
						page = 1;
					}
					else{
						rightnum = DK.move(move,rightnum,rightnum+boxwidth,speed,page);
						page++;
					}
				}
			}
			else{
				if(rightnum%boxwidth==0){
					if(page==1){
						var will = rightnum+(page_count-1)*boxwidth;
						rightnum = DK.move(move,rightnum,will,speed*(page_count-1),page);
						page = page_count;
					}
					else{
						rightnum = DK.move(move,rightnum,rightnum-boxwidth,speed,page);
						page--; 
					}
				}
			}
		}

	}
	focus.init();
})()