import React from 'react';
import * as MDIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import internet from '../../Assets/Images/Internet.jpg';
import internet1 from '../../Assets/Images/internet1.jpg';

const Internet = () => {
  return (
    <>
      {/* Enternet Container */}
      <div className='enternet-container mt-1'>
        <div
          className='hero min-h-screen bg-cover bg-left  md:bg-center bg-no-repeat w-full py-20 hidden md:block'
          style={{
            backgroundImage: `url(${internet})`
          }}
        >
          <div className='w-full h-screen  text-neutral-content items-start justify-center md:justify-start pl-0 md:pl-8 lg:pl-16  flex'>
            <div className=' mt-14 px-4 lg:px-8 text-left -ml-8'>
              <h1 className='mb-5 text-left text-4xl md:text-4xl lg:text-5xl font-heading font-extrabold px-10'>
                <h1 className='mb-3'>Age of</h1>
                <h1>Internet</h1>
              </h1>
              <p className='mb-5 text-3xl lg:text-3xl px-10 -mt-4 '>
                INDUSTRY 4.0
              </p>
              <div className='flex items-center justify-center gap-4'>
                <div className='flex items-center justify-center'>
                  <label
                    htmlFor='my-modal-5'
                    className=' link-secondary text-blue-600 text-base lg:text-lg font-link font-bold'
                  >
                    Learn more
                  </label>
                  <span className='ml-1'>
                    <MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
                  </span>
                </div>
                <div className='flex items-center justify-center'>
                  <Link
                    to='/tars-universe'
                    className=' link-secondary text-blue-600 text-base lg:text-lg font-link font-bold'
                  >
                    Explore
                  </Link>
                  <span className='ml-1'>
                    <MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className=' min-h-screen bg-cover bg-center  bg-no-repeat w-full py-20 block md:hidden'
          style={{
            backgroundImage: `url(${internet1})`
          }}
        >
          <div className='w-full h-screen  text-neutral-content  items-start justify-end  flex'>
            <div className='w-full md:w-[24rem] lg:w-[35rem] xl:w-[42rem] pr-0 xl:pr-24 -mt-8'>
              <h1 className='mb-5 text-left text-4xl md:text-4xl lg:text-5xl font-heading font-extrabold px-10'>
                <h1 className='mb-3'>Age of</h1>
                <h1>Internet</h1>
              </h1>
              <p className='mb-5 text-3xl lg:text-3xl px-10 -mt-4 '>
                INDUSTRY 4.0
              </p>
              <div className='flex items-center justify-start px-10 gap-4'>
                <div className='flex items-center justify-center'>
                  <label
                    htmlFor='my-modal-5'
                    className=' link-secondary text-blue-600 text-base lg:text-lg font-link font-bold'
                  >
                    Learn more
                  </label>
                  <span className='ml-1'>
                    <MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
                  </span>
                </div>
                <div className='flex items-center justify-center'>
                  <Link
                    to='/tars-universe'
                    className=' link-secondary text-blue-600 text-base lg:text-lg font-link font-bold'
                  >
                    Explore
                  </Link>
                  <span className='ml-1'>
                    <MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Container */}

      <label htmlFor='my-modal-5'>
        <input type='checkbox' id='my-modal-5' className='modal-toggle' />
        <div className='modal'>
          <div className='modal-box w-full lg:w-6/12 max-w-5xl'>
            <h3 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center font-bankgothic'>
              TARS UNIVERSE
            </h3>
            <p className='p-6 text-justify font-paragraph'>
              <span className='font-bankgothic'>“TARS UNIVERSE”</span> is the
              Universe of Engineering & Technology. In this online platform,
              students can get almost anything related to engineering and
              technology. It is named UNIVERSE because of its insane
              architecture of resource management systems ever designed before.
              This platform is designed for anyone interested to learn to
              engineer, create projects and love science fiction. Universe
              Learn, Universe Market & Universe Entertainment is the smart
              resource hub that made this platform enormous and resourceful in
              many brilliant perspectives. The overall architecture of the
              Universe Application is designed for curious students & gives them
              what they deserve and expect but can not explain. Once you are
              connected to the universe, you explore the next generation's
              learning techniques, technology, and the future, and we believe
              life is short. We must be a little faster to sustain ourselves in
              this industrial age.
            </p>
            <div className='modal-action'>
              {/* <label htmlFor='my-modal-5' className='btn'>
							Yay!
						</label> */}
            </div>
          </div>
        </div>
      </label>
    </>
  );
};

export default Internet;
