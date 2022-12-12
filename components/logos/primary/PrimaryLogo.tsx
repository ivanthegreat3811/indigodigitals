import Image from 'next/image';
import { CSSProperties } from 'react';
import defaultStyleSheet from './PrimaryLogoCSS/PrimaryLogo.module.css';

export interface IPrimaryLogo {
  style?: CSSProperties;
  className?: string;
  isActive?: boolean;
  //sampleTextProp?: string | null;
}

const PrimaryLogo: React.FC<IPrimaryLogo> = ({ style, className, isActive }) => {
  return (
    <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${className ? className : ''}`}>
      <h1 className={`${defaultStyleSheet.container} ${isActive && defaultStyleSheet.isActive}`}>
        <Image src="/images/logo/靛青英文logo.png" alt="" fill style={{ objectFit: 'contain', objectPosition: 'center' }} sizes={'33vw'} priority />
      </h1>
    </div>
  );
};

export default PrimaryLogo;
