import React from 'react';
import apprenticePro from '../../Assets/Images/apprenticePro.jpeg';

const ApprenteceProgram = () => {
  return (
    <>
      {/* ApprenteceProgram Container */}
      <div className=' py-10'>
        {/* Card Container */}
        <div className='card-container '>
          <div className='py-10 w-full lg:w-8/12 mx-w-4xl mx-auto '>
            {/* Card Container */}

            {/* Card-1 */}
            <div className='grid grid-cols-1 gap-8 px-2 md:px-10'>
              <div className=''>
                <img src={apprenticePro} alt='' className='w-full h-[32rem]' />
              </div>
              <div className='text-black'>
                <div className=''>
                  <div className=' text-lg font-medium leading-6'>
                    <h1 className=' text-sm md:text-xl lg:text-xl font-heading'>
                      Apprentice Program
                    </h1>
                  </div>
                  <div className='flex'>
                    <hr className='mt-3 h-[0.1rem] bg-gradient-to-r  from-[#ff0000]   to-black border-0 w-full'></hr>
                  </div>
                  <p className='mt-2 text-xs md:text-sm lg:text-base font-paragraph  '>
                    This segment of the program is designed to introduce
                    children to the Engineering Design Process. It will enable
                    them to understand the concept of design, encourage them to
                    build structures of their own, test their true potential,
                    and improve their skills based on the test findings. The
                    children will be given hands-on activities with concrete
                    goals that will lead them towards achieving more complex
                    thought processes.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'> Objectives:</span>
                    <br />
                    <span className='text-gray-400 text-xl text-'>
                      The objectives of this program are to:
                    </span>
                    <br />
                    <br />
                    Introduce children to the Engineering Design Process.
                    Develop their problem-solving skills. Encourage children to
                    think creatively and innovatively. Enhance their
                    understanding of science and engineering. Provide children
                    with hands-on experiences that will help them build
                    structures of their own and test their true potential.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Engineering Design Process:
                    </span>
                    <br />
                    <span className='text-gray-400  text-xl text-'>
                      The Engineering Design Process is a series of steps used
                      by engineers to solve problems. These steps include:
                    </span>
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Define the problem:{' '}
                    </span>{' '}
                    <br />
                    The first step is to identify the problem that needs to be
                    solved. This includes understanding the requirements and
                    constraints of the project.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Research:{' '}
                    </span>{' '}
                    <br />
                    The next step is to research and gather information about
                    the problem. This includes understanding the materials,
                    tools, and techniques that can be used to solve the problem.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Brainstorm:{' '}
                    </span>{' '}
                    <br />
                    The third step is to brainstorm and generate ideas for
                    solutions. This includes considering different approaches
                    and evaluating the pros and cons of each.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Design:{' '}
                    </span>{' '}
                    <br />
                    The fourth step is to develop a detailed design for the
                    solution. This includes creating sketches, models, and
                    prototypes.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>Build: </span>{' '}
                    <br />
                    The fifth step is to build the solution. This includes using
                    materials, tools, and techniques to create the final
                    product.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>Test: </span>{' '}
                    <br />
                    The sixth step is to test the solution. This includes
                    evaluating how well the solution works and identifying any
                    areas for improvement.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Evaluate:{' '}
                    </span>{' '}
                    <br />
                    The final step is to evaluate the solution and determine if
                    it meets the requirements and constraints of the project.
                    This includes considering factors such as cost, safety, and
                    effectiveness.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Hands-On Activities:
                    </span>
                    <br />
                    <br />
                    The children will be given hands-on activities that will
                    guide them through the Engineering Design Process. These
                    activities will be designed to be fun and engaging, while
                    also challenging the children to think creatively and solve
                    problems.
                    <br />
                    <br />
                    The activities will include building structures using
                    different materials, such as paper, cardboard, and popsicle
                    sticks. The children will be encouraged to design and build
                    their structures using the Engineering Design Process,
                    starting with defining the problem, researching,
                    brainstorming, designing, building, testing, and evaluating.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Assessments:{' '}
                    </span>{' '}
                    At the end of each activity, there will be assessments to
                    evaluate the children's understanding of the Engineering
                    Design Process. The assessments will be designed to be fun
                    and interactive, while also testing the children's knowledge
                    and problem-solving skills.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>Conclusion:</span>
                    <br />
                    <br />
                    This segment of the program is designed to introduce
                    children to the Engineering Design Process and provide them
                    with hands-on activities to develop their problem-solving
                    skills. By following the steps of the Engineering Design
                    Process, the children will learn to think creatively, test
                    their true potential, and improve their skills based on the
                    test findings. The activities will be designed to be fun and
                    engaging, while also challenging the children to build
                    structures of their own and evaluate their effectiveness.
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

export default ApprenteceProgram;
