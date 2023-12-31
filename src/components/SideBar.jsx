import React from 'react';
import dashboard from '../assets/icon/dashboard-circle.svg'
import frame1 from '../assets/icon/Frame1.svg'
import home from '../assets/icon/home-01.svg'
import video from '../assets/icon/video-replay.svg'
import more from '../assets/icon/more-01.svg'

const SideBar = () => {
    return (
        <div className="w-[80px] text-white lg:menu-horizontal hidden lg:flex">
            <ul className="menu rounded-box space-y-12">
                <li>
                    <a className='border-2 rounded-md  bg-[#e655271a]'>
                        <img src={home} alt="" />
                    </a>
                </li>
                <li>
                    <a className='border-2 rounded-md'>
                        <img src={dashboard} alt="" />
                    </a>
                </li>
                <li>
                    <a className='border-2 rounded-md'>
                       <img src={frame1} alt="" />
                    </a>
                </li>
                <li>
                    <a className='border-2 rounded-md'>
                       <img src={video} alt="" />
                    </a>
                </li>
                <li>
                    <a className='border-2 rounded-md'>
                       <img src={more} alt="" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;