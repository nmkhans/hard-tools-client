import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';

const Header = () => {
    return (
        <div className="Header">
            <div className="container inner__header">
                <div className="header__content">
                    <div className="header__top flex justify-between items-center">
                        <div className="header__logo w-[150px]">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="header__account flex">
                            <div className="account__link px-3">
                                <span><AiOutlineHeart className="inline-block text-2xl mr-2"/></span>
                                <Link to="/wishlist">WishList</Link>
                            </div>
                            <div className="account__link px-3">
                                <span><AiOutlineSearch className="inline-block text-2xl mr-2"/></span>
                                <Link to="/search">Search</Link>
                            </div>
                            <div className="account__link px-3">
                                <span className=""><AiOutlineUser className="inline-block text-2xl mr-2"/></span>
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                    <div className="header__navigation">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;