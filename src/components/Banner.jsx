import React from 'react';
import LeftPart from './LeftPart';
import SideBar from './SideBar';
import MiddlePart from './MiddlePart/MiddlePart';

const Banner = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row"> {/* Use flex-col for small screens and flex-row for larger screens */}
            {/* Sidebar */}
            <div className='flex items-center'>
                <SideBar></SideBar>
            </div>

            {/* Main Content */}
            <div className="w-full p-4 bg-[#EEF0F2] rounded-tl-3xl">
                <div className="lg:grid lg:grid-cols-[3fr,7fr,2fr] sm:grid-cols-1 gap-5">
                    <div>
                        <LeftPart />
                    </div>
                    <div>
                        <MiddlePart></MiddlePart>
                    </div>
                    <div className="hidden sm:flex">
                        <h1>hemonto</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
