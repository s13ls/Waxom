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