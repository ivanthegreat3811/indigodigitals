import { CSSProperties } from 'react';
import defaultStyleSheet from './BurgerBarCSS/BurgerBar.module.css';

export interface IBurgerBar {
  style?: CSSProperties;
  className?: string;
  isActive: boolean;
  handleClick: () => void;
  //sampleTextProp?: string | null;
}

const BurgerBar: React.FC<IBurgerBar> = ({ style, className, isActive, handleClick }) => {
  return (
    <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${className ? className : ''}`} onClick={handleClick} role="button">
      <div className={defaultStyleSheet.container}>
        <span className={`${defaultStyleSheet.line} ${defaultStyleSheet.line1} ${isActive && defaultStyleSheet.isActive}`}></span>
        <span className={`${defaultStyleSheet.line} ${defaultStyleSheet.line2} ${isActive && defaultStyleSheet.isActive}`}></span>
        <span className={`${defaultStyleSheet.line} ${defaultStyleSheet.line3} ${isActive && defaultStyleSheet.isActive}`}></span>
      </div>
    </div>
  );
};

export default BurgerBar;
