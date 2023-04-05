import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase/firebase.config';
import gLogo from '../../../../assets/google logo/goolge logo.png';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    console.log(user)

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const { register, formState: { errors }, handleSubmit } = useForm();

    let signInError;
    if (error || gError) {
        signInError = <article className='text-red-500'><small>{error?.message || gError?.message}</small></article>
    }

    let from = location.state?.from?.pathname || "/home";

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true })
        }
    }, [user, gUser])

    if (loading || gLoading || sending) {
        return <progress className="progress w-56 justify-center items-center"></progress>
    }

    const handleLogin = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password)
        await sendPasswordResetEmail(data.email)
        setLoginUserEmail(data.email)

        console.log(data);

    }
    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-6'>
                <h4 className='font-normal text-xl text-center mb-15'>Login</h4>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email",
                            { required: 'email is required' }
                        )}
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'password is required'
                                },

                                minLength: {
                                    value: 6,
                                    message: 'Password should be at least 6 character length'
                                }
                            })}
                            placeholder="password"
                            className="input input-bordered w-full" />

                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    <input className='btn btn-accent w-full mb-3' type="submit" value="Login" />
                    <p className='text-red-500'><small>{signInError}</small></p>
                    <p><small>New to doctors portal?</small> <Link className='text-secondary' to="/signup">Create a new Account</Link></p>
                    <label className="label">
                        <p><small>Forget Password?</small> <Link className='text-secondary'
                            onClick={() => sendPasswordResetEmail()} >Reset Your password</Link></p>
                    </label>

                </form>
                <div className='divider'>OR</div>
                <button onClick={() => signInWithGoogle()} className='mb-10 btn btn-outline w-full uppercase'>
                    <img width={35} className='rounded' src={gLogo} alt="" />
                    Continue with google
                </button>
            </div>
        </div>
    );
};

export default Login;