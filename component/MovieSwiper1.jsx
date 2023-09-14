'use client'
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
const MovieSwiper1 = () => {
   return (
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      loop={true}
     
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="img/230830_640x480.jpg" alt="banner1" /></SwiperSlide>
      <SwiperSlide><img src="img/230829_640x480.jpg" alt="banner2" /></SwiperSlide>
     
      <SwiperSlide><img src="img/230830_640x480.jpg" alt="banner4" /></SwiperSlide>
      <SwiperSlide><img src="img/230829_640x480.jpg" alt="banner3" /></SwiperSlide>
    {/*   <SwiperSlide><img src="img/slide04.jpeg" alt="" /></SwiperSlide> */}
    
    </Swiper>
   );
};

export default MovieSwiper1;