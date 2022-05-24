import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FaThumbsUp, FaHammer } from 'react-icons/fa';
import './State.css';

const State = () => {
    return (
        <div className="Stat">
            <div className="container mx-auto">
                <div className="state__title">
                    <h2 className="text-center text-black text-2xl uppercase font-semibold mb-10">People Trust Us</h2>
                </div>
                <div className="state__content text-center">
                    <div className="stats stats-vertical lg:stats-horizontal shadow text-center">

                        <div className="stat">
                            <div className="stat-title">Customar</div>
                            <div className="state-icon flex items-center justify-evenly text-primary">
                                <div><BsFillPeopleFill className="text-3xl text-accent" /></div>
                                <div className="stat-value">10000+</div>
                            </div>
                            <div className="stat-desc">Served already with satisfaction</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Revinew</div>
                            <div className="state-icon flex items-center justify-center text-primary">
                                <div><RiMoneyDollarCircleFill className="text-3xl mr-3 text-accent" /></div>
                                <div className="stat-value">1M+</div>
                            </div>
                            <div className="stat-desc">Generated with Customar Trust</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Reviews</div>
                            <div className="state-icon flex items-center justify-evenly text-primary">
                                <div><FaThumbsUp className="text-3xl mr-3 text-accent" /></div>
                                <div className="stat-value">10000+</div>
                            </div>
                            <div className="stat-desc">Earned with special service</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Tools</div>
                            <div className="state-icon flex items-center justify-evenly text-primary">
                                <div><FaHammer className="text-3xl text-accent" /></div>
                                <div className="stat-value">50+</div>
                            </div>
                            <div className="stat-desc">Varities of available</div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default State;