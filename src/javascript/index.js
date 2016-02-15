jQuery(window).load(function () {
    
    var navbar = $('#navbar-main');
    var distance = navbar.offset().top;
    var $window = $(window);
    
    console.log(distance);
    
    $window.scroll(function () {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
            $('body').css('padding-top', '70px');
        } else {
            navbar.removeClass('navbar-fixed-top');
            $('body').css('padding-top', '0px');
        }
        
    });
});