
/*font page animations*/
$('.welcome').mouseenter(function() {
    $('.welcome').css('transform', 'scale(0.98)')
})

$('.welcome').mouseleave(function() {
    $('.welcome').css('transform', 'scale(1)')
})
$('.welcome').mousedown(function() {
    $('.welcome').css('transform', 'scale(0.95)')
})
$('.welcome').mouseup(function() {
    $('.welcome').css('transform', 'scale(0.98)')
})
/*end of front page animations*/


/* top nav styling*/
$(document).ready(function(){
    $('#today').css('box-shadow','0px 24px 1px -17px white');
})
$('.nav>li').click(function(){
    $('.nav>*').css('box-shadow','none')
    $(this).css('box-shadow','0px 24px 1px -17px white');
})
/*end of top nav styling*/
