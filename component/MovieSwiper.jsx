'use client'
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
const MovieSwiper = () => {
   return (
      <Swiper
      modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
/*       pagination={{ clickable: true }} */
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="img/slide01.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="img/slide02.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="img/slide03.jpeg" alt="" /></SwiperSlide>
    {/*   <SwiperSlide><img src="img/slide04.jpeg" alt="" /></SwiperSlide> */}
    
    </Swiper>
   );
};

export default MovieSwiper;