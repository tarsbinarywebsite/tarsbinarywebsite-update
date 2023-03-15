import React from 'react';
import * as MDIcons from 'react-icons/md';
import learnIcon from '../../Assets/Images/learnIcon.png';
import marketIcon from '../../Assets/Images/marketIcon.png';
import profileIcon from '../../Assets/Images/profileIcon.png';
import tarsIcon from '../../Assets/Images/tarsIcon.png';
import univers from '../../Assets/Images/univers.jpg';
import universeIcon from '../../Assets/Images/universeIcon.png';
import youtubeIcon from '../../Assets/Images/youtubeIcon.png';

const TarsUniverse = () => {
  window.scrollTo({ top: 0, left: 0 });

  return (
    <>
      {/* Tars Univers Container */}
      <div className='tars-universe-container'>
        <div
          className='hero min-h-screen bg-fixed'
          style={{
            backgroundImage: `url(${univers})`
          }}
        >
          <div className='hero-content text-center text-neutral-content'>
            <div className='max-w-4xl mx-auto flex flex-col items-center justify-center py-10'>
              {/* Header Container */}
              <div className='header-container p-0 md:p-8 lg:p-10 mb-5 w-full flex flex-col items-center justify-center text-center '>
                {/* Header-Image Container */}
                <div className='mt-24 flex items-center justify-center'>
                  <img src={universeIcon} alt='' className='h-48 md:h-72 ' />
                </div>
                {/*  */}
                <div className='flex flex-col items-center justify-center  '>
                  <p className='font-paragraph text-sm md:text-base lg:text-2xl  my-auto'>
                    Introducing{' '}
                    <span className='font-bankgothic'>TARS UNIVERSE</span>, the
                    online platform designed exclusively for engineering and
                    technology students. With a host of features such as{' '}
                    <span className='font-bold'>
                      Universe Learn, Universe Market, Universe Entertainment,
                      and Engineering Volunteers,
                    </span>{' '}
                    <span className='font-bankgothic'>TARS UNIVERSE</span>{' '}
                    offers a comprehensive experience for curious students
                    seeking to expand their knowledge and skills.
                    <br />
                    <br />
                    <span className='font-bold'>Universe Learn</span> is a hub
                    for educational resources, while Universe Market allows
                    students to showcase and purchase project tools. Universe
                    Entertainment provides original content to keep students
                    engaged and entertained, while Engineering Volunteers offers
                    a unique opportunity to connect with the engineering
                    community.
                    <br />
                    <br />
                    At <span className='font-bankgothic'>TARS UNIVERSE</span>,
                    we are committed to nurturing the next generation of tech
                    leaders. The Engineering Volunteers feature is specifically
                    designed for students interested in engineering, allowing
                    them to track their work and participate in engineering
                    events. Our platform is easily accessible through the App
                    Store and Google Play, making it convenient for students to
                    access{' '}
                    <span className='font-bankgothic'>TARS UNIVERSE</span> from
                    anywhere, anytime.
                    <br />
                    <br />
                    Our focus is on building a sustainable and innovative
                    engineering community. We are confident that{' '}
                    <span className='font-bankgothic'>TARS UNIVERSE</span> is
                    the perfect platform for curious students who want to
                    explore the world of engineering and technology. Join us
                    today and take the first step towards a fulfilling career in
                    engineering!
                  </p>
                  <br />
                  <br />
                  <p className='font-paragraph text-sm md:text-base lg:text-2xl  my-auto'>
                    <span className='font-bold'>
                      Universe Learn, Universe Market & Universe Entertainment
                    </span>{' '}
                    is the smart resource hub that made this platform enormous
                    and resourceful in many brilliant perspectives. The overall
                    architecture of the Universe Application is designed for
                    curious students & gives them what they deserve and expect
                    but can not explain.
                  </p>

                  <div className='flex items-center mt-20'>
                    <a
                      href='https://tarsuniverse.net/'
                      target='_blank'
                      className=' link-secondary text-blue-600 text-lg lg:text-2xl font-link font-bold'
                      rel='noreferrer'
                    >
                      Explore
                    </a>
                    <span className='ml-1'>
                      <MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
                    </span>
                  </div>
                  <br />
                  <br />
                </div>
                {/* App Store container */}
                <div className=' flex flex-col items-center justify-center text-start '>
                  {/* Card Container */}
                  <div className='max-w-2xl mx-auto space-y-10 '>
                    <section className=' text-white'>
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
                    <section className=' text-white'>
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
                    <section className=' text-white'>
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
                            Explore Universe Market to upload your projects, see
                            others projects and find an intelligent shop to
                            purchase and sell necessary engineering pieces.
                          </p>
                        </div>
                      </div>
                    </section>
                    <section className=' text-white'>
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
                            contents you love and have been waiting for so long.
                          </p>
                        </div>
                      </div>
                    </section>
                    <section className=' text-white'>
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
                            volunteer to know what matters most in your society
                            in technological development aspects and view other
                            people's activities.
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                  {/* App Store Buttons */}
                  <div className='max-w-4xl '>
                    <div className='w-full p-2 md:p-28 text-center shadow-md  space-y-12 '>
                      <h5 className='mb-5 text-xs md:text-sm lg:text-lg font-bold text-white font-heading'>
                        The universe of engineering & technology is now in your
                        pocket.
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
                            <div className='mb-1 text-xs'>Download on the</div>
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
                        <span className='font-bankgothic '>TARS UNIVERSE</span>{' '}
                        app from your Google Play Store and Apple App Store &
                        turn on the internet & enjoy your wise word now.
                      </p>
                    </div>
                  </div>
                </div>
                {/* App Store Details Container */}
                <div className='app-store-details-container'>
                  {/* Universe Learn */}
                  <div className='mb-12'>
                    <div className='w-3/12 mx-auto mb-5'>
                      <img
                        src={learnIcon}
                        alt=''
                        className='w-full rounded-md object-contain'
                      />
                    </div>
                    <h1 className='font-heading text-2xl md:text-3xl lg:text-4xl mb-10'>
                      Universe Learn
                    </h1>
                    <p className='font-heading text-xs md:text-xl lg:text-2xl mb-10'>
                      Learn how to create your engineering project
                    </p>
                    <p className='font-paragraph text-sm md:text-base lg:text-2xl mb-10'>
                      Universe Learn is a revolutionary online library of
                      department-based engineering education. It provides a
                      complete guideline for understanding various engineering
                      subjects, including what, how, and practical ways to learn
                      to engineer. Once you have learned the basics, you can
                      also learn how to create projects in your respective
                      field. Universe Learn's engineering department includes
                      computer, machine, electric, and electronics engineering.
                      Each department has a unique set of courses that are not
                      just limited to video course content. Instead, each piece
                      of content has a dramatic starting, similar to film
                      trailers. This format captures students' interest and
                      keeps them engaged throughout the course. Universe Learn's
                      courses are designed with a dramatic conceptual structure
                      that makes learning an enjoyable experience. It is an
                      entertainment and learning capsule that will boost your
                      learning interest and make even the most complex
                      engineering concepts easier to understand.
                    </p>
                  </div>
                  {/* Universe Market  */}
                  <div className='mb-12'>
                    <div className='w-3/12 mx-auto mb-5'>
                      <img
                        src={marketIcon}
                        alt=''
                        className='w-full rounded-md object-contain'
                      />
                    </div>
                    <h1 className='font-heading text-2xl md:text-3xl lg:text-4xl mb-10'>
                      Universe Market
                    </h1>
                    <p className='font-heading text-xs md:text-xl lg:text-2xl mb-10'>
                      Create it, Upload it | A Giant Resource Hub of Engineering
                      Projects
                    </p>
                    <p className='font-paragraph text-sm md:text-base lg:text-2xl mb-10'>
                      Engineering students often work on projects throughout
                      their studies. However, in today's world, knowing where to
                      showcase their work and compete with others can be
                      challenging. This is where the Universe Market comes in.
                      It is designed to cater to the needs of curious
                      engineering students, providing them with a platform to
                      upload their projects, whether physical or digital. With
                      the Universe Market, students can create a post and
                      archive it to their profile, making it easily accessible
                      to others worldwide. They can also track their project's
                      ranking and compete with others while earning rewards and
                      awards for valuable work. This feature encourages students
                      to put their best effort into their projects and showcases
                      their talent to a global audience. Another exciting
                      feature of the Universe Market is its project templates.
                      Students can explore templates of various engineering
                      projects, providing them with a step-by-step guide on how
                      to build something from scratch. For example, if students
                      want to create a robot but need help with how to do it,
                      they can explore the Robot Templates. These templates help
                      students understand the basic and advanced levels of
                      engineering required to build a robot. This approach makes
                      learning more accessible for those new to engineering, and
                      students can apply what they have learned to create their
                      unique projects. The Universe Market is not just a
                      platform to showcase projects. It is also a resource hub
                      that provides students access to tools, assets, and
                      engineering equipment needed to complete their tasks. By
                      exploring other projects, students can learn how others
                      created their projects and the tools and equipment they
                      used. Overall, the Universe Market is an excellent
                      platform for engineering students who want to showcase
                      their work and learn from others. Its project templates,
                      tracking features, and resource hub make it the perfect
                      place for students to explore, learn, and create something
                      new beyond their imagination.
                    </p>
                  </div>
                  {/* Universe Entertainment */}
                  <div className='mb-12'>
                    <div className='w-3/12 mx-auto mb-5'>
                      <img
                        src={youtubeIcon}
                        alt=''
                        className='w-full rounded-md object-contain'
                      />
                    </div>
                    <h1 className='font-heading text-2xl md:text-3xl lg:text-4xl mb-10'>
                      Universe Entertainment
                    </h1>
                    <p className='font-heading text-xs md:text-xl lg:text-2xl mb-10'>
                      Explore Movies, Drama Series, and Educational Web Series
                    </p>
                    <p className='font-paragraph text-sm md:text-base lg:text-2xl mb-10'>
                      Universe Entertainment is a library of original content
                      that is innovative and futuristic, primarily based on
                      science and technology-based drama, engineering conceptual
                      documentaries, and original movies and drama series. This
                      platform is designed to function as the film industry in a
                      way that aligns with technological development, making it
                      easier for the future generation to understand the current
                      digital world. The Universe Entertainment library contains
                      unique and compelling content spanning various genres.
                      From science fiction to engineering, each piece is
                      thought-provoking and entertaining. This platform provides
                      a space where viewers can watch original content they
                      cannot find anywhere else. One of the most exciting
                      aspects of Universe Entertainment is its commitment to
                      exploring science and technology through its content. This
                      approach is not just about creating entertainment but also
                      encouraging viewers to think about the potential
                      applications of technology in the future. This approach is
                      essential in a world where technology shapes and impacts
                      how we live and work. Universe Entertainment's original
                      movies, drama series, and documentaries are designed to
                      showcase the endless possibilities that science and
                      technology offer. For instance, the platform's conceptual
                      engineering documentaries are an excellent way for viewers
                      to learn about the latest engineering developments and
                      understand how they can impact society. Similarly, science
                      and technology-based drama series and movies allow viewers
                      to explore future possibilities. In today's digital world,
                      it is essential to have a platform that can provide
                      entertaining and educational content. Universe
                      Entertainment is the perfect platform for this. By
                      blending entertainment and education, the platform creates
                      a space where viewers can learn about science, technology,
                      engineering, and much more. Universe Entertainment is an
                      innovative platform providing viewers with unique and
                      exciting content. From science fiction to engineering
                      documentaries, the platform's commitment to exploring
                      science and technology is evident in every piece of
                      content. The platform's focus on technology and its
                      potential applications makes it a valuable resource for
                      anyone interested in learning about the future of
                      technology. Overall, Universe Entertainment is an
                      excellent platform providing entertainment and education
                      to its viewers.
                    </p>
                  </div>
                  {/* Engineering Volunteers */}
                  <div className='mb-12'>
                    <div className='w-3/12 mx-auto mb-5'>
                      <img
                        src={tarsIcon}
                        alt=''
                        className='w-full rounded-md object-contain'
                      />
                    </div>
                    <h1 className='font-heading text-2xl md:text-3xl lg:text-4xl mb-10'>
                      Engineering Volunteers
                    </h1>
                    <p className='font-heading text-xs md:text-xl lg:text-2xl mb-10'>
                      The Next Generations Volunteering
                    </p>
                    <p className='font-paragraph text-sm md:text-base lg:text-2xl mb-10'>
                      Welcome to the Digital Community Development Zone, a
                      prestigious platform that fosters a career-oriented
                      approach to community development. Engineering Volunteers
                      is a part of TARS UNIVERSE, where students engage in
                      social work through technology to address the issues
                      facing our society. The community was created to protect
                      the younger generation from the negative impacts of the
                      virtual world, where an endless array of social platforms
                      can expose students to both good and bad content that can
                      be mentally harmful. As technology advances at an
                      unprecedented pace, we recognize the need for a guiding
                      principle to shape the digital platform into a force for
                      good. Engineering Volunteers provides a role model for
                      students to follow and develop into responsible digital
                      citizens. Our community is open to anyone wishing to
                      volunteer, share their social work portfolio, and
                      collaborate with like-minded individuals toward social
                      development. We understand the importance of maintaining a
                      sustainable platform and are committed to maintaining the
                      proper protocols to keep our digital society safe and
                      healthy. By supporting the Engineering Volunteers
                      community, we aim to empower students to positively impact
                      the world and create a better future for future
                      generations. Anyone can join us and register on{' '}
                      <span className='font-bankgothic'>TARS UNIVERSE</span> to
                      become an Engineering Volunteer today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TarsUniverse;
