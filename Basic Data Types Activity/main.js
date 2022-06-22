const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  autoplay: { 
    disableOnInteraction: false,
    delay: 8000, 
  },
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  observer: true,

});
//sorry for dirty code
const swiperWrapper = document.querySelector('.swiper-wrapper');

console.log(bookInfo[0].text[0], bookInfo[1].text[0])

if(genre == 'horror'){

  let newSlide = document.createElement('div');
  newSlide.innerHTML = bookInfo[0].title + ", "+bookInfo[0].genre + ", "+ bookInfo[0].time + ", "+ bookInfo[0].page + ", for "+ bookInfo[0].age;
  newSlide.setAttribute('class', 'swiper-slide');
  swiperWrapper.appendChild(newSlide);

  for(let i = 0; i < bookInfo[0].page; i++){
    let newSlide = document.createElement('div');
    newSlide.innerHTML = bookInfo[0].text[i];
    newSlide.setAttribute('class', 'swiper-slide');
    swiperWrapper.appendChild(newSlide);
  }
} else if(genre == 'fantasy') {
  let newSlide = document.createElement('div');
  newSlide.innerHTML = bookInfo[1].title + ", "+bookInfo[1].genre + ", "+ bookInfo[1].time + ", "+ bookInfo[1].page + ", for "+ bookInfo[1].age;
  newSlide.setAttribute('class', 'swiper-slide');
  swiperWrapper.appendChild(newSlide);

  for(let i = 0; i < bookInfo[1].page; i++){
    let newSlide = document.createElement('div');
    newSlide.innerHTML = bookInfo[1].text[i];
    newSlide.setAttribute('class', 'swiper-slide');
    swiperWrapper.appendChild(newSlide);
  }
} else {
  let newSlide = document.createElement('div');
  newSlide.innerHTML = 'select genre again(refresh F5)';
  newSlide.setAttribute('class', 'swiper-slide');
  swiperWrapper.appendChild(newSlide);
}