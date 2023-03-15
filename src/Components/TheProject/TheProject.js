import juniorPro from '../../Assets/Images/juniorPro.jpeg';

const TheProject = () => {
  return (
    <>
      {/* TheProject Container */}
      <div className='the-project-container py-10'>
        {/* Card Container */}
        <div className='card-container '>
          <div className='py-10 w-full lg:w-8/12 mx-w-4xl mx-auto '>
            {/* Card Container */}

            {/* Card-1 */}
            <div className='grid grid-cols-1 gap-8 px-2 md:px-10'>
              <div className=''>
                <img src={juniorPro} alt='' className='w-full h-[32rem]' />
              </div>
              <div className='text-black'>
                <div className=''>
                  <div className=' text-lg font-medium leading-6'>
                    <h1 className=' text-sm md:text-xl lg:text-xl font-heading'>
                      The Project
                    </h1>
                  </div>
                  <div className='flex'>
                    <hr className='mt-3 h-[0.1rem] bg-gradient-to-r  from-[#ff0000]   to-black border-0 w-full '></hr>
                  </div>
                  <p className='mt-2 text-xs md:text-sm lg:text-base font-paragraph  '>
                    This program is designed for children who are just starting
                    high school (in Bangladesh, class 6 to 10). It aims to
                    introduce them to the basic concepts of engineering and how
                    they relate to the science they study in school. The program
                    focuses on exploring scientific theories and ideas through
                    practical applications. It provides guided projects along
                    with fun and interactive lessons that are easy to
                    understand.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'> Objectives:</span>
                    <br />
                    <span className='text-gray-400 text-xl text-'>
                      The objectives of this program are to:
                    </span>
                    <br />
                    <br />
                    Introduce children to engineering concepts and their
                    practical applications. Enhance their understanding of
                    science by showing how it is applied in the real world.
                    Encourage children to be curious and innovative. Develop
                    their problem-solving skills.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Program Outline:
                    </span>
                    <br />
                    <span className='text-gray-400  text-xl text-'>
                      The program will be divided into modules, each covering a
                      specific engineering concept. Each module will consist of
                      the following components:
                    </span>
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Introduction:{' '}
                    </span>{' '}
                    The module will start with an introduction to the
                    engineering concept being covered. The introduction will
                    provide a brief overview of the topic and its practical
                    applications. Lessons: The lessons will cover the theory and
                    science behind the engineering concept being covered. The
                    lessons will be interactive, and children will be encouraged
                    to ask questions and participate in discussions.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Projects:{' '}
                    </span>{' '}
                    The program will provide guided projects that will allow
                    children to apply the engineering concepts they have
                    learned. The projects will be designed to be fun and
                    engaging, while also challenging the children to think
                    creatively and solve problems. Assessments: At the end of
                    each module, there will be assessments to evaluate the
                    children's understanding of the engineering concept being
                    covered. The assessments will be designed to be fun and
                    interactive, while also testing the children's knowledge and
                    problem-solving skills.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Module Topics:
                    </span>
                    <br />
                    <span className='text-gray-400   text-xl text-'>
                      The modules will cover the following engineering concepts:
                    </span>
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Simple Machines:{' '}
                    </span>{' '}
                    This module will cover the six simple machines (lever, wheel
                    and axle, pulley, inclined plane, wedge, and screw) and
                    their practical applications. Electricity: This module will
                    cover the basics of electricity, including circuits,
                    conductors, insulators, and the practical applications of
                    electricity. Robotics: This module will cover the basics of
                    robotics, including programming, sensors, and actuators, and
                    their practical applications. Materials Science: This module
                    will cover the basics of materials science, including
                    properties of materials, their practical applications, and
                    how they can be used to solve engineering problems.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>Conclusion:</span>
                    <br />
                    <br />
                    This program is designed to introduce children to the world
                    of engineering and its practical applications. By exploring
                    engineering concepts through guided projects and interactive
                    lessons, children will enhance their understanding of
                    science and develop problem-solving skills. The program aims
                    to encourage children to be curious and innovative, and to
                    see the practical applications of science in the real world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheProject;
