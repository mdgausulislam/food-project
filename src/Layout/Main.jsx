import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
// import Nav from '../components/Nav';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <Nav></Nav> */}
        </div>
    );
};

export default Main;