let number = document.querySelector('number');
let counter = 0;
const swiper = new Swiper('.wrapper', {
// loop: true,
// spaceBetween: 0,

// autoplay: {
//   delay:1000,
// scrollTo: true,
// SVGAnimatedNumberList: 5,
//   disableOnInteraction: false,
//   pauseOnMouseEnter: true,
// },
// pagination:{
//   el: '.swiper-pagination',
//   clickable: true,
//   dunamicBullets: true,
// },
 spaceBetween: 70,
  speed:7000,
	direction: 'horizontal',
  autoplay: {delay: 0},

  loop: true,
  slidesPerView: 1,
  freeMode: true,

  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
// breakpoints: {
  // 640: {
  //   slidesPerView: 1,
  //   spaceBetween: 20,
  // },
  // 768: {
  //   slidesPerView: 2,
  //   spaceBetween: 40,
  // },
  // 1024: {
  //   slidesPerView: 3,
  //   spaceBetween: 50,
  // },
},

// scrollbar: {
//   el: '.swiper-scrollbar',
// },
});

setInterval(() => {
  if (counter == 65) {
    clearInterval;
  }else{
    counter+= 1;
    number.innerHTML = '${counter}%';
  }
},30);
