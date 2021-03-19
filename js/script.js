// Inicio de funcion JS

$(document).ready(function(){  

    // Menú Responsive
    $('aside#menu-movil').css('right','-290px');
    $('#cerrar').hide();

    $('#abrir').click(function(){
        $('aside#menu-movil').animate({
            left: 0
        },300, 'easeOutExpo');

        $('#abrir').hide();
        $('#cerrar').show();

        $('header, main,footer').animate({
            left: 290,
            opacity: 0.5
        },300, 'easeOutExpo');

        

        event.preventDefault();
    });
    
    $('#cerrar, aside#menu-movil nav a').click(function(){
        $('aside#menu-movil').animate({
            left: -290
        },300, 'easeOutExpo');

        $('#abrir').show();
        $('#cerrar').hide();

        $('header, main,footer').animate({
            left: 0,
            opacity: 1
        },300, 'easeOutExpo');
        

        event.preventDefault();

    });

    // Función para detectar Scroll Down
    $(window).scroll(function(){
        if($(this).scrollTop() > 10){
            $('header').removeClass('transparente');
            $('header').addClass('gris');

        } else {
            $('header').removeClass('gris');
            $('header').addClass('transparente');

        }
    });   

    // Activador de Slick Slider
    $('.slick').slick({
        slidesToshow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        speed: 500,
        fade: true,
        infinite: true
        
        
    });


    // Función Abrir/Cerrar Pop-up

    // Setters (SET) y Getters (GET)
    $('#cerrar-pop-up').click(function(){
        $('aside#pop-up').hide();
        event.preventDefault();
    });

    $('aside#pop-up').delay(1000).show(200);

});