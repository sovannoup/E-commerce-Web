$(document).ready(function(){
    $(".menu-icon").on('click', function(event) {
        $(this).closest('.container').find('.sidebar').fadeToggle(200);
      });
    $(".search-mobi").on('click', function(event) {
        $('.phone-search').fadeToggle(200);
    });

    $(".first").on('click', function(event) {
        $('.first').css("color","#e9a914")
        $('.second').css("color","black")
        $('.first-img').css("display","flex")
        $('.second-img').css('display', 'none');
    })
    $(".second").on('click', function(event) {
        $('.second').css("color","#e9a914")
        $('.first').css("color","black")
        $('.first-img').css("display","none")
        $('.second-img').css('display', 'flex');
    })
});