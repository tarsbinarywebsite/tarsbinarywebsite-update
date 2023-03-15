import React from 'react';
import * as MDIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import eschool from '../../Assets/Images/Eschool.jpg';
import evolunteer from '../../Assets/Images/Evolunteer.jpg';

const Engineering = () => {
  return (
    <>
      {/* Engineering Container */}
      <div className='engineering-container mt-1 '>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='-mt-60 md:-mt-0'>
            <div
              className='hero min-h-screen bg-contain bg-no-repeat w-full py-20'
              style={{
                backgroundImage: `url(${evolunteer})`
              }}
            >
              <div className='hero-content text-center text-neutral-content'>
                <div className='max-w-xl mt-[24rem] md:mt-[28rem] xl:mt-[48rem]'>
                  <h1 className='mb-5 text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-black'>
                    Engineering Volunteers
                  </h1>
                  <p className='mb-5 text-black text-sm font-paragraph max-w-md'>
                    This door is designed for the next generation of youth
                    leaders. Every volunteer can get updates on all engineering
                    events and track their profile and work records, and
                    achievements from the district.
                  </p>
                  <div className='flex justify-center text-xs gap-4 -mt-3'>
                    <div className='flex items-center'>
                      <label
                        htmlFor='e-volunteer-modal'
                        className=' link-secondary text-blue-600 text-sm lg:text-base font-link font-bold'
                      >
                        Learn more
                      </label>
                      <span className='ml-1'>
                        <MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <Link
                        to='/engineering-volunteers'
                        className=' link-secondary text-blue-600 text-sm lg:text-base font-link font-bold'
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
          <div className=''>
            <div
              className='hero min-h-screen bg-cover bg-center h-full bg-no-repeat w-full '
              style={{
                backgroundImage: `url(${eschool})`
              }}
            >
              <div className='hero-content text-center text-neutral-content'>
                <div className='max-w-xl mt-[24rem] md:mt-[28rem] xl:mt-[48rem]'>
                  <h1 className='mb-5 text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold'>
                    Engineering School
                  </h1>
                  <p className='mb-5 text-sm font-paragraph max-w-md '>
                    Educating our children in the richness of their past, the
                    diversity of their present, and the possibilities for their
                    future
                  </p>
                  <div className='flex justify-center text-xs gap-4 -mt-3'>
                    <div className='flex items-center'>
                      <label
                        htmlFor='e-school-modal'
                        className=' link-secondary text-blue-600 text-sm lg:text-base font-link font-bold'
                      >
                        Learn more
                      </label>
                      <span className='ml-1'>
                        <MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <Link
                        to='/engineering-school'
                        className=' link-secondary text-blue-600 text-sm lg:text-base font-link font-bold'
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
        </div>
      </div>
      {/* Engineering Volunteers - Modal Container */}
      <label htmlFor='e-volunteer-modal'>
        <input
          type='checkbox'
          id='e-volunteer-modal'
          className='modal-toggle'
        />
        <div className='modal pt-16'>
          <div className='modal-box w-full md:w-7/12 max-w-5xl'>
            <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-center font-heading'>
              Engineering Volunteers
            </h3>
            <p className='text-sm md:text-lg lg:text-lg xl:text-xl text-center  text-gray-600 mt-5 mb-1'>
              The Next Generations Volunteering
            </p>
            <p className='py-5 md:px-5 md:py-5  font-paragraph text-center text-sm'>
              This door is designed for the next generation of youth leaders.
              Every volunteer can get updates on all engineering events and
              track their profile and work records, and achievements from the
              district. This is the giant engineering community ever launched in
              Bangladesh.This platform is our Youth wing of{' '}
              <span className='font-bankgothic'>“TARS UNIVERSE”</span>, and it’s
              a whole new platform for all the Curious minds who believe they
              can. It mainly focuses on the next generation of tech geniuses.
              From that mission and vision, we have created a community of youth
              students ready to be the next tech leader. All youth from
              Bangladesh or outside the world interested in engineering can be
              our volunteers. It is a platform for building an engineering
              community with an innovative and sustainable platform that will
              lead us to our future.
            </p>
          </div>
        </div>
      </label>

      {/* Engineering School - Modal Container */}

      <label htmlFor='e-school-modal'>
        <input type='checkbox' id='e-school-modal' className='modal-toggle' />
        <div className='modal pt-16'>
          <div className='modal-box w-full md:w-7/12 max-w-5xl'>
            <h3 className='text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-center font-heading'>
              Engineering School
            </h3>
            <p className='p-5  font-paragraph text-center text-sm'>
              What if there was a school where children could learn about all
              the aspects of engineering, from getting the basic idea of
              engineering to obtaining intermediate knowledge about it to
              acquiring advanced-level expertise? It might sound like a
              far-fetched idea, but it has been made possible in other places
              and can be made possible here in Bangladesh.{' '}
              <span className='font-bold'>TARS ENGINEERING SCHOOL</span> plans
              to do just that.
              <br />
              <br />
              With our engineering programs designed for children of all ages,
              and modules that introduce them to engineering through methods
              that make learning enjoyable,{' '}
              <span className='font-bold'>TARS ENGINEERING SCHOOL</span> is set
              to become the next conservatory for young innovators.
              <br />
              <br />
              Educating our children in the richness of their past, the
              diversity of their present, and the possibilities for their
              future.
            </p>
          </div>
        </div>
      </label>
    </>
  );
};

export default Engineering;
