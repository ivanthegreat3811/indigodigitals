import { CSSProperties } from 'react';
import defaultStyleSheet from './BaseTemplateCSS/BaseTemplate.module.css';

export interface IBaseTemplate {
  style?: CSSProperties;
  className?: string;
  //sampleTextProp?: string | null;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ style, className }) => {
  return <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${className ? className : ''}`}></div>;
};

export default BaseTemplate;
