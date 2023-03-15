import React from 'react';
import Slider from 'react-slick';
import computerSlide from '../../Assets/Images/computer-slide.jpg';
import electronicSlide from '../../Assets/Images/electronic-slide.jpg';
import machineSlide from '../../Assets/Images/machine-slide.jpg';

const HomeVideoSlider = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '290px',
    slidesToShow: 1,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  const smsettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <>
      {/* Home Video Slider Container */}
      <div className='home-video-slider-container max-w-screen mt-1 '>
        <div className='hidden lg:block'>
          <Slider {...settings} className=''>
            <div>
              <img src={computerSlide} alt='' className='h-[35rem] object-fill object-center' />
            </div>
            <div>
              <img src={machineSlide} alt='' className='h-[35rem] object-fill object-center' />
            </div>
            <div>
              <img src={electronicSlide} alt='' className='h-[35rem] object-fill object-center' />
            </div>
          </Slider>
        </div>

        <div className='block lg:hidden'>
          <Slider {...smsettings} className=''>
            <div>
              <img src={computerSlide} alt='' className='object-fill object-center' />
            </div>
            <div>
              <img src={machineSlide} alt='' className='object-fill object-center' />
            </div>
            <div>
              <img src={electronicSlide} alt='' className='object-fill object-center' />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeVideoSlider;
