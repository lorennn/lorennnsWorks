jQuery(document).ready(function() {
    // swiper
    var swiper1 = new Swiper('.swiper-container-sec1', {
        direction: 'vertical',
        slidesPerView:'auto',
        spaceBetween : 20,
        loop : true,
        autoplay : true,
        speed:1500,
        freeMode : true,
        // mousewheel: true, // 失效
        keyboard : true,
        pagination: {
          el: '.swiper-pagination-sec1',
          clickable:true,
        },
        navigation: {
          nextEl: '.swiper-button-next-sec1',
          prevEl: '.swiper-button-prev-sec1',
        },
        observer:true,
        observeParents:true,
    });
});