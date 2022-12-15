import { ISwiperBasicProps } from './Swiper';
import SwiperButton from './SwiperButton';

export interface ISwiperButtonSet extends ISwiperBasicProps {
  slideCount: number;
  currentSlide: number;
}

const SwiperButtonSet: React.FC<ISwiperButtonSet> = ({ defaultStyleSheet, dark, buttonPosition, paginationPosition, currentSlide, slideCount }) => {
  // if button position is bothSide , return two buttons with position absolute and react freagment element
  if (buttonPosition.position === 'bothSide') {
    return (
      <>
        <SwiperButton
          defaultStyleSheet={defaultStyleSheet}
          nextOrPrev="prev"
          buttonPosition={buttonPosition}
          paginationPosition={paginationPosition}
          isDisabled={currentSlide === 0 ? true : false}
          dark={dark}
        />
        <SwiperButton
          defaultStyleSheet={defaultStyleSheet}
          nextOrPrev="next"
          buttonPosition={buttonPosition}
          paginationPosition={paginationPosition}
          isDisabled={currentSlide >= slideCount ? true : false}
          dark={dark}
        />
      </>
    );
  } else {
    return (
      <div className={'custom-swiper-button-middle-container'}>
        <SwiperButton
          defaultStyleSheet={defaultStyleSheet}
          nextOrPrev="prev"
          buttonPosition={buttonPosition}
          paginationPosition={paginationPosition}
          isDisabled={currentSlide === 0 ? true : false}
          dark={dark}
        />
        <SwiperButton
          defaultStyleSheet={defaultStyleSheet}
          nextOrPrev="next"
          buttonPosition={buttonPosition}
          paginationPosition={paginationPosition}
          isDisabled={currentSlide >= slideCount ? true : false}
          dark={dark}
        />
      </div>
    );
  }

  // if button position is middle , return two buttons with position relative and a button container with position absolute
};

export default SwiperButtonSet;
