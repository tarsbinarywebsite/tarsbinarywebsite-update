import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import computerslide from '../../Assets/Images/computer-slide.jpg';
import electronicslide from '../../Assets/Images/electronic-slide.jpg';
import machineslide from '../../Assets/Images/machine-slide.jpg';

// Import Swiper styles
import { Link } from 'react-router-dom';
import { Autoplay, FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
const HomeSlider = () => {
  return (
    <>
      {/* Swiper Slider Container */}
      <div className='swiper-slider-container mt-2'>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false
          }}
          freeMode={true}
          pagination={{
            clickable: true
          }}
          centeredSlides={true}
          modules={[Autoplay, FreeMode, Pagination]}
          className='mySwiper'
          rView={2}
        >
          <div className='bg-yellow-300 border-4 border-yellow-300'>
            <SwiperSlide className=''>
              <Link to='/video'>
                <div
                  className='hero h-[6rem] md:h-[16rem] lg:h-[22rem] xl:h-[28rem] '
                  style={{ backgroundImage: `url(${electronicslide})` }}
                >
                  <div className='hero-overlay bg-opacity-60'></div>
                  <div className='hero-content text-center text-neutral-content w-full  h-[6rem] md:h-[16rem] lg:h-[22rem] xl:h-[28rem] flex items-end justify-start'>
                    <button className='bg-white text-black font-bold btn-xs rounded-xl hover:shadow hover:shadow-white'>
                      Stream Now
                    </button>
                  </div>
                </div>
                {/* <img src={electronicslide} alt='' /> */}
              </Link>
            </SwiperSlide>
          </div>
          <SwiperSlide className=''>
            <Link to='/video'>
              <div
                className='hero h-[6rem] md:h-[16rem] lg:h-[22rem] xl:h-[28rem]'
                style={{ backgroundImage: `url(${computerslide})` }}
              >
                <div className='hero-overlay bg-opacity-60'></div>
                <div className='hero-content text-center text-neutral-content w-full  h-[6rem] md:h-[16rem] lg:h-[22rem] xl:h-[28rem] flex items-end justify-start'>
                  <button className='bg-white text-black font-bold btn-xs rounded-xl hover:shadow hover:shadow-white'>
                    Stream Now
                  </button>
                </div>
              </div>
              {/* <img src={computerslide} alt='' /> */}
            </Link>
          </SwiperSlide>
          <SwiperSlide className=''>
            <Link to='/video'>
              <div
                className='hero h-[6rem] md:h-[16rem] lg:h-[22rem] xl:h-[28rem]'
                style={{ backgroundImage: `url(${machineslide})` }}
              >
                <div className='hero-overlay bg-opacity-60'></div>
                <div className='hero-content text-center text-neutral-content w-full h-[6rem] md:h-[16rem] lg:h-[22rem] xl:h-[28rem] flex items-end justify-start'>
                  <button className='bg-white text-black font-bold btn-xs rounded-xl hover:shadow hover:shadow-white'>
                    Stream Now
                  </button>
                </div>
              </div>
              {/* <img src={machineslide} alt='' /> */}
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeSlider;
