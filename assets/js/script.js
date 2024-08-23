const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const navItemEls = document.querySelectorAll('.nav__item');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
});

navItemEls.forEach(navItemEl => {
  navItemEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open');
  });
});


$('.client-carousel').owlCarousel({
    margin:10,
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    center:false,
    dots: true,
    nav: false,
    navText: [
      '<i class="fa-regular fa-chevron-left nav-btn"></i>',
      '<i class="fa-regular fa-chevron-right nav-btn"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1500:{
        items:3
      }
    }
  })



  $('.service-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    margin:30,
    center: true,
    dots: true,
    nav: false,
    navText: [
      '<i class="fa-regular fa-chevron-left nav-btn"></i>',
      '<i class="fa-regular fa-chevron-right nav-btn"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  })

  $('.review-carousel').owlCarousel({
    margin:10,
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    center:false,
    dots: true,
    nav: true,
    navText: [
      '<i class="fa-regular fa-chevron-left nav-btn"></i>',
      '<i class="fa-regular fa-chevron-right nav-btn"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 2
      },
      1500:{
        items:2
      }
    }
  })

// Section Scroll On Nav Link Click
document.addEventListener('DOMContentLoaded', function() {
  var navbarLinks = document.querySelectorAll('nav a[href^="#"]');
  navbarLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var target = link.getAttribute('href');
      var offset = document.querySelector('nav').offsetHeight;
      var targetOffset = document.querySelector(target).offsetTop - offset;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    });
  });
});
const header = document.getElementsByTagName("header")[0];
const element1 = document.querySelector('.hero-banner');

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('bg-white', 'border-bottom', 'border-1', 'shadow-sm', 'sticky-top', 'dark-text');
    } else {
      header.classList.remove('sticky-top', 'bg-white', 'border-bottom', 'border-1', 'shadow-sm', 'dark-text');
    }
  });
}, {
  root: null,
  rootMargin: `0px`,
  threshold: 0
});

// observer1.observe(element1);


let readMorebtn = document.querySelector('.read-more-btn')
readMorebtn.addEventListener('click',()=>{
  let readMoreContainer = document.querySelector('.seo-content')
  readMoreContainer.classList.toggle('show-content')
  readMorebtn.innerHTML = "Read Less"
  if(!readMoreContainer.classList.contains('show-content')) 
  readMorebtn.innerHTML = "Read More"
})

function showSubjects(){
  let subjectsContainer = document.querySelector('.subjects-container')
  let showBtn = document.querySelector('.show-btn')
  subjectsContainer.classList.toggle('active')
  if(showBtn.innerHTML === 'Show More') showBtn.innerHTML = "Show Less"
  else showBtn.innerHTML = "Show More"
}

// const counterWrapper = document.querySelector('.counter-section');
// const counterWrapperObserver = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           counter()
//         }
//       },{
//         root:null,
//         rootMargin:"-200px",
//         threshold:"0"
//       });
//     });
// counterWrapperObserver.observe(counterWrapper)

// function counter(){
//   $(document).ready(function () {
//     $('.counter').each(function () {
//         $(this).prop('Counter', 0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 4000,
//             easing: 'swing',
            
//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
// });
// }

// International Telephone Input
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: "auto",
  geoIpLookup:true,
  separateDialCode: true,
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
phoneInputField.addEventListener("change", () => {
  const selectedCountryData = phoneInput.getSelectedCountryData();
});
fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(data => {
      const countryCode = data.country_code;
      console.log(data)
      phoneInput.setCountry(countryCode.toLowerCase());
    })
    .catch(error => {
      console.error("Error fetching IP geolocation:", error);
    });

// let isOpen = false


