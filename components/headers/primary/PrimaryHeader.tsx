import { CSSProperties, useState } from 'react';
import BurgerBar from '../../bars/burger/BurgerBar';
import PrimaryLogo from '../../logos/primary/PrimaryLogo';
import TopNav from '../../navigations/top/TopNav';
import defaultStyleSheet from './PrimaryHeaderCSS/PrimaryHeader.module.css';

export interface IPrimaryHeader {
  style?: CSSProperties;
  className?: string;
  //sampleTextProp?: string | null;
}

const PrimaryHeader: React.FC<IPrimaryHeader> = ({ style, className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${isMenuOpen && defaultStyleSheet.isActive} ${className ? className : ''}`}>
      <div className={defaultStyleSheet.container}>
        <TopNav isActive={isMenuOpen} handleLinkClick={() => setIsMenuOpen(false)} />
        <header className={`${defaultStyleSheet.header} ${isMenuOpen && defaultStyleSheet.isActive}`}>
          <BurgerBar className={defaultStyleSheet.burgerBar} isActive={isMenuOpen} handleClick={() => setIsMenuOpen(prev => !prev)} />
          <PrimaryLogo className={`${defaultStyleSheet.logo} ${isMenuOpen && defaultStyleSheet.isActive}`} isActive={isMenuOpen} />
          <div>{!isMenuOpen && <div></div>}</div>
        </header>
      </div>
    </div>
  );
};

export default PrimaryHeader;
