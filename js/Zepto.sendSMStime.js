/*
此插件基于Zepto
插件名：Zepto.sendSMStime(倒计时插件)
作者 似懂非懂
版本 1.0
Blog：www.xfei.me
*/
(function($){
    var cd = {
        $elem:undefined,
        //默认配置
        defualts:{
            ingClass:"gray disable",
            defualtsText:"获取验证码",
            tipsText:"秒后重新获取",
            time:60, //发送中到计时
            startFn:undefined,
            endFn:undefined,
            validFn:undefined,
        },
        
        //绑定事件
        bindElemFn:function(){
            var t = this;
            //点击获取
            cd.$elem.on("click",function(){
                var isValidFalse = false;
                if(typeof cd.opts.validFn== 'function'){
                    isValidFalse = cd.opts.validFn();
                }
                if(isValidFalse) t.startTimeFn();
            })
        },
        
        //开始倒计时
        startTimeFn:function(){
            var t = this;
            if(t.sending) return ;
            ;typeof cd.opts.startFn== 'function' && cd.opts.startFn();
            t.sending = true;
            var num = 0;
            if(cd.opts.ingClass) cd.$elem.addClass(cd.opts.ingClass);
            var cTime = cd.opts.time;
                cTime -= 1;
            cd.$elem.html(cTime + cd.opts.tipsText);
            t.setInterval = setInterval(function(a,b,c){
                num+=1;
                cTime -= 1;
                if(num>=cd.opts.time){
                    t.endTimeFn();
                    return ;
                }
                if(cd.opts.ingClass) cd.$elem.addClass(cd.opts.ingClass);
                cd.$elem.text(cTime + cd.opts.tipsText);
            },1000)
        },
        
        //倒计时结束
        endTimeFn:function(){
            var t = this;
            clearInterval(t.setInterval);
            cd.$elem.text(cd.opts.defualtsText);
            if(cd.opts.ingClass) cd.$elem.removeClass(cd.opts.ingClass);
            t.sending = false;
            ;typeof cd.opts.endFn== 'function' && cd.opts.endFn();
        },
        
    }
    
    //倒计时插件初始化
	$.fn.sendSMStime = function(options){
        cd.opts = $.extend({}, cd.defualts,options);
        cd.$elem = $(this);
        cd.$elem.text(cd.opts.defualtsText);
        cd.bindElemFn();
	}
    
    //对外清除倒计时
	$.fn.resetSMStime = function(){
        cd.endTimeFn();
	}
	
})(Zepto);    


 