import React from 'react';
import facebook from '../../assets/social/facebook.png'
import linkedin from '../../assets/social/linkedin.png'
import twitter from '../../assets/social/twitter.png'
import link from '../../assets/social/link.png'
import orange from '../../assets/banner/1.png'
import apple from '../../assets/banner/2.png'

const MiddlePart = () => {
    return (
        <div >
            <div className='flex'>
                <div className="w-[100px] text-white p-2 lg:menu-horizontal">
                    <ul className="menu rounded-box space-y-6">
                        <li>
                            <a className='border-2 rounded-md  bg-[#e655271a]'>
                                <img src={facebook} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className='border-2 rounded-md'>
                                <img src={linkedin} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className='border-2 rounded-md'>
                                <img src={twitter} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className='border-2 rounded-md'>
                                <img src={link} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={orange} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl font-bold">Health benefits of an avocado</h1>
                            <h4 className='font-bold'>Supports eye health:</h4>
                            <p className="py-6">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>

                            <h4 className='font-bold'>Supports eye health:</h4>
                            <p className="py-6">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                        </div>
                    </div>
                
                </div>
                <h4 className='font-bold'>Supports eye health:</h4>
 <p>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration..</p>
            </div>
        </div>
    );
};

export default MiddlePart;

