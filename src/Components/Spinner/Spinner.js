import React from 'react';
// import { Triangle } from 'react-loader-spinner';
import tarslogo from '../../Assets/Images/logo-white.png';

const Spinner = () => {
  return (
    <>
      {/* Spinner Container */}

      <div className='w-full h-screen mx-auto  my-auto flex flex-col items-center justify-center bg-black '>
        <img
          src={tarslogo}
          alt=''
          className='w-20 md:w-28 lg:w-48 xl:w-60 2xl:w-72 -mt-20  '
          data-aos='zoom-in'
          data-aos-duration='3000'
        />
        {/* <h1 className='text-center font-bankgothic text-gray-500 text-3xl pb-[4rem]'>TARS BINARY</h1> */}
      </div>
    </>
  );
};

export default Spinner;
