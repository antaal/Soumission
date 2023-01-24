import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/thumbs/thumbs.min.css';

import '../assets/Front/css/styles.css'
// import required modules
import { Navigation } from "swiper";

export default function BootstrapCarouselComponent() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://www.studyrama.com/pro/sites/default/files/styles/content/public/articles/demande-en-ligne-ptp.png?itok=qD6PMZFb"
            alt="img1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.lemag-juridique.com/medias/org-1674/shared/per5.jpg"
            alt="img2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.transitionspro-bfc.fr/wp-content/uploads/2020/04/glenn-carstens-peters-npxXWgQ33ZQ-unsplash-scaled.jpg"
            alt="img3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
