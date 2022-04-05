$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});

// var yourNavigation = $(".nav");
//     stickyDiv = "sticky";
//     yourHeader = $('.header').height();

// $(window).scroll(function() {
//   if( $(this).scrollTop() > yourHeader ) {
//     yourNavigation.addClass(stickyDiv);
//   } else {
//     yourNavigation.removeClass(stickyDiv);
//   }
// });

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//slick
$(".your-class").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

// Quick & dirty toggle to demonstrate modal toggle behavior
$(".modal-toggle").on("click", function (e) {
  e.preventDefault();
  $(".modal").toggleClass("is-visible");
});
