import React from 'react';
import masterclasses from '../../Assets/Images/masterclasses.jpeg';

const MasterClasses = () => {
  return (
    <>
      {/* Master Classes Container */}
      <div className='master-classes-container py-10'>
        {/* Card Container */}
        <div className='card-container '>
          <div className='py-10 w-full lg:w-8/12 mx-w-4xl mx-auto '>
            {/* Card Container */}

            {/* Card-1 */}
            <div className='grid grid-cols-1 gap-8 px-2 md:px-10'>
              <div className=''>
                <img src={masterclasses} alt='' className='w-full h-[32rem]' />
              </div>
              <div className='text-black'>
                <div className=''>
                  <div className=' text-lg font-medium leading-6'>
                    <h1 className=' text-sm md:text-xl lg:text-xl font-heading'>
                      Masterclasses
                    </h1>
                  </div>
                  <div className='flex'>
                    <hr className='mt-3 h-[0.1rem] bg-gradient-to-r  from-[#ff0000]   to-black border-0 w-full '></hr>
                  </div>
                  <p className='mt-2 text-xs md:text-sm lg:text-base font-paragraph  '>
                    This program offers short courses in the form of workshops
                    that are designed for children who have completed their
                    Junior and Apprentice programs. The workshops aim to polish
                    the knowledge and skills that the children have acquired and
                    help them specialize in one or more subjects of their
                    choice. Those who participate in the workshops will receive
                    a certificate that they can use to open profiles on TES
                    Workstation and start their outsourcing careers. The top
                    three highest scorers will also have the opportunity to join
                    TARS Engineering School as trainers/teachers
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'> Objectives:</span>
                    <br />
                    <span className='text-gray-400 text-xl text-'>
                      The objectives of this program are to:
                    </span>
                    <br />
                    <br />
                    To provide children with specialized knowledge and skills in
                    their areas of interest. To help children polish their
                    skills and knowledge acquired from the Junior and Apprentice
                    programs.
                    <br />
                    To prepare children for outsourcing careers by providing
                    them with certificates that they can use to open profiles on
                    TES Workstation.
                    <br />
                    To provide opportunities for the top performers to join TARS
                    Engineering School as trainers/teachers.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>Workshops:</span>
                    <br />
                    <br />
                    The workshops will be short courses, lasting for 2-3 weeks,
                    and will cover specialized topics in engineering. The topics
                    could be robotics, programming, materials science, and more.
                    The workshops will be conducted by experts in their
                    respective fields, who will provide hands-on training and
                    guidance to the children. The training and guidance will
                    help the children to acquire the necessary skills and
                    knowledge to develop their expertise in their areas of
                    interest.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Certificates:{' '}
                    </span>{' '}
                    <br />
                    <br />
                    At the end of each workshop, the children will receive a
                    certificate of completion. This certificate can be used to
                    open a profile on TES Workstation, an online platform where
                    individuals can find outsourcing opportunities in their
                    areas of expertise. The certificate will demonstrate that
                    the children have acquired the necessary skills and
                    knowledge to excel in their areas of interest.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      Masterclasses:{' '}
                    </span>{' '}
                    <br />
                    <br />
                    The Masterclasses will allow the children to specialize in
                    one or more subjects of their choice. They can choose from a
                    variety of subjects, such as robotics, programming,
                    materials science, and more. The Masterclasses will be
                    conducted by experts in their respective fields, who will
                    provide in-depth training and guidance to the children. The
                    Masterclasses will help the children to acquire advanced
                    skills and knowledge in their areas of interest.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>
                      TARS ENGINEERING SCHOOL:
                    </span>
                    <br />
                    <br />
                    The top three highest scorers in the Masterclasses will have
                    the opportunity to join TARS Engineering School as
                    trainers/teachers. TARS Engineering School is an educational
                    institution that provides training and education in
                    engineering. The top performers will have the opportunity to
                    share their knowledge and skills with others and develop
                    their expertise further.
                    <br />
                    <br />
                    <span className='text-lg font-extrabold'>Conclusion:</span>
                    <br />
                    <br />
                    The workshops and Masterclasses are designed to provide
                    children with specialized knowledge and skills in their
                    areas of interest. The certificates provided at the end of
                    the workshops will help the children kickstart their
                    outsourcing careers. The top performers will have the
                    opportunity to join TARS Engineering School as
                    trainers/teachers and share their knowledge and skills with
                    others. The program aims to prepare children for a
                    successful career in engineering and provide them with
                    opportunities to develop their expertise further.
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

export default MasterClasses;
