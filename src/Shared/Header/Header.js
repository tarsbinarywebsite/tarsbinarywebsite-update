import React from 'react';
import * as MDIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import banner from '../../Assets/Images/banner.jpg';
import phone from '../../Assets/Images/phone.png';

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <div
          className='hero min-h-screen'
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className='hero-overlay bg-blue-900 bg-opacity-10'></div>
          <div className=' text-center text-neutral-content flex flex-col items-start '>
            <div className=' mt-[4rem] 2xl:mt-0'>
              <Link to='/tars-universe'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bankgothic font-extrabold'>
                  TARS UNIVERSE
                </h1>
              </Link>
              <p className='py-6 text-base md:text-xl lg:text-2xl -mt-2 font-paragraph'>
                Learn | Create | Connect
              </p>
              <div className='flex justify-center text-xs gap-4 -mt-3'>
                <div className='flex items-center'>
                  {/* The button to open modal */}
                  <label
                    htmlFor='header-modal'
                    className=' link-secondary text-blue-600 text-base lg:text-lg font-link font-bold'
                  >
                    Learn more
                  </label>
                  <span className='ml-1'>
                    <MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
                  </span>
                </div>
                <div className='flex items-center'>
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
            <div className='w-[11rem] lg:w-[13rem] xl:w-[14rem] 2xl:w-[15rem] mx-auto pt-[5rem]'>
              <img src={phone} alt='' className='w-full' />
            </div>
          </div>
        </div>
      </div>
      {/* Modal Container */}

      <label htmlFor='header-modal'>
        <input type='checkbox' id='header-modal' className='modal-toggle' />
        <div className='modal pt-16'>
          <div className='modal-box w-full md:w-7/12 max-w-5xl'>
            <h3 className='text-lg md:text-xl lg:text-2xl xl:text-4xl font-extrabold text-center font-bankgothic text-[#00aeef] mt-5'>
              TARS UNIVERSE
            </h3>
            <p className='p-6  font-paragraph text-center'>
              <span className='font-bankgothic text-lg '>TARS UNIVERSE</span> is
              an innovative online platform designed exclusively for engineering
              and technology students seeking to expand their knowledge and
              skills. It features Universe{' '}
              <span className='font-bold'>
                Learn, Universe Market, Universe Entertainment, and Engineering
                Volunteers,
              </span>{' '}
              all offering a comprehensive experience for curious students.
              <br />
              <br />
              <span className='font-bold'>Universe Learn</span> is an online
              library of department-based engineering education that provides a
              complete guideline for understanding various engineering subjects.
              Its courses are designed with a dramatic conceptual structure to
              make learning an enjoyable experience.
              <br />
              <br />
              <span className='font-bold'>Universe Market</span> is a platform
              for engineering students to showcase and purchase project tools,
              compete with others worldwide, and earn rewards and awards for
              valuable work. It also provides project templates and a resource
              hub for students to learn from others and create unique projects.
              <br />
              <br />
              <span className='font-bold'>Universe Entertainment</span> is a
              library of original content spanning various genres, including
              science and technology-based drama, engineering conceptual
              documentaries, and original movies and drama series. Its
              commitment to exploring science and technology is evident in every
              piece of content, making it an excellent platform for viewers to
              learn about the latest engineering developments and understand how
              they can impact society.
              <br />
              <br />
              <span className='font-bold'>Universe Volunteers</span> is a unique
              opportunity for students interested in engineering to connect with
              the engineering community, track their work, and participate in
              engineering events.
              <span className='font-bankgothic text-lg '>TARS UNIVERSE</span> is
              easily accessible through the App Store and Google Play, making it
              convenient for students to access the platform from anywhere,
              anytime. Join{' '}
              <span className='font-bankgothic text-lg '>TARS UNIVERSE</span>{' '}
              today and take the first step towards a fulfilling career in
              engineering!
            </p>
          </div>
        </div>
      </label>
    </>
  );
};

export default Header;
