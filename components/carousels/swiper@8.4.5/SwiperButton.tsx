import { useSwiper } from 'swiper/react';
import { ISwiperBasicProps } from './Swiper';

export interface ISwiperButton extends ISwiperBasicProps {
  nextOrPrev: 'next' | 'prev';

  // for disable button
  isDisabled: boolean;
}

const SwiperButton: React.FC<ISwiperButton> = ({ defaultStyleSheet, buttonPosition, nextOrPrev, paginationPosition, dark, isDisabled }) => {
  const swiper = useSwiper();

  // Disabled button styling is not finished yet.
  // Now, there just the boolean value, need CSS styling.
  console.log(isDisabled);

  if (buttonPosition.position === 'bothSide') {
    return nextOrPrev === 'next' ? (
      <button
        style={{ right: buttonPosition.spaceBetweenBoder.toString() + 'px' }}
        className={`swiper-button-next custom-swiper-button custom-swiper-button-bothSide
          ${defaultStyleSheet!.custom_swiper_button}
          ${dark && defaultStyleSheet!.custom_swiper_button_dark}
        `}
        onClick={() => swiper.slideNext()}>
        Next
      </button>
    ) : (
      <button
        style={{ left: buttonPosition.spaceBetweenBoder.toString() + 'px' }}
        className={`swiper-button-prev custom-swiper-button custom-swiper-button-bothSide
          ${defaultStyleSheet!.custom_swiper_button}
          ${dark && defaultStyleSheet!.custom_swiper_button_dark}
        `}
        onClick={() => swiper.slidePrev()}>
        Prev
      </button>
    );
  } else {
    return nextOrPrev === 'next' ? (
      <button
        style={{ left: buttonPosition.spaceBetweenPagination.toString() + 'px', bottom: paginationPosition!.toString() + 'px' }}
        className={`custom-swiper-button custom-swiper-button-middle
          ${defaultStyleSheet!.custom_swiper_button}
          ${dark && defaultStyleSheet!.custom_swiper_button_dark}
        `}
        onClick={() => swiper.slideNext()}>
        Next
      </button>
    ) : (
      <button
        style={{ left: (buttonPosition.spaceBetweenPagination + 110).toString() + 'px', bottom: paginationPosition!.toString() + 'px' }}
        className={`custom-swiper-button custom-swiper-button-middle
          ${defaultStyleSheet!.custom_swiper_button}
          ${dark && defaultStyleSheet!.custom_swiper_button_dark}
        `}
        onClick={() => swiper.slidePrev()}>
        Prev
      </button>
    );
  }
};

export default SwiperButton;
