import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
      >
        <SwiperSlide>
          <div className="flex justify-center items-center w-9/12 m-auto text-center py-[5rem]"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center w-9/12 m-auto text-center py-[5rem]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-9/12 m-auto text-center py-[5rem]"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSection;
