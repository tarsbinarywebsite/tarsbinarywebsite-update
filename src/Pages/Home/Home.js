import React from 'react';
import BottomContent from '../../Shared/BottomContent/BottomContent';
import DefenseProject from '../../Shared/DefenseProject/DefenseProject';
import Engineering from '../../Shared/Engineering/Engineering';
import Entertainment from '../../Shared/Entertainment/Entertainment';
import Getnow from '../../Shared/Getnow/Getnow';
import Header from '../../Shared/Header/Header';
import HomeSlider from '../../Shared/HomeSlider/HomeSlider';
// import HomeVideoSlider from '../../Shared/HomeVideoSlider/HomeVideoSlider';
import Internet from '../../Shared/Internet/Internet';

const Home = () => {
  window.scrollTo({ top: 0, left: 0 });

  return (
    <>
      {/* Home Container */}

      <div className='home-container'>
        {/* Header Section */}
        <section className='header-section'>
          <Header />
        </section>
        {/* GetNow Section */}
        <section className='getnow-section'>
          <Getnow />
        </section>
        {/* Defense Projects Section */}
        <section className='defense-projects-section'>
          <DefenseProject />
        </section>
        {/* Engineering Section */}
        <section className='engineering-section'>
          <Engineering />
        </section>
        {/* Internet Section */}
        <section className='internet-section'>
          <Internet />
        </section>
        {/* Entertainment Section */}
        <section className='entertainment-section'>
          <Entertainment />
        </section>
        {/* Home Vedio Slider Section */}
        <section className='home-video-section'>
          {/* <HomeVideoSlider /> */}
          <HomeSlider />
        </section>
        {/* Bottom Content Section */}
        <section className='bottom-content-section'>
          <BottomContent />
        </section>
      </div>
    </>
  );
};

export default Home;
