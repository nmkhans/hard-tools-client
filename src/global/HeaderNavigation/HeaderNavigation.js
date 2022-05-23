import React from 'react';
import './HeaderNavigation.css';
import LinkTo from './../LinkTo/LinkTo';

const HeaderNavigation = ({ mobileMenu }) => {
    const NavItem = () => {
        return (
            <ul>
                <li>
                    <LinkTo to="/">Home</LinkTo>
                </li>
                <li>
                    <LinkTo to="/about">About</LinkTo>
                </li>
                <li>
                    <LinkTo to="/services">Services</LinkTo>
                </li>
                <li>
                    <LinkTo to="/blog">Blog</LinkTo>
                </li>
            </ul>
        )
    }
    return (
        <div className="header__navigation mt-2">
            <div className="container">
                <div className="header__nav__content">
                    <nav className="desktop__header">
                        <NavItem />
                    </nav>
                    <nav className="mobile__header flex">
                        {
                            mobileMenu && (
                                <div className="mobile__header__content">
                                    <NavItem />
                                </div>
                            )
                        }
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default HeaderNavigation;