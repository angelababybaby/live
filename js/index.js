var span = $(".title_list span");
var imBox = $(".imBox");
span.click(function(){
    var index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    imBox.eq(index).css({"display":"block"})
    imBox.eq(index).siblings().css({"display":"none"})
});
$(".Personal_Center").click(function () {
    window.location.href="myCenter.html"
})