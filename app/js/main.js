$(function () {

// popup header Записаться
    document.getElementById('open-popup').addEventListener ("click", function () {
        document.getElementById('my-modal').classList.add('open')
    })

    document.getElementById('close-popup').addEventListener ("click", function () {
        document.getElementById('my-modal').classList.remove('open')
    })

    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            document.getElementById('my-modal').classList.remove('open')
        }
    });

    document.querySelector('#my-modal .popup-body__content').addEventListener('click', event => {
        event._isClickWithInModal = true;
    });
    
    document.getElementById('my-modal').addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');  
    });

    // popup services Учавствовать

    

    document.getElementById('services-open').addEventListener ("click", function () {
        document.getElementById('services-popup').classList.add('open')
    })

    document.getElementById('close-services').addEventListener ("click", function () {
        document.getElementById('services-popup').classList.remove('open')
    })

    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            document.getElementById('services-popup').classList.remove('open')
        }
    });

    document.querySelector('#services-popup .services-popup__content').addEventListener('click', event => {
        event._isClickWithInModal = true;
    });
    
    document.getElementById('services-popup').addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');  
    });

    

    $('.services__inner').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpead: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    $('.doctors-slide').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.reviews-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpead: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.licenses__inner').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

     $('.about-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpead: 3000
    });
   

});