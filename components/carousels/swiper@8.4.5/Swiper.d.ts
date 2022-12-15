interface IButtonPositionBothSide {
  position: 'bothSide';
  spaceBetweenBoder: number;
}

interface IButtonPositionMiddle {
  position: 'middle';
  spaceBetweenPagination: number;
}

export interface ISwiperBasicProps {
  defaultStyleSheet?: { readonly [key: string]: string };
  buttonPosition: IButtonPositionBothSide | IButtonPositionMiddle;
  paginationPosition?: number;
  dark?: boolean;
}
