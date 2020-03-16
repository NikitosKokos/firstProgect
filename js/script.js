$('.menu-btn').on('click', function (e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $(this).toggleClass('menu-btn_active');
  $('.content').toggleClass('content_active');
})
// $('.menu-btn').on('click', function (e) {
//   e.preventDefault();
//   $(this).toggleClass('menu-btn_active');
//   $('.menu').toggleClass('menu_active');
// });


// preloader 
document.body.onload = function () {

  setTimeout(function () {
    let preloader = document.querySelector('#page-preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done')
    }

  }, 500);
};
// preloader end location.reload()