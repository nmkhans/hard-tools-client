import React from 'react';
import register from './register.png';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="Register">
            <div className="container mx-auto">
                <div className="register__content">
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col lg:flex-row justify-between">
                            <div className="register__img">
                                <img className="w-[600px]" src={register} alt="" />
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                                <div className="card-title justify-center items-center pt-7">Register</div>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" />
                                        <label className="text-center mt-5">
                                            Already have an account? <Link className="text-secondary" to="/login">Login</Link>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;