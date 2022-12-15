import { CSSProperties } from 'react';
import defaultStyleSheet from './InPageNavCSS/InPageNav.module.css';

export interface IInPageNav {
  style?: CSSProperties;
  className?: string;
  //sampleTextProp?: string | null;
}

const InPageNav: React.FC<IInPageNav> = ({ style, className }) => {
  return (
    <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${className ? className : ''}`}>
      <div className={defaultStyleSheet.container}>
        <div className={defaultStyleSheet.listContainer}>
          <ul className={defaultStyleSheet.list}>
            <li className={defaultStyleSheet.listItem}>
              <a className={`${defaultStyleSheet.listLink} SUBTITLE`}>關於靛青</a>
            </li>
            <li className={defaultStyleSheet.listItem}>
              <a className={`${defaultStyleSheet.listLink} SUBTITLE`}>服務項目</a>
            </li>
            <li className={defaultStyleSheet.listItem}>
              <a className={`${defaultStyleSheet.listLink} SUBTITLE`}>聯絡我們</a>
            </li>
          </ul>
          <div className={defaultStyleSheet.scrollbarWrapper}>
            <div className={defaultStyleSheet.scrollbarContainer}>
              <div className={defaultStyleSheet.scrollbar}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InPageNav;
