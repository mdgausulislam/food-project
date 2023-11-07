import React from 'react';
import LeftPart from './LeftPart';
import SideBar from './SideBar';
import MiddlePart from './MiddlePart/MiddlePart';
import RightPart from './RightPart/RightPart';
import { Outlet } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row"> 
            <div className='flex items-center'>
                <SideBar></SideBar>
            </div>

            <div className="w-full p-4 bg-[#EEF0F2] rounded-tl-3xl">
                <div className="w-full lg:grid lg:grid-cols-[2fr,8fr,2fr] sm:grid-cols-1 gap-5">
                    <div>
                        <LeftPart />
                    </div>
                    <div>
                        <MiddlePart></MiddlePart>
                       <Outlet></Outlet>
                    </div>
                    <div className="hidden lg:flex">
                       <RightPart></RightPart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
