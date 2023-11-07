import React from 'react';
import orange from '../../assets/banner/1.png'
import apple from '../../assets/banner/2.png'

const FruitsDetails = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col-reverse md:flex-row-reverse">
                    <img src={orange} className="rounded-lg shadow-2xl" />
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
            <p>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy</p>


            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={apple} className="rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">Health benefits of an avocado</h1>
                        <h4 className='font-bold'>Supports eye health:</h4>
                        <p className="py-6">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FruitsDetails;