import { Helmet } from 'react-helmet-async';
import BannerSection from '../Component/BannerSection';
import FaqSection from '../Component/FaqSection';
import FooterSection from '../Component/FooterSection';
import TabsSection from '../Component/TabsSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Job Portal || Home </title>
      </Helmet>
      <BannerSection />
      <TabsSection />
      <FaqSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
