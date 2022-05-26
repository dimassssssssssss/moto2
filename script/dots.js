const slides = document.querySelectorAll('.slide1'),
      dots = document.querySelectorAll('dot1');

let index = 0;

const activeSlide = n => {
    for(slide1 of slides)   {
        slide1.classList.remove('active1');
    }
    slides[n].classList.add('active1');
}



const activeDot = n => {
  for(dot1 of dots)   {
      dot1.classList.remove('active1');
  }
  dots[n].classList.add('active1');
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeDot(index);
        activeSlide(index);
    })
});