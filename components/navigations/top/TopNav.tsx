import Link from 'next/link';
import { CSSProperties } from 'react';
import SolidDropdown from '../../dropdowns/solid/SolidDropdown';
import defaultStyleSheet from './TopNavCSS/TopNav.module.css';

export interface ITopNav {
  style?: CSSProperties;
  className?: string;
  isActive?: boolean;
  handleLinkClick?: () => void;
  //sampleTextProp?: string | null;
}

const TopNav: React.FC<ITopNav> = ({ style, className, isActive, handleLinkClick }) => {
  const componentHandleClick = () => {
    if (handleLinkClick) handleLinkClick();
    return;
  };
  return (
    <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${isActive ? defaultStyleSheet.isActive : ''} ${className ? className : ''}`}>
      <div className={defaultStyleSheet.container}>
        <nav className={defaultStyleSheet.nav}>
          <ul className={defaultStyleSheet.list}>
            <li className={defaultStyleSheet.listItem}>
              <Link className={defaultStyleSheet.listLink} onClick={componentHandleClick} href="#about">
                關於靛青
              </Link>
            </li>
            <li className={defaultStyleSheet.listItem}>
              <SolidDropdown
                title="服務項目"
                list={[
                  { text: '活動官網', link: '/event' },
                  { text: '一頁式網站' },
                  { text: '企業形象官網' },
                  { text: '電商購物車網站' },
                  { text: '雲地合作社' },
                ]}
              />
            </li>
            <li className={defaultStyleSheet.listItem}>
              <Link className={defaultStyleSheet.listLink} onClick={componentHandleClick} href="#service">
                靛青藝廊
              </Link>
            </li>
            <li className={defaultStyleSheet.listItem}>
              <a className={defaultStyleSheet.listLink} onClick={componentHandleClick} href="#contact">
                聯絡我們
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
