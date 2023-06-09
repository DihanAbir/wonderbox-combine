import { Spinner } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextAPI/AuthProvider';

const PriveteRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(loading);
    if (loading === true) {
        return <Spinner size="xl" className='flex justify-center items-center mx-auto mt-[40%]' />
    }
    else {
        if (user?._id) {
            return children
        }
        else if (!user?._id) {
            return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
        }
    }



};

export default PriveteRoute;