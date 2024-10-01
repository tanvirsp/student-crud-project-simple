/* eslint-disable no-unused-vars */
import {  Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';



const MainLayout = () => {

  




    return (
        <div>

            <Outlet />
            <Toaster position="top-center" reverseOrder={false}  />
  
        </div>
    );
};

export default MainLayout;