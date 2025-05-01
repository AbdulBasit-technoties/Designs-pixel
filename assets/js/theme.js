var swiper = new Swiper(".testi-slider", {
  slidesPerView: 4,
  centeredSlides: true,  // Optional: Centered slides for all screen sizes
  spaceBetween: 25,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15, // Adjusted spaceBetween for smaller screens
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 25, // Adjusted spaceBetween for smaller screens
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30, // Adjusted spaceBetween for mid-sized screens
    },
    1920: {
      slidesPerView: 4, // Ensured to match default slidesPerView
      spaceBetween: 20,
    },
  },
});


// FANCY BOX JS

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// AOS JS
AOS.init({
});

jQuery('.open-menu').click(function(){
	jQuery('.responsive-menu').addClass('active');
});
jQuery('.menu-close').click(function(){
	jQuery('.responsive-menu').removeClass('active');
});
