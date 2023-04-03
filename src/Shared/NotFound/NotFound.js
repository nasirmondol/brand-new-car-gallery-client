import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='mt-10 text-center'>
            <h1 className='text-4xl text-center font-bold '>400</h1>
            <p className='text-center font-bold'>Error, This page is not found</p>
            <button className=' mt-10 btn btn-lg btn-primary justify-items-center'><Link to='/'>Back</Link></button>
        </div>
    );
};

export default NotFound;