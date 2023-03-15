import React from 'react';
import entertainmentIcon from '../../Assets/Images/ICONS/entertainment.png';
import learnIcon from '../../Assets/Images/ICONS/icon.png';
import marketIcon from '../../Assets/Images/ICONS/market.png';
import searchIcon from '../../Assets/Images/ICONS/search.png';
import todayIcon from '../../Assets/Images/ICONS/Today.png';
import volunteersIcon from '../../Assets/Images/ICONS/volunteers.png';

const BottomNavbar = () => {
  return (
    <>
      {/* Bottom Navbar Container */}
      <div className='bottom-navbar-container'>
        <div className='btm-nav glass py-10'>
          <div className='flex flex-row items-center space-x-1 md:space-x-8 lg:space-x-12 xl:space-x-24 2xl:space-x-36  '>
            <button className='flex flex-col items-center justify-center'>
              <img src={todayIcon} alt='' className='w-5 md:w-8 lg:w-10' />
              <p className='text-[#808080] font-medium text-xs md:text-sm lg:text-base'>Today</p>
            </button>
            <button className='flex flex-col items-center justify-center'>
              <img src={learnIcon} alt='' className='w-5 md:w-8 lg:w-10' />
              <p className='text-[#808080] font-medium text-xs md:text-sm lg:text-base'>Learn</p>
            </button>
            <button className='flex flex-col items-center justify-center'>
              <img src={marketIcon} alt='' className='w-5 md:w-8 lg:w-10' />
              <p className='text-[#808080] font-medium text-xs md:text-sm lg:text-base'>Market</p>
            </button>
            <button className='flex flex-col items-center justify-center'>
              <img src={entertainmentIcon} alt='' className='w-5 md:w-8 lg:w-10' />
              <p className='text-[#808080] font-medium text-xs md:text-sm lg:text-base'>Entertaiment</p>
            </button>
            <button className='flex flex-col items-center justify-center'>
              <img src={volunteersIcon} alt='' className='w-5 md:w-8 lg:w-10' />
              <p className='text-[#808080] font-medium text-xs md:text-sm lg:text-base'>Volunteers</p>
            </button>
            <button>
              <img src={searchIcon} alt='' className='w-5 md:w-8 lg:w-10' />
              <p className='text-[#808080] font-medium text-xs md:text-sm lg:text-base '>Search</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
