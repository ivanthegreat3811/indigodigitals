import Image from 'next/image';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
const Home: NextPageWithLayout = () => {
  // 1.
  // 2. 分main中共有幾個section，並除在component上
  // 3. 取的main中各個section的 offsetHeight、clientHeight
  // 4. 當section在screen中出現至一半

  return (
    <>
      <div id="keyVision" style={{ width: '100vw', height: '95vh', backgroundColor: 'whitesmoke' }}></div>
      <main>
        <section>
          <h2 className="text-center LARGETITLE text-secondary">關於靛青</h2>
          <div>
            <div className="relative">
              <Image src="/images/TheGhost1.jpeg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <p></p>
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
