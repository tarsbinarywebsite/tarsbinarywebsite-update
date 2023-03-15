import React from 'react';
import bgAbout from '../../Assets/Images/bgAbout.jpg';
// import bgAbout2 from '../../Assets/Images/bgAbout2.jpg';
import logoWhite from '../../Assets/Images/logo-white.png';

const About = () => {
  window.scrollTo({ top: 0, left: 0 });

  return (
    <>
      {/* About page Container */}
      <div className='about-page-container'>
        <div
          className='hero min-h-screen bg-cover bg-fixed'
          style={{
            backgroundImage: `url(${bgAbout})`
          }}
        >
          {/* <div className='hero-overlay bg-opacity-60'></div> */}
          <div className='hero-content text-center text-neutral-content'>
            <div className='max-w-4xl  flex items-center justify-center flex-col'>
              <div
                className='w-[16rem] md:w-[20rem] lg:w-[24rem] mx-auto flex items-center justify-center h-screen my-auto'
                data-aos='zoom-in'
                data-aos-duration='1000'
              >
                <img src={logoWhite} alt='' className=' ' />
              </div>
              <div className='flex flex-col  items-center justify-center mb-96'>
                {/* <img src={logoWhite} alt='' className='h-48' /> */}
                <p
                  className='font-paragraph text-sm md:text-base lg:text-2xl my-auto'
                  data-aos='fade-up'
                  data-aos-duration='2000'
                >
                  <span className='font-couriernew '>TARS BINARY</span> is a
                  technology company that specializes in designing and
                  developing projects for the Department of Defense, military
                  technology, and other military-grade projects. Its most
                  popular project is{' '}
                  <span className='font-bankgothic'>“TARS UNIVERSE”</span>, an
                  online platform for students to learn about engineering and
                  technology. The platform is divided into three sections:
                  Universe Learn, Universe Market, and Universe Entertainment,
                  making it a comprehensive resource for students.{' '}
                  <span className='font-couriernew '>TARS BINARY</span>'s focus
                  is on providing effective education for the Industrial Age.
                </p>
                <br />
                <br />
                <p
                  className='font-paragraph text-sm md:text-base lg:text-2xl my-auto'
                  data-aos='fade-up'
                  data-aos-duration='2000'
                >
                  The company has a team of experienced experts who have a deep
                  understanding of the technical requirements and are dedicated
                  to delivering high-quality products and solutions. They work
                  closely with the Department of Defense to develop and
                  implement advanced systems that meet the specific needs of the
                  military.
                </p>
                <br />
                <br />
                <p
                  className='font-paragraph text-sm md:text-base lg:text-2xl my-auto'
                  data-aos='fade-up'
                  data-aos-duration='2000'
                >
                  In addition to its work in the military sector,{' '}
                  <span className='font-couriernew '>TARS BINARY</span>
                  has also developed{' '}
                  <span className='font-bankgothic'>“TARS UNIVERSE”</span>, an
                  online platform for students to learn about engineering and
                  technology. The platform is divided into three sections:
                  Universe Learn, Universe Market, and Universe Entertainment,
                  providing a comprehensive resource for students. Through{' '}
                  <span className='font-bankgothic'>“TARS UNIVERSE”</span>, the
                  company aims to provide effective education for the Industrial
                  Age and help equip students with the skills they need to
                  succeed in their future careers.
                </p>
                <br />
                <br />
                <p
                  className='font-paragraph text-sm md:text-base lg:text-2xl   my-auto'
                  data-aos='fade-up'
                  data-aos-duration='2000'
                >
                  Overall, <span className='font-couriernew '>TARS BINARY</span>{' '}
                  is a leading technology company that focuses on providing
                  innovative solutions for the military and advancing education
                  in engineering and technology. Its team of experts and
                  advanced technology make it a valuable partner for the
                  Department of Defense and a leader in the field of SDR
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
