$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .nav__container').toggleClass('active')
        $('body').toggleClass('lock')
    })
    
    $('.nav__link').click(function(event) {
        $('.header__burger, .nav__container').removeClass('active')
        $('body').toggleClass('lock')
    })
})
