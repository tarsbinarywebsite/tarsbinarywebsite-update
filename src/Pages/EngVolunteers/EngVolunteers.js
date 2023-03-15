import React from 'react';
// import appsStore from '../../Assets/Images/appsStore.jpg';
import eVolunteerHeader from '../../Assets/Images/engVolunteerHeader.jpg';
import learnIcon from '../../Assets/Images/learnIcon.png';
import marketIcon from '../../Assets/Images/marketIcon.png';
import nextGeneration from '../../Assets/Images/nextGeneration.jpg';
import profileIcon from '../../Assets/Images/profileIcon.png';
import tarsIconHeader from '../../Assets/Images/tarsIcon-header.png';
import tarsIcon from '../../Assets/Images/tarsIcon.png';
import youtubeIcon from '../../Assets/Images/youtubeIcon.png';
const EngVolunteers = () => {
  window.scrollTo({ top: 0, left: 0 });
  return (
    <>
      {/* Engineering Volunteers Container */}
      <div className='engineering-volunteers-container'>
        {/* Header Container */}
        <div className='header-container mb-2'>
          <div
            className='hero min-h-screen bg-fixed'
            style={{
              backgroundImage: `url(${eVolunteerHeader})`
            }}
          >
            <div className='hero-overlay bg-black bg-opacity-40'></div>
            <div className='hero-content text-center text-neutral-content mb-16'>
              <div className='max-w-4xl flex flex-col items-center justify-center'>
                <div className='mt-24'>
                  <img src={tarsIconHeader} alt='' className='h-48 md:h-72' />
                </div>
                <h1 className='mb-5 text-xl md:text-3xl lg:text-4xl font-bold font-heading'>
                  Engineering Volunteers
                </h1>
                <h1 className='text-sm md:base lg:text-xl font-bold font-heading mb-20'>
                  The Next Generation Volunteering
                </h1>

                <p
                  className='font-paragraph text-sm md:text-base lg:text-xl'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  The{' '}
                  <span className='font-bold'>
                    Next Generation Volunteering platform
                  </span>{' '}
                  offers a unique opportunity for young minds to develop their
                  engineering skills and connect with a community of like-minded
                  individuals from all{' '}
                  <span className='font-bold'>64 districts</span> of Bangladesh.
                  By becoming a volunteer, you can access updates on engineering
                  events, track your progress, and build your profile with
                  achievements that showcase your skills and passion for
                  engineering.
                </p>
                <br />
                <br />
                <p
                  className='font-paragraph text-sm md:text-base lg:text-xl'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  The platform is designed to create a giant engineering
                  community that fosters innovation and sustainability, with a
                  focus on preparing the next generation of tech leaders. By
                  connecting with other students and working together, you can
                  learn and grow as engineers while building a sense of
                  community and shared purpose.
                </p>
                <br />
                <br />
                <p
                  className='font-paragraph text-sm md:text-base lg:text-xl'
                  data-aos='fade-up'
                  data-aos-delay='300'
                  data-aos-duration='1000'
                >
                  The community is run by elected officials, including a
                  <span className='font-bold'>President</span> and{' '}
                  <span className='font-bold'>Vice President</span> , who work
                  with <span className='font-couriernew '>TARS BINARY</span> to
                  develop a yearly activity plan that includes events such as
                  <span className='font-bold'>
                    Science Fairs and Science Fests
                  </span>{' '}
                  . By participating in these activities, you can showcase your
                  work and build your identity as an engineer, receiving
                  recognition and support from the community and our expert
                  team.
                </p>
                <br />
                <br />
                <p
                  className='font-paragraph text-sm md:text-base lg:text-xl'
                  data-aos='fade-up'
                  data-aos-delay='300'
                  data-aos-duration='1000'
                >
                  The photo gallery is a great way to showcase your projects and
                  works, motivating you to work more enthusiastically towards
                  your goals. This platform is a great opportunity for anyone
                  interested in engineering, whether you are from Bangladesh or
                  anywhere else in the world. Join the{' '}
                  <span className='font-bold'>
                    Next Generation Volunteering platform
                  </span>{' '}
                  today and become a part of this vibrant and growing
                  engineering community.
                </p>

                <div className='hero-content text-neutral-content py-20'>
                  <div className=' flex flex-col items-center justify-center text-start '>
                    {/* Card Container */}
                    <div className='max-w-2xl mx-auto space-y-10 '>
                      <section
                        className=' text-white'
                        data-aos='fade-up'
                        data-aos-delay='600'
                        data-aos-duration='1000'
                      >
                        <div className=' flex items-center justify-center space-x-6 '>
                          <div className='w-24'>
                            <img
                              className='w-full rounded-md object-contain'
                              src={profileIcon}
                              alt='text'
                            />
                          </div>
                          <div className='w-full'>
                            <p className='text-white text-sm md:text-base lg:text-xl font-paragraph'>
                              Create a single Profile.
                            </p>
                          </div>
                        </div>
                      </section>
                      <section
                        className=' text-white'
                        data-aos='fade-up'
                        data-aos-delay='700'
                        data-aos-duration='1000'
                      >
                        <div className=' flex items-center justify-center space-x-6'>
                          <div className='w-24'>
                            <img
                              className='w-full rounded-md object-contain'
                              src={learnIcon}
                              alt='text'
                            />
                          </div>
                          <div className='w-full'>
                            <p className='text-white text-sm md:text-base lg:text-xl font-paragraph'>
                              Explore Universe Learn to learn engineering by
                              watching robust video contents.
                            </p>
                          </div>
                        </div>
                      </section>
                      <section
                        className=' text-white'
                        data-aos='fade-up'
                        data-aos-delay='800'
                        data-aos-duration='1000'
                      >
                        <div className=' flex items-center justify-center space-x-6'>
                          <div className='w-24'>
                            <img
                              className='w-full rounded-md object-contain'
                              src={marketIcon}
                              alt='text'
                            />
                          </div>
                          <div className='w-full'>
                            <p className='text-white text-sm md:text-base lg:text-xl font-paragraph'>
                              Explore Universe Market to upload your projects,
                              see others projects and find an intelligent shop
                              to purchase and sell necessary engineering pieces.
                            </p>
                          </div>
                        </div>
                      </section>
                      <section
                        className=' text-white'
                        data-aos='fade-up'
                        data-aos-delay='900'
                        data-aos-duration='1000'
                      >
                        <div className=' flex items-center justify-center space-x-6'>
                          <div className='w-24'>
                            <img
                              className='w-full rounded-md object-contain'
                              src={youtubeIcon}
                              alt='text'
                            />
                          </div>
                          <div className='w-full'>
                            <p className='text-white text-sm md:text-base lg:text-xl font-paragraph'>
                              Explore Universe Entertainment to explore your
                              favorite films, technology series, documentaries &
                              so many Universe Entertainment Originals video
                              contents you love and have been waiting for so
                              long.
                            </p>
                          </div>
                        </div>
                      </section>
                      <section
                        className=' text-white'
                        data-aos='fade-up'
                        data-aos-delay='950'
                        data-aos-duration='1000'
                      >
                        <div className=' flex items-center justify-center space-x-6'>
                          <div className='w-24'>
                            <img
                              className='h-36 rounded-md object-contain'
                              src={tarsIcon}
                              alt='text'
                            />
                          </div>
                          <div className='w-full'>
                            <p className='text-white text-sm md:text-base lg:text-xl font-paragraph'>
                              Connect Engineering Volunteers & be an engineering
                              volunteer to know what matters most in your
                              society in technological development aspects and
                              view other people's activities.
                            </p>
                          </div>
                        </div>
                      </section>
                    </div>
                    {/* App Store Buttons */}
                    <div className='max-w-4xl mt-16 '>
                      <div
                        className='w-full p-2 md:p-28 text-center shadow-md  space-y-12 '
                        data-aos='fade-up'
                        data-aos-delay='1000'
                        data-aos-duration='2000'
                      >
                        <h5 className='mb-5 text-xs md:text-sm lg:text-lg font-bold text-white font-heading'>
                          The universe of engineering & technology is now in
                          your pocket.
                        </h5>

                        <div className='items-center justify-center space-y-4 flex flex-col md:flex-row sm:space-y-0 sm:space-x-4 mb-5'>
                          <a
                            href='https://www.apple.com/store'
                            className=' w-auto  border  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 '
                          >
                            <svg
                              className='mr-3 w-7 h-7'
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fab'
                              data-icon='apple'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 384 512'
                            >
                              <path
                                fill='currentColor'
                                d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'
                              ></path>
                            </svg>
                            <div className='text-left'>
                              <div className='mb-1 text-xs'>
                                Download on the
                              </div>
                              <div className='-mt-1 font-sans text-sm font-semibold'>
                                App Store
                              </div>
                            </div>
                          </a>
                          <a
                            href='https://play.google.com/store/apps'
                            className='w-auto border focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 '
                          >
                            <svg
                              className='mr-3 w-7 h-7'
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fab'
                              data-icon='google-play'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 512 512'
                            >
                              <path
                                fill='currentColor'
                                d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z'
                              ></path>
                            </svg>
                            <div className='text-left'>
                              <div className='mb-1 text-xs'>Get in on</div>
                              <div className='-mt-1 font-sans text-sm font-semibold'>
                                Google Play
                              </div>
                            </div>
                          </a>
                        </div>
                        <p className='mb-5 text-white text-sm font-paragraph'>
                          Download the{' '}
                          <span className='font-bankgothic '>
                            TARS UNIVERSE
                          </span>{' '}
                          app from your Google Play Store and Apple App Store &
                          turn on the internet & enjoy your wise word now.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT Container */}
        <div className='header-container my-2'>
          <div
            className='hero min-h-screen bg-fill bg-no-repeat'
            style={{
              backgroundImage: `url(${nextGeneration})`
            }}
          >
            <div className='hero-overlay bg-black bg-opacity-70'></div>
            <div className='hero-content text-center text-neutral-content w-full md:w-9/12 mx-w-4xl mx-auto '>
              <div className='flex flex-col items-center justify-center'>
                <div className=' mb-10'>
                  <h1 className='text-base md:text-3xl lg:text-4xl font-bold font-heading mb-10'>
                    The Next Generation Volunteering
                  </h1>

                  <p className='text-xs md:text-base lg:text-lg font-bold font-paragraph'>
                    <span className='font-bold'>
                      {' '}
                      The Next Generation Volunteering platform
                    </span>{' '}
                    offers a unique opportunity for young minds to develop their
                    engineering skills and connect with a community of
                    like-minded individuals from all{' '}
                    <span className='font-bold'> 64 districts</span> of
                    Bangladesh. By becoming a volunteer, you can access updates
                    on engineering events, track your progress, and build your
                    profile with achievements that showcase your skills and
                    passion for engineering.
                    <br />
                    <br />
                    The platform is designed to create a giant engineering
                    community that fosters innovation and sustainability, with a
                    focus on preparing the next generation of tech leaders. By
                    connecting with other students and working together, you can
                    learn and grow as engineers while building a sense of
                    community and shared purpose.
                    <br />
                    <br />
                    The community is run by elected officials, including a
                    <span className='font-bold'> President</span> and{' '}
                    <span className='font-bold'> Vice President</span> , who
                    work with{' '}
                    <span className='font-couriernew '>TARS BINARY</span> to
                    develop a yearly activity plan that includes events such as
                    <span className='font-bold'>
                      {' '}
                      Science Fairs and Science Fests
                    </span>{' '}
                    . By participating in these activities, you can showcase
                    your work and build your identity as an engineer, receiving
                    recognition and support from the community and our expert
                    team.
                    <br />
                    <br />
                    The photo gallery is a great way to showcase your projects
                    and works, motivating you to work more enthusiastically
                    towards your goals. This platform is a great opportunity for
                    anyone interested in engineering, whether you are from
                    Bangladesh or anywhere else in the world. Join the{' '}
                    <span className='font-bold'>
                      Next Generation Volunteering
                    </span>{' '}
                    platform today and become a part of this vibrant and growing
                    engineering community.
                  </p>
                </div>
                <div className=''>
                  <a
                    href='/'
                    className='underline text-sm md:text-base lg:text-xl '
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngVolunteers;
