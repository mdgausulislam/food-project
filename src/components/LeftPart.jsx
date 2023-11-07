import React from 'react';
import dashMenu from '../assets/icon/menu-food-list.svg'
import FoodList from './FoodList';

const LeftPart = () => {
    return (
        // <div className="navbar bg-base-100">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <img src={dashMenu} alt="" />
        //                 <p>Select Food Item</p>
        //             </label>
        //         </div>
        //         <FoodList></FoodList>
        //     </div>
        //     <div className="navbar-end">
        //         <ul className="menu menu-horizontal">
        //             <li tabIndex={0} >
        //                 <details>
        //                     <summary></summary>
        //                     <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                         <li><a>Submenu 1</a></li>
        //                         <li><a>Submenu 2</a></li>
        //                     </ul>
        //                 </details>
        //             </li>
        //         </ul>
        //     </div>
        // </div>




        <div className="navbar rounded-box">
            <div className="flex-1 px-2 lg:flex-none flex lg:hidden">
                <img src={dashMenu} alt="" />
                <p>Select Food Item</p>
            </div>
            <FoodList></FoodList>
            <div className="flex justify-end flex-1 px-2 lg:hidden">
                <div className="flex items-stretch">
                    <div className="dropdown dropdown-end">
                        <details>
                            <summary>Parent</summary>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-96 mt-5 mr-28">
                                <li><a><FoodList></FoodList></a></li>
                                <p>hemonto</p>
                                
                            </ul>
                        </details>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftPart;