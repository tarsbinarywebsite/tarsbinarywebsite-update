import React from 'react';
import * as MDIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import entertainment from '../../Assets/Images/entertainment.jpg';
import entertainment1 from '../../Assets/Images/entertainment1.jpg';

const Entertainment = () => {
  return (
    <>
      {/* Entertainment Container */}
      <div className='entainment-container mt-1'>
        <div
          className=' min-h-screen bg-cover bg-center  bg-no-repeat w-full py-20 hidden md:block'
          style={{
            backgroundImage: `url(${entertainment})`
          }}
        >
          <div className='w-full h-screen text-center text-neutral-content  items-center justify-end  flex -mt-32'>
            <div className='w-full md:w-[24rem] lg:w-[35rem] xl:w-[42rem] pr-0 xl:pr-24'>
              <h1 className='mb-5 text-3xl md:text-4xl lg:text-5xl font-bankgothic font-extrabold'>
                UNIVERSE ENTERTAINMENT
              </h1>
              <p className='mb-5 px-2 md:px-4 lg:px-12 xl:px-24  '>
                Universe Entertainment is a library of original content that is
                innovative and futuristic, primarily based on science and
                technology-based drama, engineering conceptual documentaries,
                and original movies and drama series. This platform is designed
                to function as the film industry in a way that aligns with
                technological development, making it easier for the future
                generation to understand the current digital world.
              </p>
              <div className='flex items-center justify-center gap-4'>
                <div className='flex items-center justify-center'>
                  <label
                    htmlFor='entertainment-modal'
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
            backgroundImage: `url(${entertainment1})`
          }}
        >
          <div className='w-full h-screen text-center text-neutral-content  items-start justify-end  flex -mt-12'>
            <div className='w-full md:w-[24rem] lg:w-[35rem] xl:w-[42rem] pr-0 xl:pr-24'>
              <h1 className='mb-5 text-3xl md:text-4xl lg:text-5xl font-bankgothic font-extrabold px-2'>
                UNIVERSE ENTERTAINMENT
              </h1>
              <p className='mb-5 text-xs px-5 md:px-8 lg:px-12 xl:px-24  '>
                Universe Entertainment is a library of original content that is
                innovative and futuristic, primarily based on science and
                technology-based drama, engineering conceptual documentaries,
                and original movies and drama series. This platform is designed
                to function as the film industry in a way that aligns with
                technological development, making it easier for the future
                generation to understand the current digital world.
              </p>
              <div className='flex items-center justify-center gap-4'>
                <div className='flex items-center justify-center'>
                  <a
                    href='/'
                    className=' link-secondary text-blue-600  text-base lg:text-lg font-link font-bold'
                  >
                    Learn more
                  </a>
                  <span className='ml-1'>
                    <MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
                  </span>
                </div>
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
          </div>
        </div>
      </div>
      {/* Modal Container */}

      <label htmlFor='entertainment-modal'>
        <input
          type='checkbox'
          id='entertainment-modal'
          className='modal-toggle'
        />
        <div className='modal'>
          <div className='modal-box w-full lg:w-6/12 max-w-5xl'>
            <p className='p-6 text-justify font-paragraph'>
              Universe Entertainment is a library of original content that is
              innovative and futuristic, primarily based on science and
              technology-based drama, engineering conceptual documentaries, and
              original movies and drama series. This platform is designed to
              function as the film industry in a way that aligns with
              technological development, making it easier for the future
              generation to understand the current digital world. The Universe
              Entertainment library contains unique and compelling content
              spanning various genres. From science fiction to engineering, each
              piece is thought-provoking and entertaining. This platform
              provides a space where viewers can watch original content they
              cannot find anywhere else. One of the most exciting aspects of
              Universe Entertainment is its commitment to exploring science and
              technology through its content. This approach is not just about
              creating entertainment but also encouraging viewers to think about
              the potential applications of technology in the future. This
              approach is essential in a world where technology shapes and
              impacts how we live and work. Universe Entertainment's original
              movies, drama series, and documentaries are designed to showcase
              the endless possibilities that science and technology offer. For
              instance, the platform's conceptual engineering documentaries are
              an excellent way for viewers to learn about the latest engineering
              developments and understand how they can impact society.
              <br />
              <br />
              Similarly, science and technology-based drama series and movies
              allow viewers to explore future possibilities. In today's digital
              world, it is essential to have a platform that can provide
              entertaining and educational content. Universe Entertainment is
              the perfect platform for this. By blending entertainment and
              education, the platform creates a space where viewers can learn
              about science, technology, engineering, and much more. Universe
              Entertainment is an innovative platform providing viewers with
              unique and exciting content. From science fiction to engineering
              documentaries, the platform's commitment to exploring science and
              technology is evident in every piece of content. The platform's
              focus on technology and its potential applications makes it a
              valuable resource for anyone interested in learning about the
              future of technology. Overall, Universe Entertainment is an
              excellent platform providing entertainment and education to its
              viewers.
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

export default Entertainment;
