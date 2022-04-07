// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     responsive:{
//         0:{
//             items:3
//         },
//         600:{
//             items:5
//         },
//         1000:{
//             items:7
//         }
//     }
// })

const swiper = new Swiper('.swiper', {
    // Optional parameters

    spaceBetween: 5,
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    loopAdditionalSlides: 5,
    speed: 500,
  
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 5,
            //slidesPerGroup: 5,
            freeMode: true,
        }
    }

});