import React from 'react';
import fruits1 from '../assets/foods/1.png'
import fruits2 from '../assets/foods/2.png'
import fruits3 from '../assets/foods/3.png'

const FoodItems = () => {
    return (
        <div>
            <ul className="menu bg-base-200 rounded-box space-y-6">
                <h1 className='font-semibold text-lg'>Fruits List</h1>
                <li>
                    <div className='flex border-2 border-[#E55527] p-4'>
                        <img src={fruits1} alt="" />
                        <div>
                            <h1 className='font-semibold text lg'>Oranges</h1>
                            <p>Vitamin C</p>
                        </div>
                    </div>

                </li>
                <li>
                    <div className='flex p-4'>
                        <img src={fruits2} alt="" />
                        <div>
                            <h1 className='font-semibold text lg'>Apples</h1>
                            <p>Vitamin C</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex p-4'>
                        <img src={fruits3} alt="" />
                        <div>
                            <h1 className='font-semibold text lg'>Avocado</h1>
                            <p>Vitamin B6</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex p-4'>
                        <img src={fruits3} alt="" />
                        <div>
                            <h1 className='font-semibold text lg'>Strawberries</h1>
                            <p>Vitamin C</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex p-4'>
                        <img src={fruits3} alt="" />
                        <div>
                            <h1 className='font-semibold text lg'>Mangoes</h1>
                            <p>Vitamin A, C</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex p-4'>
                        <img src={fruits3} alt="" />
                        <div>
                            <h1 className='font-semibold text lg'>Blueberries</h1>
                            <p>Vitamin C, K</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex p-4'>
                        <img src={fruits3} alt="" />
                        <div>
                            <h1 className='font-semibold text lg'>Grapes</h1>
                            <p>Vitamin C, K</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex p-4'>
                        <img src={fruits3} alt="" />
                        <div>
                            <h1 className='font-semibold text lg'>Pineapples</h1>
                            <p>Vitamin C, K</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex p-4'>
                        <img src={fruits3} alt="" />
                        <div>
                            <h1 className='font-semibold text lg'>Papayas</h1>
                            <p>Vitamin C</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default FoodItems;