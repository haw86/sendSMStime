# sendSMStime
jquery/Zepto发送短信60秒倒计时插件
# # # 插件调用代码
``````
//发送验证码倒计时
$("#getSMSBtn").sendSMStime({
    time:60,//重发短信间隔
    validFn:function(){
        //验证手机号码是否正确，如果正确，继续执行，错误不执行
        var val = $("#mobilePhone").val();
        if(/^1[345789]\d{9}$/.test(val)){
            //手机号码正确
            var isValidFalse = true;
        }else{
            //手机号验证失败
            var isValidFalse = false;
            alert("请输入正确的手机号码");
            $("#mobilePhone").focus();
        }
        return isValidFalse;
    },
    startFn:function(){
        //手机号码正确后的回调
    },

    endFn:function(){
        //倒计时结束的回调
    }
})
//重置倒计时
$("#clearSMSBtn").click(function(){
    $("#getSMSBtn").resetSMStime();
})
``````
