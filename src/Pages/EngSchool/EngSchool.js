import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apprenticePro from '../../Assets/Images/apprenticePro.jpeg';
import assessment from '../../Assets/Images/assessment.jpeg';
import eSchoolHeader from '../../Assets/Images/e-school-header.jpeg';
import settingIcon from '../../Assets/Images/engineering-school-icon.png';
import juniorPro from '../../Assets/Images/juniorPro.jpeg';
import masterclasses from '../../Assets/Images/masterclasses.jpeg';
import projectPdf from '../../Assets/Images/projectPdf.jpg';
const EngSchool = () => {
  // window.scrollTo({ top: 0, left: 0 });
  const [isReadMore, setIsReadMore] = useState(true);
  const navigate = useNavigate();

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {/* Engineering School Container */}
      <div className='engineering-school-container'>
        {/* Header Container */}
        <div className='header-container'>
          <div
            className='hero min-h-[25rem] md:min-h-[30rem] '
            style={{
              backgroundImage: `url(${eSchoolHeader})`
            }}
          >
            <div className='hero-overlay bg-gray-900 bg-opacity-60'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-md flex flex-col items-center justify-center'>
                <img src={settingIcon} alt='' className='w-24' />
                <h1 className='mb-5 text-2xl md:text-3xl lg:text-4xl font-bold font-heading'>
                  Engineering School
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Text Card */}
        <div className='py-10 w-11/12 md:w-8/12 mx-w-4xl mx-auto'>
          <div className='bg-[#f1f2f2]'>
            <p className='p-5 font-paragraph text-xs md:text-sm lg:text-base'>
              <span className='font-bold'>TARS ENGINEERING SCHOOL</span> is an
              educational institution that aims to provide children of all ages
              with a comprehensive understanding of engineering. The school
              offers a range of programs designed to teach basic concepts,
              intermediate knowledge, and advanced-level expertise in
              engineering. This unique approach to education may seem ambitious,
              but it has been successfully implemented in other locations and is
              achievable in Bangladesh.{' '}
              <span className='font-bold'>TARS ENGINEERING SCHOOL</span>{' '}
              believes that learning should be fun, and therefore their modules
              are designed to be engaging and enjoyable. By nurturing young
              innovators,{' '}
              <span className='font-bold'>TARS ENGINEERING SCHOOL</span> hopes
              to become a leading institution for future engineers.
            </p>
          </div>
        </div>
        {/* Video Container */}
        <div className='video-container -mt-10  w-11/12 md:w-8/12 mx-w-4xl mx-auto'>
          <div className='py-10'>
            <div className=' aspect-w-16 lg:aspect-w-4 aspect-h-9 lg:aspect-h-2 '>
              <iframe
                title='youtube video'
                src='https://www.youtube.com/embed/_kv_q0WWsb0'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
                autoplay
                className='p-1 md:px-5 md:py-5 lg:px-28 lg:py-22'
              ></iframe>
            </div>
          </div>
        </div>
        {/* Card Container */}
        <div className='card-container  bg-black'>
          <div className='bg-black py-10 w-full lg:w-8/12 mx-w-4xl mx-auto'>
            {/* Title Container */}
            <div className='title-container  text-white mb-10 flex justify-center'>
              <h1 className='text-center lg:p-10 text-xs md:text-xl lg:text-2xl font-heading '>
                Educating our children in the richness of their past,
                <br /> the diversity of their present, and the possibilities for
                their future.
              </h1>
            </div>
            {/* Card Container */}
            <div className='card-container space-y-16 '>
              {/* Card-1 */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 md:px-10'>
                <div className=''>
                  <img src={juniorPro} alt='' className='w-full ' />
                </div>
                <div className='text-white'>
                  <div className=''>
                    <div className=' text-lg font-medium leading-6'>
                      <h1 className=' text-gray-300 text-sm md:text-xl lg:text-xl font-heading'>
                        The Project
                      </h1>
                    </div>
                    <div className='flex'>
                      <hr className='mt-3 h-[0.1rem] bg-gradient-to-r  from-[#ff0000]   to-black border-0 w-full md:w-3/6 lg:w-11/12 '></hr>
                    </div>
                    <p className='mt-2 text-xs md:text-sm lg:text-base font-paragraph  '>
                      This program is designed for children who are just
                      starting high school (in Bangladesh, class 6 to 10). It
                      aims to introduce them to the basic concepts of
                      engineering and how they relate to the science they study
                      in school. The program focuses on exploring scientific
                      theories and ideas through practical applications. It
                      provides guided projects along with fun and interactive
                      lessons that are easy to understand.
                    </p>
                    <button
                      className='btn btn-xs'
                      onClick={() =>
                        navigate('/engineering-school/the-project')
                      }
                    >
                      See More
                    </button>
                  </div>
                </div>
              </div>
              {/* Card-2 */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 md:px-10 my-10 lg:my-0'>
                <div className='text-white order-2 lg:order-1'>
                  <div className=''>
                    <div className='text-lg font-medium leading-6'>
                      <h1 className=' text-gray-300 text-sm md:text-xl lg:text-xl font-heading'>
                        Apprentice Program
                      </h1>
                    </div>
                    <div className='flex'>
                      <hr className='mt-2 h-[0.1rem] bg-gradient-to-r   from-[#ff0000]   to-black border-0 w-full md:w-3/6 lg:w-11/12 '></hr>
                    </div>
                    <p className='mt-5 text-xs md:text-sm lg:text-base font-paragraph '>
                      This segment of the program is designed to introduce
                      children to the Engineering Design Process. It will enable
                      them to understand the concept of design, encourage them
                      to build structures of their own, test their true
                      potential, and improve their skills based on the test
                      findings. The children will be given hands-on activities
                      with concrete goals that will lead them towards achieving
                      more complex thought processes.
                    </p>
                    <button
                      className='btn btn-xs'
                      onClick={() =>
                        navigate('/engineering-school/apprentece-program')
                      }
                    >
                      See More
                    </button>
                  </div>
                </div>
                <div className='order-1 lg:order-2'>
                  <img src={apprenticePro} alt='' className='w-full' />
                </div>
              </div>
              {/* Card-3 */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 md:px-10'>
                <div className=''>
                  <img src={masterclasses} alt='' className='w-full' />
                </div>
                <div className='text-white'>
                  <div className=''>
                    <div className=' text-lg font-medium leading-6'>
                      <h1 className=' text-gray-300 text-sm md:text-xl lg:text-xl font-heading'>
                        Masterclasses
                      </h1>
                    </div>
                    <div className='flex'>
                      <hr className='mt-2 h-[0.1rem] bg-gradient-to-r  from-[#ff0000]   to-black border-0 w-full md:w-3/6 lg:w-11/12'></hr>
                    </div>
                    <p className='mt-3 text-xs md:text-sm lg:text-base font-paragraph '>
                      <span onClick={toggleReadMore}>
                        {isReadMore
                          ? 'This program offers short courses in the form of workshops that are designed for children who have completed their Junior and Apprentice programs. The workshops aim to polish the knowledge and skills that the children have acquired and help them specialize in one or more subjects of their choice...See More'
                          : 'This program offers short courses in the form of workshops that are designed for children who have completed their Junior and Apprentice programs. The workshops aim to polish the knowledge and skills that the children have acquired and help them specialize in one or more subjects of their choice. Those who participate in the workshops will receive a certificate that they can use to open profiles on TES Workstation and start their outsourcing careers. The top three highest scorers will also have the opportunity to join TARS Engineering School as trainers/teachers'}
                      </span>
                    </p>
                    <button
                      className='btn btn-xs'
                      onClick={() =>
                        navigate('/engineering-school/master-classes')
                      }
                    >
                      See More
                    </button>
                  </div>
                </div>
              </div>
              {/* Card-4 */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 md:px-10 my-10 lg:my-0'>
                <div className='text-white order-2 lg:order-1'>
                  <div className=''>
                    <div className='text-lg font-medium leading-6'>
                      <h1 className='text-gray-300 text-sm md:text-xl lg:text-xl font-heading'>
                        The Assessment It’s different here.
                      </h1>
                    </div>
                    <div className='flex'>
                      <hr className='mt-2 h-[0.1rem] bg-gradient-to-r  from-[#ff0000]   to-black border-0 w-full md:w-3/6 lg:w-11/12 '></hr>
                    </div>
                    <p className='mt-5 text-xs md:text-sm lg:text-base font-paragraph '>
                      Since TES will not replace the traditional schooling
                      system but rather a supplementary method for learning, we
                      will not hold any conventional exams to test the student's
                      abilities. Instead, we’ll host practical
                      application-oriented competitions based on real-life
                      situations and let the students devise solutions to
                      real-life problems with their innovations. After all,
                      solving problems is the main point of engineering in the
                      first place.
                    </p>
                    <button className='btn btn-xs'>See More</button>
                  </div>
                </div>
                <div className='order-1 lg:order-2'>
                  <img src={assessment} alt='' className='w-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Dropdown Container */}
        <div className='dropdown-container bg-black'>
          <div className='bg-black py-10 text-white px-2 md:px-5 lg:px-10  '>
            {/* Dropdown-1 */}
            <div tabIndex={0} className='collapse bg-black w-full text-center'>
              <h1 className='text-lg lg:text-xl font-medium  w-full text-center'>
                Here’s how it works
              </h1>
              <div className='collapse-content w-11/12 md:w-8/12 mx-w-4xl mx-auto'>
                <hr className='mt-3 h-[0.1rem] bg-gradient-to-r  from-black via-[#ff0000]  to-black border-0 w-5/6 md:w-2/6 mx-auto mb-5 '></hr>
                <p>
                  At TES, we follow the curriculum structure the Harvard
                  Engineering School designed, with slight modifications made to
                  fit with Bangladesh's education system and social network. The
                  main framework of the module remains the same as Harvard's.
                </p>
              </div>
            </div>
            <hr className='mt-3 h-[0.1rem] bg-gradient-to-r from-black via-[#ff0000]  to-black   border-0 w-5/6 md:w-2/6 mx-auto mb-5 '></hr>
            {/* Dropdown-2 */}
            <div
              tabIndex={0}
              className='collapse bg-black text-center w-11/12 md:w-8/12 mx-w-4xl mx-auto'
            >
              <h1 className='text-lg lg:text-xl font-medium  w-full text-center'>
                We Provide Work Opportunity
              </h1>
              <div className='collapse-content'>
                <hr className='mt-3 h-[0.1rem] bg-gradient-to-r  from-black via-[#ff0000]  to-black border-0 w-5/6 md:w-3/6 mx-auto mb-5  '></hr>
                <p>
                  The students who attend TES will be given a certificate that
                  they can use to get started on their outsourcing careers on
                  TARS Workstation. It’s an open outsourcing platform for people
                  of all ages, but the students of TES will be given priority
                  here.
                </p>
              </div>
            </div>
            <hr className='mt-3 h-[0.1rem] bg-gradient-to-r  from-black via-[#ff0000]  to-black border-0 w-5/6 md:w-3/6 mx-auto mb-5  '></hr>
            {/* Dropdown-3 */}
            <div
              tabIndex={0}
              className='collapse bg-black text-center w-11/12 md:w-8/12 mx-w-4xl mx-auto'
            >
              <h1 className='text-lg lg:text-xl font-medium  w-full text-center'>
                The Future
              </h1>
              <div className='collapse-content'>
                <hr className='mt-3 h-[0.1rem] bg-gradient-to-r from-black via-[#ff0000]  to-black border-0 w-5/6 md:w-2/6 mx-auto mb-5  '></hr>
                <p>
                  The best students will be allowed to teach at TES and mold
                  fresh new minds like themselves. Apart from working at TES and
                  TARS WORKSTATION, the students of TES will also get the upper
                  hand in competitive exams like entrance exams for the world's
                  top engineering universities. At TES, we believe that anyone
                  can become an innovator regardless of where they’re from or
                  their studies concentration. And that’s why we have no
                  barriers for students from other streams of studies than
                  science. Anyone with a curious mind and a thirst for learning
                  can become a student at TES and, later on, an innovator.
                </p>
              </div>
            </div>
            <hr className='mt-3 h-[0.1rem] bg-gradient-to-r  from-black via-[#ff0000]  to-black border-0 w-5/6 md:w-2/6 mx-auto mb-5  '></hr>
          </div>
        </div>
        {/* PROJECT Container */}
        <div className='header-container mt-2 mb-10'>
          <div
            className='hero  bg-contain h-[20rem] lg:h-screen'
            style={{
              backgroundImage: `url(${projectPdf})`
            }}
          >
            <div className='hero-overlay bg-black bg-opacity-80'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='flex flex-col items-center justify-center'>
                <div className='mb-10 md:mb-16 lg:mb-28'>
                  <h1 className='text-xl md:text-3xl lg:text-4xl font-bold font-heading'>
                    PROJECT III
                  </h1>
                  <h1 className='text-xs md:text-3xl lg:text-4xl font-bold font-heading'>
                    TARS ENGINEERING SCHOOL PROJECT
                  </h1>
                  <h1 className='text-xs md:text-2xl lg:text-4xl '>
                    (Learn & Create Engineering Projects, Technologies)
                  </h1>
                </div>
                <div className=''>
                  <h1 className='text-base md:text-2xl lg:text-4xl font-bold font-heading text-red-600'>
                    TARS ENGINEERING SCHOOL (TES)
                  </h1>
                  <a
                    href='https://drive.google.com/file/d/1yxACvUasPdt99xTyPJyg8xB_35XRnXBV/view?usp=sharing'
                    target='_blank'
                    className='text-red-600 text-lg md:text-xl lg:text-2xl'
                    rel='noreferrer'
                  >
                    (PDF)
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

export default EngSchool;
