import React from 'react';
import * as MDIcons from 'react-icons/md';
// import getnow from '../../Assets/Images/getnow.jpg';
import getnow1 from '../../Assets/Images/getnow1.png';
import logoBlack from '../../Assets/Images/logo-black.png';

const Getnow = () => {
  return (
    <>
      <div className='getnow-container mt-2'>
        {/* <div
					className='hero min-h-screen bg-cover h-full bg-no-repeat w-full py-20 hidden md:block'
					style={{
						backgroundImage: `url(${getnow})`
					}}
				>
					<div className=''></div>
					<div className='hero-content text-center text-neutral-content flex items-center justify-center'>
						<div className='max-w-xl mt-[20rem] xl:mt-[16rem]'>
							<h1 className='mb-5 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold'>
								Get Now.
							</h1>
							<p className='mb-5 font-paragraph'>
								TARS BINARY is a technology company working on designing and
								developing various Defense Projects, military mission control
								technology, and several projects in the military grade. The
								“TARS UNIVERSE” project is also a popular TARS BINARY project.
							</p>
							<div className='flex items-center justify-center'>
								<a
									href='/'
									className=' link-secondary text-blue-600 text-base lg:text-lg font-link font-bold'
								>
									Learn more
								</a>
								<span className='ml-1'>
									<MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
								</span>
							</div>
						</div>
					</div>
				</div> */}
        {/* <div
					className='hero min-h-screen bg-no-repeat w-full  hidden md:block'
					style={{
						backgroundImage: `url(${getnow})`
					}}
				>
					 <div className='hero-content text-center text-neutral-content'>
						<div className='max-w-md'>
							<h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
							<p className='mb-5'>
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
							<button className='btn btn-primary'>Get Started</button>
						</div>
					</div> */}

        <div
          className='hero min-h-screen bg-cover h-full bg-no-repeat w-full py-20  '
          style={{
            backgroundImage: `url(${getnow1})`
          }}
        >
          <div className=''></div>
          <div className='hero-content text-center text-neutral-content'>
            <div className='max-w-xl mt-[20rem]'>
              <h1 className='mb-5 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold'>
                Get Now.
              </h1>
              <p className='mb-5 font-paragraph'>
                <span className='font-couriernew '>TARS BINARY</span> is a
                technology company that specializes in designing and developing
                projects for the Department of Defense, military technology, and
                other military-grade projects. Its most popular project is{' '}
                <span className='font-bankgothic'>“TARS UNIVERSE”</span> an
                online platform for students to learn about engineering and
                technology. The platform is divided into three sections:
                Universe Learn, Universe Market, and Universe Entertainment,
                making it a comprehensive resource for students.{' '}
                <span className='font-couriernew '>TARS BINARY</span>'s focus is
                on providing effective education for the Industrial Age.
              </p>
              <div className='flex items-center justify-center'>
                <label
                  htmlFor='getnow-modal'
                  className=' link-secondary text-blue-600 text-base lg:text-lg font-link font-bold'
                >
                  Learn more
                </label>
                <span className='ml-1'>
                  <MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Container */}

      <label htmlFor='getnow-modal'>
        <input type='checkbox' id='getnow-modal' className='modal-toggle' />
        <div className='modal pt-16'>
          <div className='modal-box w-full md:w-7/12 max-w-5xl'>
            <div className='text-lg md:text-xl lg:text-2xl xl:text-4xl font-extrabold text-center font-bankgothic text-[#00aeef] mt-5 flex items-center justify-center'>
              <img src={logoBlack} alt='' className='h-16 -mt-5' />
            </div>
            <p className='p-6  font-paragraph text-center text-sm space-y-0'>
              <span className='font-couriernew'>TARS BINARY</span> is a
              technology company working on designing and developing various DoD
              Projects, military mission control technology, and several
              projects in the military grade. The Project{' '}
              <span className='font-bankgothic text-lg '>"TARS UNIVERSE"</span>{' '}
              is also a popular project of{' '}
              <span className='font-couriernew'>TARS BINARY</span>. <br />
              <br />
              <span className='font-bankgothic text-lg '>TARS UNIVERSE</span> is
              the Universe of Engineering & Technology. In this online platform,
              students can get almost anything related to engineering and
              technology. It is named{' '}
              <span className='font-bankgothic text-lg text-[#00aeef]'>
                UNIVERSE
              </span>{' '}
              because of its insane architecture of resource management systems
              ever designed before. This platform is designed for anyone
              interested to learn to engineer, create projects and love science
              fiction.
              <br />
              <br />
              <span className='font-bold'>
                Universe Learn, Universe Market & Universe Entertainment
              </span>{' '}
              is the smart resource hub that made this platform enormous and
              resourceful in many brilliant perspectives. The overall
              architecture of the Universe Application is designed to show how
              curious students deserve and expect{' '}
              <span className='hidden md:inline'>
                <br /> but can not explain.
              </span>
              <span className='inline md:hidden'>but can not explain.</span>
              <br />
              <br />
              <span className='font-couriernew'>TARS BINARY</span> focuses on
              technological development in education sectors and the most
              effective education in this Industrial Age.
            </p>
          </div>
        </div>
      </label>
    </>
  );
};

export default Getnow;
