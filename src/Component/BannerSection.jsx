import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Lottie from 'lottie-react';

import WebDevelopment from '../assets/Animation - 1699148916390.json';
import GraphicDesign from '../assets/Animation - 1699149363148.json';
import DigitalMarketer from '../assets/Animation - 1699149410278.json';

const BannerSection = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="my-20"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-center lg:flex-row lg:justify-evenly lg:items-center px-10">
            <div className="p-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold tracking-widest text-colorTwo">
                Web Development
              </h1>
            </div>
            <div className="w-1/3">
              <Lottie animationData={WebDevelopment} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-center lg:flex-row lg:justify-evenly lg:items-center px-10">
            <div className="w-1/3">
              <Lottie animationData={GraphicDesign} />
            </div>
            <div className="p-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold tracking-widest text-colorTwo">
                Graphic Designer
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-center lg:flex-row lg:justify-evenly lg:items-center px-10">
            <div className="p-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold tracking-widest text-colorTwo">
                Digital marketer
              </h1>
            </div>
            <div className="w-1/3">
              <Lottie animationData={DigitalMarketer} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSection;
