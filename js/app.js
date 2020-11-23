const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('menu-active');
        burger.classList.toggle('burger-active');
    });
}

navSlide();


const scrollMenu = function (e) {
    let element = document.querySelector(".header");
    let scrollTop = window.scrollY;
  
    if (scrollTop > 150) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  };
  
  document.addEventListener("scroll", scrollMenu);



$('.slider').slick({
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.slider__posts').slick({
  slidesToShow: 3,
  infinite: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1
      }
    }

  ]
});


const tabsBtn = document.querySelectorAll('.btn__tab');
const tabsItems = document.querySelectorAll('.projects__list');

tabsBtn.forEach(function(item) {
  item.addEventListener("click", function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function(item){
      item.classList.remove('active');
    });

    tabsItems.forEach(function(item){
      item.classList.remove('active');
    });

    currentBtn.classList.add("active");
    currentTab.classList.add("active");
  })
});





//animation scroll

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});