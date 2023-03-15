import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cart from '../../Assets/Images/cart.png';
import hambg from '../../Assets/Images/hambg.png';
import logo from '../../Assets/Images/logo.png';
import search from '../../Assets/Images/search.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* Navbar Container */}
      <div className='navbar-container font-navbar '>
        <div className=' bg-black fixed w-full z-50'>
          <div className=' mx-auto max-w-full md:max-w-full lg:max-w-screen-xl '>
            <div className='relative flex items-center justify-center '>
              <div className='flex  items-center justify-between w-full lg:w-auto px-5 lg:px-2'>
                <button
                  aria-label='Open Menu'
                  title='Open Menu'
                  className='hambg-btn-open p-2 -mr-1 rounded focus:outline-none focus:shadow-outline lg:hidden transition duration-700 ease-linear delay-150'
                  onClick={() => setIsMenuOpen(true)}
                >
                  <img src={hambg} alt='' className='w-6 h-6' />
                </button>

                <NavLink
                  to='/home'
                  aria-label='Company'
                  title='Company'
                  className='inline-flex items-center'
                >
                  <img src={logo} alt='' className='w-14 h-13' />
                </NavLink>

                <a
                  href='/'
                  aria-label='About us'
                  title='About us'
                  className='font-medium tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400 lg:hidden'
                >
                  <img src={cart} alt='' className='w-6 h-6' />
                </a>
              </div>
              <ul className='items-center hidden space-x-3 xl:space-x-5 lg:flex lg:justify-evenly text-xs font-thin'>
                <li>
                  <NavLink
                    to='/defense-projects'
                    aria-label='Our product'
                    title='Defense Projects'
                    className='font-thin tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                  >
                    Defense Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/engineering-school'
                    aria-label='Our product'
                    title='Engineering School'
                    className='font-thin tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                  >
                    Engineering School
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/engineering-volunteers'
                    aria-label='Product pricing'
                    title='Engineering Volunteers'
                    className='font-thin tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                  >
                    Engineering Volunteers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/director's-note"
                    aria-label='About us'
                    title="Director's Note"
                    className='font-thin tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                  >
                    Director's Note
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/administration'
                    aria-label='About us'
                    title='Administration'
                    className='font-thin tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                  >
                    Administration
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/'
                    aria-label='About us'
                    title='Board members'
                    className='font-thin tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                  >
                    Board members
                  </NavLink>
                </li>
                {/* <li>
									<a
										href='/'
										aria-label='About us'
										title='Gallery'
										className='font-thin tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
									>
										Gallery
									</a>
								</li> */}
                <li>
                  <NavLink
                    to='/documents'
                    aria-label='About us'
                    title='Documents'
                    className='font-thin tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                  >
                    Documents
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/about'
                    aria-label='About us'
                    title='About'
                    className='font-thin tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                  >
                    About
                  </NavLink>
                </li>
              </ul>
              <ul className='ml-4 items-center hidden lg:flex space-x-2'>
                <li>
                  <a
                    href='/'
                    aria-label='About us'
                    title='About us'
                    className='font-medium tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                  >
                    <img src={search} alt='' className='w-6 h-6' />
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    aria-label='About us'
                    title='About us'
                    className='font-medium tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                  >
                    <img src={cart} alt='' className='w-6 h-6' />
                  </a>
                </li>
              </ul>
              <div className='lg:hidden'>
                {isMenuOpen && (
                  <div className='absolute top-0 right-0 w-full  h-screen transition duration-700 ease-linear opacity-1'>
                    <div className='p-5 bg-black w-full h-screen'>
                      <div className='flex items-center justify-between mb-4 -mt-6 w-full pt-2'>
                        <div>
                          <button
                            aria-label='Close Menu'
                            title='Close Menu'
                            className='p-2 -mt-2 -mr-2 transition duration-1000 ease-in-out rounded  focus:outline-none focus:shadow-outline'
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg
                              className='w-5 text-gray-600'
                              viewBox='0 0 24 24'
                            >
                              <path
                                fill='currentColor'
                                d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                              />
                            </svg>
                          </button>
                        </div>
                        <div>
                          <NavLink
                            to='/home'
                            aria-label='Company'
                            title='Company'
                            className='inline-flex items-center'
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <img
                              src={logo}
                              alt=''
                              className='w-16 h-13 -ml-1 -mt-1'
                            />
                          </NavLink>
                        </div>
                        <div className=''>
                          <a
                            href='/'
                            aria-label='About us'
                            title='About us'
                            className='font-medium tracking-wide text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400 hidden'
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <img src={cart} alt='' className='w-6 h-6' />
                          </a>
                        </div>
                      </div>
                      <nav className='transition duration-700 ease-linear opacity-1'>
                        <ul className='space-y-4 transition duration-700 ease-linear opacity-1'>
                          <li className=''>
                            <div className='relative mb-2 -mt-6'>
                              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                <svg
                                  aria-hidden='true'
                                  className='w-5 h-5 text-gray-500'
                                  fill='none'
                                  stroke='currentColor'
                                  viewBox='0 0 24 24'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                  ></path>
                                </svg>
                              </div>
                              <input
                                className='block w-full h-10 p-4 pl-10 text-base font-semibold text-white rounded-lg bg-[#1D1D1F]'
                                placeholder=''
                                required
                              />
                            </div>
                            <hr className='mt-3 h-px bg-gray-500 border-0'></hr>
                          </li>

                          <li className='px-5'>
                            <NavLink
                              to='/defense-projects'
                              aria-label='Our product'
                              title='	Defense Projects'
                              className='font-thin   text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Defense Projects
                            </NavLink>
                            <hr className='mt-3 h-px bg-gray-600 border-0'></hr>
                          </li>
                          <li className='px-5'>
                            <NavLink
                              to='/engineering-school'
                              aria-label='Our product'
                              title='Engineering School'
                              className='font-thin  text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Engineering School
                            </NavLink>
                            <hr className='mt-3 h-px bg-gray-600 border-0'></hr>
                          </li>
                          <li className='px-5'>
                            <NavLink
                              to='/engineering-volunteers'
                              aria-label='Product pricing'
                              title='Engineering Volunteers'
                              className='font-thin  text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Engineering Volunteers
                            </NavLink>
                            <hr className='mt-3 h-px bg-gray-600 border-0'></hr>
                          </li>
                          <li className='px-5'>
                            <NavLink
                              to="/director's-note"
                              aria-label='About us'
                              title="Director's Note"
                              className='font-thin  text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Director's Note
                            </NavLink>
                            <hr className='mt-3 h-px bg-gray-600 border-0'></hr>
                          </li>
                          <li className='px-5'>
                            <NavLink
                              to='/administration'
                              aria-label='About us'
                              title='Administration'
                              className='font-thin  text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Administration
                            </NavLink>
                            <hr className='mt-3 h-px bg-gray-600 border-0'></hr>
                          </li>
                          <li className='px-5'>
                            <NavLink
                              to='/'
                              aria-label='About us'
                              title='Board members'
                              className='font-thin  text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Board members
                            </NavLink>
                            <hr className='mt-3 h-px bg-gray-600 border-0'></hr>
                          </li>
                          {/* <li className='px-5'>
														<a
															href='/'
															aria-label='About us'
															title='Event'
															className='font-thin  text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
														>
															Event
														</a>
														<hr className='mt-3 h-px bg-gray-500 border-0'></hr>
													</li>
													<li className='px-5'>
														<a
															href='/'
															aria-label='About us'
															title='Gallery'
															className='font-thin  text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
														>
															Gallery
														</a>
														<hr className='mt-3 h-px bg-gray-500 border-0'></hr>
													</li> */}
                          <li className='px-5'>
                            <NavLink
                              to='/documents'
                              aria-label='About us'
                              title='Documents'
                              className='font-thin  text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Documents
                            </NavLink>
                            <hr className='mt-3 h-px bg-gray-600 border-0'></hr>
                          </li>
                          <li className='px-5'>
                            <NavLink
                              to='/about'
                              aria-label='About us'
                              title='About'
                              className='font-thin text-[#f5f5f7] transition-colors duration-200 hover:text-teal-accent-400'
                              onClick={() => setIsMenuOpen(false)}
                            >
                              About
                            </NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
