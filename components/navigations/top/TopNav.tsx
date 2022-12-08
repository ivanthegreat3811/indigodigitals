import { CSSProperties } from 'react';
import SolidDropdown from '../../dropdowns/solid/SolidDropdown';
import defaultStyleSheet from './TopNavCSS/TopNav.module.css';

export interface ITopNav {
  style?: CSSProperties;
  className?: string;
  isActive?: boolean;
  //sampleTextProp?: string | null;
}

const TopNav: React.FC<ITopNav> = ({ style, className, isActive }) => {
  return (
    <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${isActive ? defaultStyleSheet.isActive : ''} ${className ? className : ''}`}>
      <div className={defaultStyleSheet.container}>
        <nav className={defaultStyleSheet.nav}>
          <ul className={defaultStyleSheet.list}>
            <li className={defaultStyleSheet.listItem}>
              <a className={defaultStyleSheet.listLink} href="#">
                關於靛青
              </a>
            </li>
            <li className={defaultStyleSheet.listItem}>
              <SolidDropdown
                title="服務項目"
                list={[{ text: '活動官網' }, { text: '一頁式網站' }, { text: '企業形象官網' }, { text: '電商購物車網站' }, { text: '雲地合作社' }]}
              />
            </li>
            <li className={defaultStyleSheet.listItem}>
              <a className={defaultStyleSheet.listLink} href="#">
                靛青藝廊
              </a>
            </li>
            <li className={defaultStyleSheet.listItem}>
              <a className={defaultStyleSheet.listLink} href="#">
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
