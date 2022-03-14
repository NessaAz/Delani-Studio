/*Landing page*/
$(".about-btn").mouseenter(function () {
	$(this).css("animation-play-state", "paused");
});
$(".about-btn").mouseleave(function () {
	$(this).css("animation-play-state", "running");
});


/*What we do*/
$('.design').click(function(){
    $('img#design').toggle()
    $('.des').toggle()
})
$('.development').click(function(){
    $('img#dev').toggle()
    $('.deve').toggle()
})
$('.product').click(function(){
    $('img#prod').toggle()
    $('.produ').toggle()
})