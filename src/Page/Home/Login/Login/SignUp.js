import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase/firebase.config';
import { Toaster, toast } from 'react-hot-toast';
import googleLogo from '../../../../assets/google logo/goolge logo.png'

const SignUp = () => {
    const [user] = useAuthState(auth);

    const [user1, setUser1] = useState(null)

    console.log(user)
    const location = useLocation();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [updateProfile, updating, error] = useUpdateProfile(auth);


    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification] = useSendEmailVerification(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);


    const handleSingUp = async (data) => {
        const createEmailAndPassword = await createUserWithEmailAndPassword(data.email, data.password)
        if (createEmailAndPassword) {
            toast.success('User created successfully.')
        }
        const success = await sendEmailVerification()
        if (success) {
            toast('sent email verification')
        }
        const updateName = await updateProfile(auth.currentUser)
        if(updateName){
            toast.success('updated the name')
        }
        console.log(data)
    }

    if(user){
        navigate('/')
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-secondary font-bold text-center'>Sing up</h2>
                <form onSubmit={handleSubmit(handleSingUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name",
                            { required: 'name is required' }
                        )}
                            placeholder="Your name"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.text && <small className='text-red-600'> Name is required</small>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email",
                            { required: 'email is required' }
                        )}
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <small className='text-red-600'>email address is required</small>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: 'password is required',
                            minLength: { value: 6, message: 'password at least 6 characters or longer' },
                        })}
                            type="password" placeholder="password"
                            className="input input-bordered w-full max-w-xs" />

                        {errors.password && <small className='text-red-600'>{errors.password.message}</small>}
                    </div>
                    <input className='w-full btn btn-accent mt-5' value="Sign Up" type="submit" />
                    
                </form>
                <p><small>Already have an account? <Link to='/login' className='text-secondary '> Please Login </Link></small></p>
                <div className='divider'>OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline  w-full '><img width={35} src={googleLogo} alt="" />  continue with google</button>
            </div>
            <Toaster />
        </div>
    );
};

export default SignUp;