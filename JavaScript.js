$(document).ready(function(){
    $(".menu-icon").on('click', function(event) {
        $(this).closest('.container').find('.sidebar').fadeToggle(200);
      });
    $(".search-mobi").on('click', function(event) {
        $('.phone-search').fadeToggle(200);
    });
});