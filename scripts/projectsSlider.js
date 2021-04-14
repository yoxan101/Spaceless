document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide',{
        'arrowPath' : 'M59.6019 16.5381C62.245 17.5293 62.1808 21.29 59.5054 22.1904L17.3844 36.3658C16.2422 36.7502 14.9808 36.4138 14.1817 35.5116L1.6694 21.3847C0.70395 20.2947 0.660647 18.6688 1.56671 17.5289L14.1419 1.70862C14.9515 0.690065 16.3254 0.309517 17.5437 0.766375L59.6019 16.5381Z',
        classes: {
            prev  : 'splide__arrow--prev prev',
            next  : 'splide__arrow--next next',
        },
        type: 'loop',
        drag: true,
        focus : 'center',
        width: 600,
        fixedHeight: '400px',
        keyboard: true,
        easing: 'ease',
        updateOnMove: true,
    } ).mount();
} );