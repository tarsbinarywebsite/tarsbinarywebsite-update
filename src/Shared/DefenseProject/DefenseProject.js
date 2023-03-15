import React from 'react';
import * as MDIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import defense from '../../Assets/Images/defense.jpg';
const DefenseProject = () => {
  return (
    <>
      {/* Defense Projects Container */}
      <div className='defense-projects-container mt-1'>
        <div
          className='hero min-h-screen bg-cover bg-top bg-no-repeat w-full py-20 '
          style={{
            backgroundImage: `url(${defense})`
          }}
        >
          <div className='hero-content text-center text-neutral-content flex items-center justify-center mx-auto'>
            <div className='max-w-lg pt-[30rem] mx-auto'>
              <h1 className='mb-5 text-xl md:text-2xl lg:text-3xl font-heading font-extrabold text-red-700'>
                Defense Projects
              </h1>
              <p className='mb-5 font-paragraph'>
                <span className='font-couriernew '>TARS BINARY</span> designs
                and manufactures highly complex Software Defined Radio (SDR)
                systems for gathering, analyzing, and sharing signals
                intelligence and other complex needs of the Intelligence,
                Defense, and Security Communities.
              </p>
              <div className='flex items-center justify-center gap-4'>
                <div className='flex items-center justify-center'>
                  <label
                    htmlFor='defense-project-modal'
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
                    to='/defense-projects'
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

      <label htmlFor='defense-project-modal'>
        <input
          type='checkbox'
          id='defense-project-modal'
          className='modal-toggle'
        />
        <div className='modal pt-16'>
          <div className='modal-box w-full md:w-8/12 max-w-5xl bg-black text-white'>
            <h3 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center mt-5 text-red-600'>
              Defense Projects
            </h3>
            <p className='p-6  font-paragraph text-center text-sm'>
              <span className='font-couriernew'>TARS BINARY</span> designs and
              manufactures highly complex <b>Software Defined Radio (SDR)</b>{' '}
              systems for gathering, analyzing, and sharing signals intelligence
              and other complex needs of the Intelligence, Defense, and Security
              Communities. We work in cutting-edge software-defined radio
              technology, and our advanced SDR systems provide unmatched
              versatility and performance for mission-critical applications.
              <br />
              <br />
              With over three years of experience in the industry, we have a
              deep understanding of the unique requirements of our technical
              partners. Our team of experts is dedicated to delivering the
              highest quality products and solutions to support the success of
              your operations. Our systems are designed to withstand the
              toughest environments and provide mission-essential capabilities
              in even the most challenging conditions.
              <br />
              <br />
              <span className='font-couriernew'>TARS BINARY</span> is committed
              to staying at the forefront of technology and innovation. It is
              constantly pushing the boundaries of what is possible to provide
              you with the latest and most advanced solutions.
              <br />
              <br />
              Choose <span className='font-bold'>GLADE IV</span> for your
              software-defined radio needs, and benefit from decades of
              expertise and dedication to excellence. Contact us today to learn
              more and discuss your specific requirements.
            </p>
          </div>
        </div>
      </label>
    </>
  );
};

export default DefenseProject;
