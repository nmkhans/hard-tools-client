import React, { useEffect } from 'react';
import img from './register.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from '../../global/Loading/Loading'
import { toast } from 'react-toastify';
import useToken from './../../hooks/useToken';


const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const uploadApi = '4ef6064f92cecc9354940bb42dad244d';
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);
    const [updateProfile] = useUpdateProfile(auth);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { token } = useToken(user || googleUser);

    useEffect(() => {
        if (token) {
            toast.success("Registration Successfull")
            navigate(from, { replace: true });
        }
    }, [from, navigate, token])

    if (error || googleError) {
        // eslint-disable-next-line no-unused-vars
        console.log(error || googleError)
    }

    if (loading || googleLoading) {
        return <Loading />
    }

    if (user || googleUser) {
        navigate('/')
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const image = data.image;
        const formData = new FormData();
        formData.append('image', image[0]);

        fetch(`https://api.imgbb.com/1/upload?key=${uploadApi}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(async data => {
                const img = data?.data?.url;
                await createUserWithEmailAndPassword(email, password);
                await updateProfile({ displayName: name, photoURL: img });
                toast.success('Registration Successfull');
                reset();
            })
    };

    return (
        <div className="Register py-10">
            <div className="container mx-auto">
                <div className="register__content">
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row justify-between">
                            <div className="register__img">
                                <img className="w-[600px]" src={img} alt="" />
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                                <div className="card-title justify-center items-center pt-7">Register</div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="Name" className="input input-bordered"
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: 'Name is required',
                                                    }
                                                })} />
                                            <label>
                                                {errors.name?.type === 'required' && <p className="font-semibold text-red-500">
                                                    {errors.name.message}
                                                </p>}
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="text" placeholder="email" className="input input-bordered"
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: 'Email is required',
                                                    },
                                                    pattern: {
                                                        value: /[A-z0-9]+@[a-z]+\.[a-z]{1,2}/,
                                                        message: 'Provide a valid Email'
                                                    }
                                                })} />
                                            <label>
                                                {errors.email?.type === 'required' && <p className="font-semibold text-red-500">
                                                    {errors.email.message}
                                                </p>}
                                                {errors.email?.type === 'pattern' && <p className="font-semibold text-red-500">
                                                    {errors.email.message}
                                                </p>}
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="text" placeholder="password" className="input input-bordered"
                                                {...register("password", {
                                                    required: {
                                                        value: true,
                                                        message: 'Password is required',
                                                    },
                                                    minLength: {
                                                        value: 6,
                                                        message: "Password must be 6 character or longer"
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors.password?.type === 'required' && <p className="font-semibold text-red-500">
                                                    {errors.password.message}
                                                </p>}
                                                {errors.password?.type === 'minLength' && <p className="font-semibold text-red-500">
                                                    {errors.password.message}
                                                </p>}
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Profile Image</span>
                                            </label>
                                            <input type="file" className="input input-bordered"
                                                {...register("image")}
                                            />
                                        </div>
                                        <label className="text-center mt-5">
                                            Already have an account? <Link className="text-secondary" to="/login">Login</Link>
                                        </label>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary text-black">Register</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="google__login form-control text-center">
                                    <div className="divider w-3/4 mx-auto">OR</div>
                                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-black text-black w-5/6 mx-auto mb-8">Continue with google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goHome">
                    <Link to="/" className="btn btn-sm btn-outline">Go Back</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;