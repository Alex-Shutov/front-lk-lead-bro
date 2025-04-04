$(document).ready(function($){
    const shopLinksSwiper = new Swiper(`.shop-links__wrap`, {
        slidesPerView: 'auto',
    });

    const tasksCardsSwiper = new Swiper(`.tasks__swiper`, {
        slidesPerView: 3,
        spaceBetween: 8,
        breakpoints: {
            991: {
                slidesPerView: 'auto',
            }
        }
    });
})