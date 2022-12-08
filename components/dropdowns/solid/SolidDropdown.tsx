import { CSSProperties, useState } from 'react';
import defaultStyleSheet from './SolidDropdownCSS/SolidDropdown.module.css';

export interface ISolidDropdown {
  style?: CSSProperties;
  className?: string;
  isOpen?: boolean;
  title: string;
  list: { text: string; link?: string }[];
  //sampleTextProp?: string | null;
}

const SolidDropdown: React.FC<ISolidDropdown> = ({ style, className, title, list, isOpen }) => {
  const [isActive, setIsActive] = useState<boolean>(isOpen || false);

  return (
    <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${className ? className : ''}`}>
      <div className={defaultStyleSheet.container}>
        <div className={`${defaultStyleSheet.title}`} onClick={() => setIsActive(prev => !prev)}>
          {title}
          <span className={`${defaultStyleSheet.arrow} ${isActive ? defaultStyleSheet.isActive : ''}`}></span>
        </div>
      </div>
      <ul className={`${defaultStyleSheet.list} ${isActive ? defaultStyleSheet.isActive : ''}`}>
        {list.map(listItem => (
          <li key={listItem.text} className={defaultStyleSheet.listItem}>
            <a className={defaultStyleSheet.listLink} href={listItem.link ? listItem.link : ''}>
              {listItem.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolidDropdown;
