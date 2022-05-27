import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { AiOutlineSearch, AiOutlineUser, AiOutlineDashboard } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';
import { ImCross } from 'react-icons/im';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import { signOut } from 'firebase/auth';
import auth from './../../firebase.init';

const Header = ({ user }) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);

    return (
        <div className="Header">
            <div className="container mx-auto">
                <div className="header__content">
                    <div className="header__top flex justify-between items-center">
                        <div className="header__logo w-[150px]">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="header__account flex items-center">
                            <div className="account__link px-3 lg:hidden">
                                <span><AiOutlineDashboard className="inline-block text-2xl mr-2" /></span>
                                <label htmlFor="dashboard-drawer">Dasboard</label>
                            </div>
                            <div className="account__link px-3">
                                <span><AiOutlineSearch className="inline-block text-2xl mr-2" /></span>
                                <Link to="/search">Search</Link>
                            </div>
                            <div className="account__link px-3">
                                {
                                    user?.uid ? (
                                        <div className="profile__menu relative cursor-pointer">
                                            <div onClick={() => setProfileMenu(!profileMenu)} className="avatar w-14 mt-2">
                                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={user?.photoURL} alt="User" />
                                                </div>
                                            </div>
                                            {
                                                profileMenu && (
                                                    <div className="account__menu shadow-2xl p-8 absolute top-20 -right-20 bg-base-100 w-80 rounded-xl">
                                                        <ul className="text-center">
                                                            <li className="mb-5"><Link to="/dashboard">Dashboard</Link></li>
                                                            <li className="mb-5"><Link to="/">My Account</Link></li>
                                                            <li className="mb-5"><button onClick={() => signOut(auth)}>Sign out</button></li>
                                                        </ul>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    ) : (
                                        <>
                                            <span className=""><AiOutlineUser className="inline-block text-2xl mr-2" /></span>
                                            <Link to="/login">Login</Link>
                                        </>
                                    )
                                }
                            </div>
                            <div className="mobile__menu__btn">
                                <span onClick={() => setMobileMenu(!mobileMenu)}>
                                    {
                                        mobileMenu ? (
                                            <ImCross className="inline-block text-2xl cursor-pointer" />
                                        ) : (
                                            <GoThreeBars className="inline-block text-2xl cursor-pointer" />
                                        )
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                    <HeaderNavigation mobileMenu={mobileMenu} />
                </div>
            </div>
        </div >
    );
};

export default Header;