import 'aos/dist/aos.css';
import React, { CSSProperties, useEffect } from 'react';
import PrimaryFooter from '../../footers/primary/PrimaryFooter';
import PrimaryHeader from '../../headers/primary/PrimaryHeader';
import InputButtonAlpha from '../../inputs/button/alpha/InputButtonAlpha';
import InputButtonBeta from '../../inputs/button/beta/InputButtonBeta';
import InputEmailAlpha from '../../inputs/email/alpha/InputEmailAlpha';
import InputTelAlpha from '../../inputs/tel/alpha/InputTelAlpha';
import InputTextAlpha from '../../inputs/text/alpha/InputTextAlpha';
import InPageNav from '../../navigations/inPage/InPageNav';
import defaultStyleSheet from './PrimaryLayoutCSS/PrimaryLayout.module.css';

import AOS from 'aos';

export interface IPrimaryLayout {
  style?: CSSProperties;
  className?: string;
  children: React.ReactNode;
  home?: boolean;
  //sampleTextProp?: string | null;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ style, className, children, home }) => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  });

  return (
    <div style={style ? style : {}} className={`${defaultStyleSheet.wrapper} ${className ? className : ''}`}>
      <PrimaryHeader />
      <InPageNav />

      {children}
      <section className={defaultStyleSheet.contact} id="contact">
        <div className={`${defaultStyleSheet.contactBgWrapper} ${home ? defaultStyleSheet.home : defaultStyleSheet.notHome}`}>
          <div className={defaultStyleSheet.contactBgContainer}>
            <div className={defaultStyleSheet.contactBgLayer1}></div>
            <div className={defaultStyleSheet.contactBgLayer2}></div>
          </div>
        </div>
        <div className=" sm:ml-16 sm:mr-48 mt-36">
          <h3 className="SMALLTITLE text-center mb-12" style={{ color: 'white' }} data-aos="fade-up">
            打造專屬網站，與新世代接軌，在網路世界插旗！
          </h3>
          <form className={`${defaultStyleSheet.form} p-12 mx-4 sm:mx-auto`} data-aos="slide-up" data-aos-delay="100" data-aos-easing="ease-out">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:gap-x-7 ">
              <InputTextAlpha isRequired={true} fieldName="聯絡人" className=" " />
              <InputEmailAlpha isRequired={true} fieldName="E-mail" className="" />
              <InputTelAlpha isRequired={true} fieldName="電話" className=" " />
              <InputTextAlpha isRequired={true} fieldName="公司名稱" className=" " />
            </div>

            <label className="block col-span-2 mt-12">
              <p className="mb-2">
                簡述您的專案內容： <span style={{ color: 'red', verticalAlign: 'middle' }}>*</span>
              </p>
              <textarea className={`${defaultStyleSheet.textarea} py-2 px-5`} placeholder="請出入內容"></textarea>
            </label>

            <div className="col-span-2 mt-12">
              <p>
                您的預算是？ <span style={{ color: 'red', verticalAlign: 'middle' }}>*</span>
              </p>
              <small className="block mb-4" style={{ color: 'rgb(0, 0, 0, 0.5)' }}>
                請提供一個大約的範圍，利於我們前期討論及規劃
              </small>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <InputButtonAlpha className="md:w-32 lg:w-48" value="100萬以下" />
                <InputButtonAlpha className="md:w-32 lg:w-48" value="100 - 300萬" />
                <InputButtonAlpha className="md:w-32 lg:w-48" value="300萬以上" />
                <InputButtonAlpha className="md:w-32 lg:w-48" value="未設預算" />
              </div>
              <InputButtonBeta className="mx-auto mt-20 w-48" value="提交" />
            </div>
          </form>
        </div>
      </section>
      <PrimaryFooter />
    </div>
  );
};

export default PrimaryLayout;
