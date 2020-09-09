
import { Swiper, Navigation, Lazy } from 'swiper/js/swiper.esm'

window.addEventListener('load', () => {

  Swiper.use([Navigation, Lazy]);

  const slider = new Swiper('.decision .decision__content .decision__wrapperSwiper .decision__swiper-container', {
    loop: true,
    lazy: {
      loadPrevNext: true,
    },
    slidesPerView: 1,
    speed: 500,
    direction: 'vertical',
    navigation: {
      prevEl: '.decision .decision__content .decision__wrapperSwiper .decision__buttons .decision__btn_left',
      nextEl: '.decision .decision__content .decision__wrapperSwiper .decision__buttons .decision__btn_right',
    }
  })

  // slider.on('slideChange', moveCurtain)

  /* const curtain = document.querySelector('.slider .slider__content .slider__wrapperSwiper .slider__swiper-container .slider__curtain')

  function endOfTrans() {
    curtain.style.transitionTimingFunction = 'cubic-bezier(1,.02,.81,1.16)'
    curtain.style.left = '100%'
    curtain.removeEventListener('transitionend', endOfTrans)
  }

  function moveCurtain() {
    curtain.style.transitionTimingFunction = 'ease'
    curtain.style.left = '0'
    curtain.addEventListener('transitionend', endOfTrans)
  } */

  new Swiper('.why .why__content .why__wrapperSwiper .why__swiper-container', {
    loop: true,
    lazy: {
      loadPrevNext: true,
    },
    slidesPerView: 1,
    speed: 500,
    direction: 'vertical',
    navigation: {
      prevEl: '.why .why__content .why__wrapperSwiper .why__buttons .why__btn_left',
      nextEl: '.why .why__content .why__wrapperSwiper .why__buttons .why__btn_right',
    }
  })

})


