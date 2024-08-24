const sliderImages = document.querySelectorAll('.slider-images img');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
let currentIndex = 0;

function showImage(index) {
  sliderImages.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

sliderPrev.addEventListener('click', function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderImages.length - 1;
  }
  showImage(currentIndex);
});

sliderNext.addEventListener('click', function() {
  currentIndex++;
  if (currentIndex >= sliderImages.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
});

showImage(currentIndex);