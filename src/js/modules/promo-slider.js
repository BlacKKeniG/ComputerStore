export default function promoSlider(isAutoPlay = false) {
    const slideList = document.querySelectorAll('.promo__slider__slide');
    const prev = document.querySelector('#promo__slider__prev');
    const next = document.querySelector('#promo__slider__next');
    const numOfSlide = slideList.length;
    const counterTotal = document.querySelector(".promo__slider__counter__total");
    const counterCurrentSlide = document.querySelector(".promo__slider__counter__current");
    
    let isAutoPlay = isAutoPlay;
    let autoPlayIntervalID;
    let currentSlide = 1;
    counterTotal.textContent = numOfSlide;

    showSlide();
    if(isAutoPlay) {
        autoPlay();
    } 
        

    prev.addEventListener('click', () => {
        showPrevSlide();
        stopAutoPlay();
    });
        
    next.addEventListener('click', () => { 
        showNextSlide();
        stopAutoPlay();
    });

    function showSlide () {
        slideList[currentSlide - 1].classList.add('promo__slider__slide_current');
        counterCurrentSlide.textContent = currentSlide;
    }

    function hiddenSlide () {
        slideList[currentSlide - 1].classList.remove('promo__slider__slide_current');
    }

    function showPrevSlide(){
        hiddenSlide();
        if(--currentSlide < 1){
            currentSlide = numOfSlide;
        }
        showSlide();
    }

    function showNextSlide(){
        hiddenSlide();
        if(++currentSlide > numOfSlide){
            currentSlide = 1;
        }
        showSlide();
    }

    function autoPlay() {
        autoPlayIntervalID = setInterval(showNextSlide, 3000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayIntervalID);
    }
}     
    

