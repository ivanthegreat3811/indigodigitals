import { CSSProperties } from 'react';
import defaultStyleSheet from './FloatingDropdownCSS/FloatingDropdown.module.css';

export interface IFloatingDropdown {
  style?: CSSProperties;
  className?: string;
  //sampleTextProp?: string | null;
}

const FloatingDropdown: React.FC<IFloatingDropdown> = ({ style, className }) => {
  return <div style={style ? style : {}} className={`${defaultStyleSheet.container} ${className ? className : ''}`}></div>;
};

export default FloatingDropdown;
