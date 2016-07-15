$(document).ready(function(){
    $('.navi__icon, .navi__menutitle').click(function(){
        openMenu();
    });

    function openMenu() {
        $('.navi__menutitle, .navi__icon, .nav').toggleClass('open');
    }

});