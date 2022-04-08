$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('.header').addClass('sticky');
  } else {
    $('.header').removeClass('sticky');
  }
});

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

//slick
$('.your-class').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

// Quick & dirty toggle to demonstrate modal toggle behavior
$('.modal-toggle').on('click', function (e) {
  e.preventDefault();
  $('.modal').toggleClass('is-visible');
});

$('.modal-toggle-2').on('click', function (e) {
  e.preventDefault();
  $('.modal-2').toggleClass('is-visible');
});

// accordion

$('.accordion-header').click(function (e) {
  e.preventDefault();
  var currentIsActive = $(this).hasClass('is-active');
  $(this).parent('.accordion').find('> *').removeClass('is-active');
  if (currentIsActive != 1) {
    $(this).addClass('is-active');
    $(this).next('.accordion-body').addClass('is-active');
  }
});

// slick pentru mobil


/* Slick needs no get Reinitialized on window Resize after it was destroyed */
$(window).on('load resize orientationchange', function () {
  $('.multiple').each(function () {
    var $multiple = $(this);
    /* Initializes a slick multiple only on mobile screens */
    // slick on mobile
    if ($(window).width() > 768) {
      if ($multiple.hasClass('slick-initialized')) {
        $multiple.slick('unslick');
      }
    } else {
      if (!$multiple.hasClass('slick-initialized')) {
        $multiple.slick({
          slidesToShow: 2,
          slidesToScroll: 2,
          mobileFirst: true,
          infinite: false,
          arrows:true,
        });
      }
    }
  });
});


// quote generator
var timeLeft=10;

var arr = [

  {quote: "Singura funcţie a minţii este de a diviza la nesfârşit. Rolul inimii este de a vedea ceea ce uneşte, lucru de care mintea nu este deloc capabilă. Mintea nu poate să înţeleagă ceea ce se află dincolo de cuvinte; ea poate să înţeleagă numai ceea ce este corect din punct de vedere lingvistic, ceea ce este corect din punct de vedere logic. Ea nu este preocupată de existenţă, de viaţă, de realitate. Mintea este, ea însăşi, o ficţiune. Poţi trăi şi fără minte. Însă nu poţi trăi fără inimă. Şi cu cât existenţa ta este mai profundă, cu atât este şi inima ta mai implicată.",
  author: "Osho"},

{ quote: " Viața este un joc dur și halucinant, viața înseamnă salturi cu parașuta, înseamnă risc, înseamnă să cazi și să te ridici, înseamnă alpinism, înseamnă voință să ajungi în punctul cel mai înalt și să te simți nemuțumit.",
  author: "Paulo Coelho"},

{ quote: "Sunt experienţe cărora nu le mai poţi supravieţui. După ele, simţi cum orice ai face nu mai poate avea nici o semnificaţie. Căci după ce ai atins limitele vieţii, dupa ce ai trăit cu exasperare tot ceea ce oferă acele margini periculoase, gestul zilnic şi aspiraţia obişnuită îşi pierd orice farmec şi orice seducţie",
  author: "Emil Cioran"},

{ quote: "Iubirea-i pur şi simplu nebunie. Îndrăgostiţii merită închisoarea ba chiar şi biciul. Motivul pentru care îndrăgostiţii nu sunt, totuşi pedepsiţi şi trataţi astfel, şi că acest fel de nebunie se dovedeşte a fi atât de răspândit este că biciuitorii sunt, la rândul lor, îndrăgostiţi",
  author: "William Shakespeare"},

{ quote: "Always do what you are afraid to do.",
  author: "Ralph Waldo Emerson"},

{ quote: "Nothing great was ever achieved without enthusiasm.",
  author: "Ralph Waldo Emerson"},
{ quote: "Nothing can bring you peace but yourself.",
  author: "Ralph Waldo Emerson"},

{ quote: "The only way to have a friend is to be one.",
  author: "Ralph Waldo Emerson"},

{ quote: "Write it on your heart that every day is the best day in the year.", 
  author: "Ralph Waldo Emerson"},

{ quote: "Dacă nu vă puteţi simţi împăcat atunci când sunteţi singur, veţi căuta o relaţie pentru a vă acoperi sentimentul de disconfort. Puteţi fi sigur că această formă de disconfort va apărea într-o formă sau alta în relaţie şi că vă veţi considera probabil partenerul răspunzător pentru acest lucru",
  author: "Eckhart Tolle"}];


myInterval = setInterval(function() {
  var x = Math.floor(Math.random() * arr.length);
  $("#quot").text(arr[x].quote);
  $("#autho").text(arr[x].author);
},10000);

