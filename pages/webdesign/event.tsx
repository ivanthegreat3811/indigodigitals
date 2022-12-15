import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import AlphaWorkflow from '../../components/workflows/alpha/AlphaWorkflow';
import styleSheet from '../../public/styles/pages/event/event.module.css';
import { NextPageWithLayout } from '../page';

const EventWebsite: NextPageWithLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  });
  return (
    <div>
      <div className={styleSheet.carouselWrapper}>
        <div className={styleSheet.carouselContainer}>
          <div className={styleSheet.imageBox}>
            <Image src="/images/indigodigitals/website_event.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>
      </div>
      <main>
        <section>
          <div>
            <h2 className="text-center LARGETITLE text-secondary my-12">委託流程</h2>
            <div>
              <AlphaWorkflow flowList={['了解活動詳細內容', '確認風格功能', '整體報價', '製作測試', '成果驗收']} />
            </div>
          </div>
        </section>

        <section id="market" className={styleSheet.market}>
          <div data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
            <div className={styleSheet.bg2Wrapper}>
              <div className={styleSheet.bg2Container}>
                <div className={styleSheet.bg2Layer1}></div>
                <div className={styleSheet.bg2Layer2}></div>
                <div className={styleSheet.bg2Layer3}></div>
              </div>
            </div>
          </div>

          <h2 className="text-center LARGETITLE" data-aos="zoom-in">
            活動行銷
          </h2>
          <div className={styleSheet.marketContent}>
            <p className="CONTENT p-8 w-fit bg-primary_transparent text-white" data-aos="fade-right">
              在網路上售票、抑或是不售票的活動及展覽等，該如何讓社會大眾看見並且提 起興致呢？
              <br />
              當一場活動要執行前，勢必需要一個讓參與者可以看懂的活動規則及詳細說明。 而該如何讓民眾看了網站會想到現場參加，這就是我們的工作了！
              <br />
              整合市場分析、及使用者體驗相關流程，搭配SEO網站行銷策略。 一個最貼近活動主旨的網站，一個互動性高的活動官網，絕對是你的首選！
            </p>
          </div>
        </section>

        <section id="tech" className={styleSheet.tech}>
          <h2 className="text-center LARGETITLE text-secondary my-40" data-aos="zoom-in">
            動態技術
          </h2>
          <div className={styleSheet.techContent}>
            <p className="CONTENT p-8 w-fit bg-primary_transparent text-white" data-aos="fade-left">
              融合動態技術，網站可以怎麼做？ 配合活動內容主旨，做出互動性高的動態網站，讓人從開啟網站開始參與活動！
              <br />
              我們擁有與科技結合的動態技術，無論你想怎麼做，全客製化服務做出你最滿意 的活動官網！
              <br />
              想在網頁上做個與活動主旨相關的小遊戲？想要替活動場地做個全景導覽？想替 活動增添一些科技數位相關互動？ 只有你想不到，沒有我們做不到！
              <br />
              提出活動主旨並進行討論，我們也會提出專業建議，幫助您發想網站全貌，一同 共製出最適合的活動網站！
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventWebsite;

EventWebsite.getLayout = page => <PrimaryLayout>{page}</PrimaryLayout>;
