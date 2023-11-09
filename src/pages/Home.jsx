import { Helmet } from 'react-helmet-async';
import BannerSection from '../Component/BannerSection';
import FaqSection from '../Component/FaqSection';
import FooterSection from '../Component/FooterSection';
import TabsSection from '../Component/TabsSection';
import SliderSection from '../Component/SliderSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Job Portal || Home </title>
      </Helmet>
      <BannerSection />
      <TabsSection />
      <FaqSection />
      <SliderSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
