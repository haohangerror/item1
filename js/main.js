$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

   $('#cancel').click(function(){
        $('#loginbg').hide();
        $('#loginitem').hide();
    });
    $('.buy').add('#login').click(function(e){
        e.preventDefault();
        $('#loginbg').show();
        $('#loginitem').show();
    });


});
