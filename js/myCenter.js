//封装弹框这个方法
function isShow() {
    $(".BombBox").css({
        "display":"block"
    })
    //点击任意地方，弹框隐藏
    $(".BombBox").click(function(event){
        $(this).css({
            "display":"none"
        })
    });
    $(".white_box").click(function(event){
        return false;
    });
    //点击微信联系
    $("#weixin").click(function(event){
        alert("111")
    });
    //点击电话联系
    $("#lianxi").click(function () {

    })
}
//点击联系客服，调用"isShow()"这个方法
$("#customer").click(function () {
    isShow()
})
//点击申请客服，调用的也是"isShow()"这个方法，因为功能相同
$("#button").click(function () {
    isShow()
})
//如果有数据接口，需要根据状态值判断跳转的页面
$("#bangding").click(function () {
    window.location.href="bangding.html";
})
//充值
$("#chongzhi").click(function () {
    window.location.href="recharge.html";
})
//
$("#jilu").click(function () {
    window.location.href="rechargeRecord.html"
})


