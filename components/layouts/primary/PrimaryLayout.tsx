import React, { CSSProperties } from 'react';
import PrimaryFooter from '../../footers/primary/PrimaryFooter';
import PrimaryHeader from '../../headers/primary/PrimaryHeader';
import defaultStyleSheet from './PrimaryLayoutCSS/PrimaryLayout.module.css';

export interface IPrimaryLayout {
  style?: CSSProperties;
  className?: string;
  children: React.ReactNode;
  //sampleTextProp?: string | null;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ style, className, children }) => {
  return (
    <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${className ? className : ''}`}>
      <PrimaryHeader />
      {children}
      <PrimaryFooter />
    </div>
  );
};

export default PrimaryLayout;
