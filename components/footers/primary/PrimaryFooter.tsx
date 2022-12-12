import { CSSProperties } from 'react';
import defaultStyleSheet from './PrimaryFooterCSS/PrimaryFooter.module.css';

export interface IPrimaryFooter {
  style?: CSSProperties;
  className?: string;
  //sampleTextProp?: string | null;
}

const PrimaryFooter: React.FC<IPrimaryFooter> = ({ style, className }) => {
  return (
    <footer style={style ? style : {}} className={`${defaultStyleSheet.container} ${className ? className : ''}`}>
      <div className="border-b mt-8 md:mt-16 pb-8 mb-4" style={{ borderColor: '#AAAAAA' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 w-9/12 mx-auto">
          <div className="md:mx-auto mt-8">
            <small className="block">E-mail</small>
            <small className="block">ivan@redblackdesigns.com</small>
          </div>
          <div className="md:mx-auto  mt-8">
            <small className="block">電話</small>
            <small className="block">02-27882000</small>
          </div>
          <div className="md:mx-auto  mt-8">
            <small className="block">地址</small>
            <small className="block">臺北市中正區100重慶南路一段119號</small>
          </div>
        </div>
      </div>
      <small className="block text-center mb-12">靛青數位科技有限公司</small>
    </footer>
  );
};

export default PrimaryFooter;
