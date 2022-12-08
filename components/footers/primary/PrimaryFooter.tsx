import { CSSProperties } from 'react';
import defaultStyleSheet from './PrimaryFooterCSS/PrimaryFooter.module.css';

export interface IPrimaryFooter {
  style?: CSSProperties;
  className?: string;
  //sampleTextProp?: string | null;
}

const PrimaryFooter: React.FC<IPrimaryFooter> = ({ style, className }) => {
  return <div style={style ? style : {}} className={`${defaultStyleSheet.container} ${className ? className : ''}`}></div>;
};

export default PrimaryFooter;
