import Image from 'next/image';
import { useState } from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ISwiperBasicProps } from './Swiper';
import SwiperButtonSet from './SwiperButtonSet';
import defaultStyleSheet from './SwiperCarouselCSS/SwiperCarousel.module.css';

interface ISlides {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  link?: string;
}

export interface ISwiperCarousel extends ISwiperBasicProps {
  // paginationPosition?: { bottom: number };
  slides: ISlides[];
  className?: string;
  width?: string;
  height?: string;
}

const SwiperCarousel: React.FC<ISwiperCarousel> = ({
  dark = false,
  buttonPosition = { position: 'bothSide', spaceBetweenBoder: 2 },
  paginationPosition = 0,
  slides = [{}, {}, {}, {}],
  className,
  width = '100vw',
  height = '100vh',
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      //use paginationPosition.buttom
      return `
      <div style='
          position:relative; 
          z-index:10; 
          bottom:${paginationPosition.toString()}px;' 
        class='${className} ${dark && 'swiper-pagination-bullet-dark'}'>
          <p>${(index + 1).toString().padStart(2, '0')}</p>
          <span></span>
      </div>`;
    },
  };

  return (
    <div id={'swiper-container'} className={`${defaultStyleSheet.container} ${className}`} style={{ width: width, height: height }}>
      <Swiper
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        effect="fade"
        navigation={{ nextEl: '', prevEl: '' }}
        pagination={pagination}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={swiper => setCurrentSlide(swiper.realIndex)}
        onSwiper={swiper => setCurrentSlide(swiper.realIndex)}>
        {slides.map((slide: ISlides, index) => {
          return (
            <SwiperSlide key={index}>
              {slide.imageUrl ? (
                <div className={defaultStyleSheet.imageContainer}>
                  <Image src={slide.imageUrl} alt={slide.imageAlt || ''} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
              ) : (
                <div style={{ backgroundColor: '#acbebd', height: height, width: width, textAlign: 'center', lineHeight: height, fontSize: '3rem' }}>
                  {slide.title}
                </div>
              )}
            </SwiperSlide>
          );
        })}
        <SwiperButtonSet
          buttonPosition={buttonPosition}
          paginationPosition={paginationPosition}
          slideCount={slides.length}
          currentSlide={currentSlide}
          dark={dark}
          defaultStyleSheet={defaultStyleSheet}
        />
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
