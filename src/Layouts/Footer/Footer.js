import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../Assets/Images/logo1.png';

const Footer = () => {
  const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    // console.log(title);
    // console.log(children);
    return (
      <div className='border-t border-b'>
        <button
          type='button'
          aria-label='Open item'
          title='Open item'
          className='flex items-center justify-between w-full px-4 py-1 focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className='text-xs text-left font-extrabold text-gray-400 font-navbar capitalize '>
            {title}
          </p>
          <div className='flex items-center justify-center w-6 h-6'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='currentColor'
              // class='bi bi-plus'
              viewBox='0 0 16 16'
              className={`w-8 text-gray-500 transition-transform duration-200 ${
                isOpen ? 'transform rotate-45' : ''
              }`}
            >
              <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />{' '}
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className='p-8 pt-0'>
            <div className='text-gray-700'>{children}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Footer Container */}

      <div className='footer-container text-base-content mt-10 mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl z-50'>
        <hr className='mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl' />
        <footer className='footer p-10  hidden lg:flex lg:justify-around text-xs'>
          <div>
            <span className=' capitalize font-bold text-gray-600'>
              Universe Learn
            </span>
            <a href='/' className='link link-hover'>
              Concepts
            </a>
            <a href='/' className='link link-hover'>
              Courses
            </a>
          </div>
          <div>
            <span className=' capitalize  font-bold text-gray-600'>
              Universe Market
            </span>
            <a href='/' className='link link-hover'>
              Explore Project Templates
            </a>
            <a href='/' className='link link-hover'>
              Upload Projects
            </a>
            <a href='/' className='link link-hover'>
              Explore Projects
            </a>
            <a href='/' className='link link-hover'>
              Purchase Projcets
            </a>
            <a href='/' className='link link-hover'>
              Explore Tools
            </a>
            <a href='/' className='link link-hover'>
              Purchase Tools
            </a>
            <span className=' capitalize  font-bold mt-8 text-gray-600 '>
              Account
            </span>
            <a href='/' className='link link-hover'>
              Manage Your{' '}
              <span>
                <img
                  src={logo1}
                  alt=''
                  className='w-8 h-6 inline-block -mt-3'
                />
              </span>{' '}
              ID
            </a>
            <a href='/' className='link link-hover'>
              <span className=''>
                <img
                  src={logo1}
                  alt=''
                  className='w-8 h-6 inline-block -mt-3'
                />
              </span>{' '}
              Store Account
            </a>
          </div>

          <div>
            <span className=' capitalize  font-bold text-gray-600 '>
              Engineering Volunteers
            </span>
            <a href='/' className='link link-hover'>
              Registation Page
            </a>
            <a href='/' className='link link-hover'>
              Explore Activities
            </a>
            <a href='/' className='link link-hover'>
              Districts
            </a>
            <a href='/' className='link link-hover'>
              Find Volunteer Identity
            </a>
            <a href='/' className='link link-hover'>
              Top 100 Engineering Volunteers
            </a>
            <a href='/' className='link link-hover'>
              Events
            </a>
            <a href='/' className='link link-hover'>
              Gellary
            </a>
            <a href='/' className='link link-hover'>
              What is Engineering Volunteers
            </a>
            <a href='/' className='link link-hover'>
              How to be an Engineering Volunteer
            </a>
          </div>
          <div>
            <span className=' capitalize  font-bold text-gray-600'>
              Universe Entertainment
            </span>
            <a href='/' className='link link-hover'>
              Documentary
            </a>
            <a href='/' className='link link-hover'>
              Movies
            </a>
            <a href='/' className='link link-hover'>
              Web Series
            </a>
            <a href='/' className='link link-hover'>
              The Engineering
            </a>
          </div>
          <div>
            <span className=' capitalize  font-bold text-gray-600'>
              Universe Profile
            </span>
            <a href='/' className='link link-hover'>
              Dashboard
            </a>
            <a href='/' className='link link-hover'>
              Projects
            </a>
            <a href='/' className='link link-hover'>
              Achievements
            </a>

            <span className=' capitalize  font-bold mt-10 text-gray-600'>
              About
            </span>
            <a href='/' className='link link-hover'>
              Newsroom
            </a>
            <a href='/' className='link link-hover'>
              Career Opportunities
            </a>
            <a href='/' className='link link-hover'>
              Investors
            </a>
            <a href='/' className='link link-hover'>
              Ethics & Compliance
            </a>
            <a href='/' className='link link-hover'>
              Events
            </a>
            <a href='/' className='link link-hover'>
              Contact{' '}
              <span className=''>
                <img
                  src={logo1}
                  alt=''
                  className='w-8 h-6 inline-block -mt-3'
                />
              </span>{' '}
            </a>
          </div>
        </footer>

        {/* Acordion Container - Small Devices */}
        <div className=' block lg:hidden'>
          <div className='px-4 py-12 mx-auto w-full max-w-xl md:max-w-full lg:max-w-screen-xl'>
            <div className='w-full'>
              <div className='text-justify rounded  '>
                <Item title='Universe Learn'>
                  <footer className='footer text-xs'>
                    <div>
                      <a href='/' className='link link-hover'>
                        Concepts
                      </a>
                      <a href='/' className='link link-hover'>
                        Courses
                      </a>
                    </div>
                  </footer>
                </Item>
                <Item title='Universe Market'>
                  <footer className='footer text-xs'>
                    <div>
                      <a href='/' className='link link-hover'>
                        Explore Project Templates
                      </a>
                      <a href='/' className='link link-hover'>
                        Upload Projects
                      </a>
                      <a href='/' className='link link-hover'>
                        Explore Projects
                      </a>
                      <a href='/' className='link link-hover'>
                        Purchase Projcets
                      </a>
                      <a href='/' className='link link-hover'>
                        Explore Tools
                      </a>
                      <a href='/' className='link link-hover'>
                        Purchase Tools
                      </a>
                    </div>
                  </footer>
                </Item>
                <Item title='Account'>
                  <footer className='footer text-xs'>
                    <div>
                      <a href='/' className='link link-hover'>
                        Manage Your{' '}
                        <span>
                          <img
                            src={logo1}
                            alt=''
                            className='w-8 h-6 inline-block -mt-3'
                          />
                        </span>{' '}
                        ID
                      </a>
                      <a href='/' className='link link-hover'>
                        <span>
                          <img
                            src={logo1}
                            alt=''
                            className='w-8 h-6 inline-block -mt-3'
                          />
                        </span>{' '}
                        Store Account
                      </a>
                    </div>
                  </footer>
                </Item>
                <Item title='Engineering Volunteers'>
                  <footer className='footer text-xs'>
                    <div>
                      <a href='/' className='link link-hover'>
                        Registation Page
                      </a>
                      <a href='/' className='link link-hover'>
                        Explore Activities
                      </a>
                      <a href='/' className='link link-hover'>
                        Districts
                      </a>
                      <a href='/' className='link link-hover'>
                        Find Volunteer Identity
                      </a>
                      <a href='/' className='link link-hover'>
                        Top 100 Engineering Volunteers
                      </a>
                      <a href='/' className='link link-hover'>
                        Events
                      </a>
                      <a href='/' className='link link-hover'>
                        Gellary
                      </a>
                      <a href='/' className='link link-hover'>
                        What is Engineering Volunteers
                      </a>
                      <a href='/' className='link link-hover'>
                        How to be an Engineering Volunteer
                      </a>
                    </div>
                  </footer>
                </Item>
                <Item title='Universe Entertainment'>
                  <footer className='footer text-xs'>
                    <div>
                      <a href='/' className='link link-hover'>
                        Documentary
                      </a>
                      <a href='/' className='link link-hover'>
                        Movies
                      </a>
                      <a href='/' className='link link-hover'>
                        Web Series
                      </a>
                      <a href='/' className='link link-hover'>
                        The Engineering
                      </a>
                    </div>
                  </footer>
                </Item>
                <Item title='Universe Profile'>
                  <footer className='footer text-xs'>
                    <div>
                      <a href='/' className='link link-hover'>
                        Dashboard
                      </a>
                      <a href='/' className='link link-hover'>
                        Projects
                      </a>
                      <a href='/' className='link link-hover'>
                        Achievements
                      </a>
                    </div>
                  </footer>
                </Item>
                <Item title='About'>
                  <footer className='footer text-xs'>
                    <div>
                      <a href='/' className='link link-hover'>
                        Newsroom
                      </a>
                      <a href='/' className='link link-hover'>
                        Career Opportunities
                      </a>
                      <a href='/' className='link link-hover'>
                        Investors
                      </a>
                      <a href='/' className='link link-hover'>
                        Ethics & Compliance
                      </a>
                      <a href='/' className='link link-hover'>
                        Events
                      </a>
                      <a href='/' className='link link-hover'>
                        Contact{' '}
                        <span>
                          <img
                            src={logo1}
                            alt=''
                            className='w-8 h-6 inline-block -mt-3'
                          />
                        </span>{' '}
                      </a>
                    </div>
                  </footer>
                </Item>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <footer className='footer px-5 xl:px-10 py-2 mx-auto max-w-full xl:w-10/12 text-base-content border-base-300 border-t flex flex-col xl:flex-row items-start xl:items-center  justify-between'>
          <div className=' order-2 xl:order-1 text-xs'>
            <p>
              Copyright © 2023{' '}
              <span>
                <img
                  src={logo1}
                  alt=''
                  className='w-8 h-6 inline-block -mt-3'
                />
              </span>{' '}
              Inc. All rights reserved.
            </p>
          </div>
          <div className='order-3 xl:order-2 -mt-8 xl:-mt-0 '>
            <div className='text-xs '>
              <Link to='/signin' className=' link link-hover'>
                Administration{' '}
                <span className='mx-1 md:mx-3 text-zinc-300'>|</span>
              </Link>
              <a href='/' className=' link link-hover'>
                Privacy Policy{' '}
                <span className='mx-1 md:mx-3 text-zinc-300'>|</span>
              </a>
              <a href='/' className=' link link-hover'>
                Terms of Use{' '}
                <span className='mx-1 md:mx-3 text-zinc-300'>|</span>
              </a>
              <Link to='/documents' className=' link link-hover'>
                Documents <span className='mx-1 md:mx-3 text-zinc-300'>|</span>
              </Link>

              <a href='/' className=' link link-hover'>
                Legal <span className='mx-1 md:mx-3 text-zinc-300'>|</span>
              </a>
              <a
                href='https://goo.gl/maps/PHFQoTnVN8efgvbb8'
                className=' link link-hover'
                target={'_blank'}
                rel='noreferrer'
              >
                Site Map
              </a>
            </div>
          </div>
          <div className='justify-start xl:justify-end grid-flow-col order-1 xl:order-3 -mb-4 xl:-mb-0 text-xs'>
            <p>Bangladesh</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
