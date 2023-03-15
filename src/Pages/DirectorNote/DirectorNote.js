import React from 'react';
import director from '../../Assets/Images/director.jpg';

const DirectorNote = () => {
  window.scrollTo({ top: 0, left: 0 });
  return (
    <>
      {/* Director Note Container */}
      <div className='about-page-container mx-auto bg-zinc-800 pt-10'>
        <div className='pt-16 w-11/12 md:w-8/12 mx-w-4xl mx-auto pb-5 '>
          {/* Director Image */}
          <div className=' '>
            <div className=' lg:card-side  shadow-xl grid grid-cols-1 md:grid-cols-2  bg-white rounded-2xl  '>
              <figure className='p-10'>
                <img src={director} alt='Album' className='object-fill ' />
              </figure>
              <div className='card-body flex items-center lg:items-center justify-center  text-center md:text-start -ml-0 md:-ml-10'>
                <div className=' flex flex-col '>
                  <h2 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-5'>
                    Shafiq Bari
                  </h2>
                  {/* <p className='text-lg md:text-xl lg:text-2xl xl:text-2xl font-light -mt-4'>Director & System Architect</p> */}
                  <p className='text-xl md:text-xl lg:text-2xl xl:text-3xl text-gray-600 block mb-3'>
                    Innovator, Educator
                  </p>
                  {/* <p className='text-xl md:text-2xl lg:text-2xl font-light font-couriernew -mt-1'>TARS BINARY</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='bg-gray-50 my-8 rounded-2xl'>
              <div className='shadow-xl'>
                <div className='card-body col-span-10'>
                  <p className=' text-sm md:text-lg font-paragraph text-center md:text-left'>
                    Technology is an integral part of our future. The rapid
                    transition from analog to digital systems, especially with
                    the rise of internet technology, is transforming various
                    aspects of our society, culture, education, and daily lives.
                    To ensure the longevity and stability of this vast
                    technological landscape, it is imperative that we all take
                    responsibility for maintaining it.
                    <br />
                    <br />
                    Whether we are technologists, entrepreneurs, engineers,
                    volunteers, influencers, students, or just active
                    participants in the digital space, we must all strive to
                    become excellent digital creators. Our online activities
                    have a direct impact on the virtual media, and it is our
                    duty to ensure that our contributions are of high quality
                    and add value to the internet.
                    <br />
                    <br />
                    Let us embrace the opportunities provided by technology,
                    while also being mindful of our responsibilities as digital
                    citizens. By doing so, we can make the most of this digital
                    era and create a better, smarter world for ourselves and
                    future generations.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 my-8 rounded-2xl'>
              <div className='shadow-xl'>
                <div className='card-body col-span-10'>
                  <p className=' text-sm md:text-lg font-paragraph break-word text-center md:text-left'>
                    <span className='font-bold text-3xl text-center text-gray-400 block mb-2'>
                      About
                    </span>
                    <br />
                    <br />
                    <span className='font-bold'> Shafiq Bari</span> is the
                    <span className='font-bold'>
                      {' '}
                      Director & System Architect
                    </span>{' '}
                    at <span className='font-couriernew '>TARS BINARY</span>. He
                    has been recognized for his outstanding contributions in the
                    field of technology and has received numerous awards and
                    accolades for his work. Shafiq is known for his innovative
                    ideas and his ability to implement them with precision and
                    accuracy. He is always on the lookout for new technologies
                    and ways to enhance the current systems to provide better
                    security and performance.
                    <br />
                    <br />
                    Shafiq's passion for technology and education is reflected
                    in his work as a teacher at{' '}
                    <span className='font-bold'> TARS ENGINEERING SCHOOL</span>,
                    where he inspires and motivates young students to pursue a
                    career in engineering and technology. He has also written a
                    book, "The Rise of the World's Most Powerful Engineering
                    Universe", which provides a comprehensive overview of the
                    latest advancements in engineering and technology.
                    <br />
                    <br />
                    In his free time, Shafiq enjoys producing and writing films.
                    He has produced and written the film{' '}
                    <span className='font-bold'> "The Dark Entity"</span>, which
                    explores the world of cyber-crime and the consequences of
                    unethical behavior in the digital world. This film showcases
                    Shafiq's creative side and his ability to communicate
                    important messages through the medium of film.
                    <br />
                    <br />
                    Overall, <span className='font-bold'> Shafiq Bari</span> is
                    an outstanding individual who has made a significant impact
                    in the world of technology and education. He continues to be
                    a source of inspiration for many, and his contributions will
                    be remembered for generations to come.
                    <br />
                    <br />
                    His dedication and commitment to his work have earned him
                    the respect of his peers and the admiration of those who
                    have been touched by his contributions. Shafiq's unwavering
                    pursuit of excellence has made him an example of what can be
                    achieved when one is passionate and driven. He continues to
                    work tirelessly to improve the field of technology and
                    educate the next generation of engineers and technicians.
                    <br />
                    <br />
                    Shafiq's contributions to technology and education have had
                    a positive impact on society, and his influence will
                    continue to be felt for many years to come. He is a true
                    leader and an inspiration to those who aspirational to make
                    a difference in the world. The world of technology and
                    education is better for having{' '}
                    <span className='font-bold'> Shafiq Bari</span> in it, and
                    his legacy will continue to inspire future generations.
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

export default DirectorNote;
