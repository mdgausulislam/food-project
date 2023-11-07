import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
// import Nav from '../components/Nav';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Banner></Banner>
       
        </div>
    );
};

export default Main;