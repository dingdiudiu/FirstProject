if(typeof window.DK === 'undefined'){
    window.DK = {};
}

DK.$ = function(id){
    return document.getElementById(id);
}
DK.move = function(m,now,will,speed,page){
	var jump = (will-now)/1024;
    if(now>will){
    	var intervalId = setInterval(function(){
			m.style.right = now+"px";
    		if(now==will){
    			window.clearInterval(intervalId);
    		}
			now-=speed;
		},1);
		return will;
    }
    else{
    	var intervalId = setInterval(function(){
			m.style.right = now+"px";
    		if(now==will){
    			window.clearInterval(intervalId);
    		}
			now+=speed;
		},1);
		return will;
    }
}

DK.event = {
    addEventListener: function(ele, type, fun){
        if(window.addEventListener){
            ele.addEventListener(type, fun, false);
        }else{
            ele.attachEvent('on' + type, fun);
        }
    }
};