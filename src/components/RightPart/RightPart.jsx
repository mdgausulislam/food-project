import React from 'react';
// import textSquare from '../../assets/icon/text-square.svg'


const RightPart = () => {
    return (
        <div className='w-full hidden lg:flex bg-white m-2 p-5 rounded-2xl'>
            <input type="range" min={0} max="100" value="40" className="range range-error" />
        </div>
    );
};

export default RightPart;