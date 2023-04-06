import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';

const Purchase = () => {
    const [user] = useAuthState(auth);


    const handleBooking = event => {

        event.preventDefault();
        
    }

    return (
        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

            <input type="text" disabled defaultValue={user?.name} name='userName' placeholder="Your Name" className="input input-bordered input-primary w-full" />
            <input type="email" name='email' disabled defaultValue={user?.email} placeholder="Your Email" className="input input-bordered input-primary w-full" />
            <input type="" name='phone' placeholder="Phone number" className="input input-bordered input-primary w-full" />
            <input type="submit" className='w-full btn btn-accent' value="Submit" />
        </form>

    );
};

export default Purchase;