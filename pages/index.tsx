import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import styleSheet from '../public/styles/pages/home/home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  // 1.
  // 2. 分main中共有幾個section，並除在component上
  // 3. 取的main中各個section的 offsetHeight、clientHeight
  // 4. 當section在screen中出現至一半
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  });

  return (
    <>
      <div id={styleSheet.keyVision} style={{ width: '100vw', height: '100vh', backgroundColor: 'whitesmoke' }}>
        <div id={styleSheet.bg1Wrapper}>
          <div id={styleSheet.bg1Container}>
            <div id={styleSheet.bg1Layer1}></div>
            <div id={styleSheet.bg1Layer2}></div>
          </div>
        </div>
      </div>
      <main>
        <section id="about" className={styleSheet.section1}>
          <h2 className="text-center LARGETITLE text-secondary my-16">關於靛青</h2>
          <div className={`${styleSheet.section1_contentBox} flex flex-row-reverse`}>
            <div className={`${styleSheet.section1_imageBox} relative `} data-aos="fade-up">
              <Image src="/images/greatMen/TheGhost1.jpeg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <div className={`${styleSheet.section1_paragraphContainer} `}>
              <p className={`${styleSheet.section1_paragraph}  CONTENT`} data-aos="slide-right" data-aos-delay="50">
                <br /> 走老路，到不了新地方，一直墨守成規不會一鳴驚人！
                <br /> 現今網路世代來臨，人們不再只是到實體店面消費、根據體驗給出評價，而 是更喜愛在網路上搜尋相關消息來作為判斷依據。
                <br /> 因此網路形象變得無比重要。
                <br /> 如何用一個網頁打造出專屬的品牌形象？
                <br />
                <br /> 靛青數位利用科技配合設計能力，搭配一條龍服務包含註冊網域、雲端主機 租用等，看不懂也沒關係！
                <br /> 靛青數位替你打造新世代企業形象！
              </p>
            </div>
          </div>
        </section>

        <section id={styleSheet.service} className="">
          <div id={styleSheet.bg2Wrapper}>
            <div id={styleSheet.bg2Container}>
              <div id={styleSheet.bg2Layer1}></div>
              <div id={styleSheet.bg2Layer2}></div>
            </div>
          </div>
          <h2 className="LARGETITLE text-center  text-success py-7 lg:py-11">服務項目</h2>
          <div className="border-b-4 border-b-success mx-4 md:ml-16 sm:mr-64" data-aos="slide-up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8 lg:mt-28">
              <div className="h-64 bg-gray-light flex items-center justify-center">
                <h3 className="text-center text-success">網站設計製作</h3>
              </div>
              <div className="h-64 bg-gray-light flex items-center justify-center">
                <h3 className="text-center text-success">網域註冊及購買</h3>
              </div>
              <div className="h-64 bg-gray-light flex items-center justify-center">
                <h3 className="text-center text-success">網站信箱設置</h3>
              </div>
              <div className="h-64 bg-gray-light flex items-center justify-center">
                <h3 className="text-center text-success">雲端主機租用</h3>
              </div>
            </div>
            <Link href="#" className="text-secondary block my-8">
              前往購買網域<span className={`${styleSheet.arrowRight} ml-1`}></span>
            </Link>
          </div>
        </section>

        <section id={styleSheet.websiteCard}>
          <div id={styleSheet.bg3Wrapper}>
            <div id={styleSheet.bg3Container}>
              <div id={styleSheet.bg3Layer1}></div>
              <div id={styleSheet.bg3Layer2}></div>
            </div>
          </div>
          <div className=" sm:ml-16 sm:mr-64 mx-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-center SUBTITLE mt-16 mb-4 text-secondary">活動網站</h3>
                <div className={`${styleSheet.section3_card}`}>
                  <div className={`${styleSheet.section3_imageBox}`}>
                    <img src="/images/vertical/活動網站.jpg" alt="" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                  </div>
                  <div className={styleSheet.maskWrapper}>
                    <div className={styleSheet.maskContainer}>
                      <article className={styleSheet.maskContent}>
                        <h3 className={`${styleSheet.maskTitle} SUBTITLE`}>活動網站</h3>
                        <p className={`${styleSheet.maskText} CONTENT`}>
                          最了解你的設計團隊，
                          <br /> 做出高互動性的網站。
                          <br /> 用科技結合設計，
                          <br /> 讓你與眾不同。
                        </p>
                      </article>
                      <span role="button" className={`${styleSheet.arrowRight}  ${styleSheet.maskArrow}`}></span>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-center SUBTITLE mt-16 mb-4 text-secondary">一頁式網站</h3>
                <div className={`${styleSheet.section3_card}`}>
                  <div className={`${styleSheet.section3_imageBox}`}>
                    <img src="/images/vertical/一頁式網站.jpg" alt="" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                  </div>
                  <div className={styleSheet.maskWrapper}>
                    <div className={styleSheet.maskContainer}>
                      <article className={styleSheet.maskContent}>
                        <h3 className={`${styleSheet.maskTitle} SUBTITLE`}>一頁式網站</h3>
                        <p className={`${styleSheet.maskText} CONTENT`}>
                          最了解你的設計團隊，
                          <br /> 做出高互動性的網站。
                          <br /> 用科技結合設計，
                          <br /> 讓你與眾不同。
                        </p>
                      </article>
                      <span role="button" className={`${styleSheet.arrowRight}  ${styleSheet.maskArrow}`}></span>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-center SUBTITLE mt-16 mb-4 text-secondary">形象官網</h3>
                <div className={`${styleSheet.section3_card}`}>
                  <div className={`${styleSheet.section3_imageBox}`}>
                    <img src="/images/vertical/形象官網.jpg" alt="" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                  </div>
                  <div className={styleSheet.maskWrapper}>
                    <div className={styleSheet.maskContainer}>
                      <article className={styleSheet.maskContent}>
                        <h3 className={`${styleSheet.maskTitle} SUBTITLE`}>形象官網</h3>
                        <p className={`${styleSheet.maskText} CONTENT`}>
                          最了解你的設計團隊，
                          <br /> 做出高互動性的網站。
                          <br /> 用科技結合設計，
                          <br /> 讓你與眾不同。
                        </p>
                      </article>
                      <span role="button" className={`${styleSheet.arrowRight}  ${styleSheet.maskArrow}`}></span>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-center SUBTITLE mt-16 mb-4 text-secondary">電商網站</h3>
                <div className={`${styleSheet.section3_card}`}>
                  <div className={`${styleSheet.section3_imageBox}`}>
                    <img src="/images/vertical/電商網站.jpg" alt="" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                  </div>
                  <div className={styleSheet.maskWrapper}>
                    <div className={styleSheet.maskContainer}>
                      <article className={styleSheet.maskContent}>
                        <h3 className={`${styleSheet.maskTitle} SUBTITLE`}>電商網站</h3>
                        <p className={`${styleSheet.maskText} CONTENT`}>
                          最了解你的設計團隊，
                          <br /> 做出高互動性的網站。
                          <br /> 用科技結合設計，
                          <br /> 讓你與眾不同。
                        </p>
                      </article>
                      <span role="button" className={`${styleSheet.arrowRight}  ${styleSheet.maskArrow}`}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

Home.getLayout = page => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
