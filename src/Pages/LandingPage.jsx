import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/LandingPage.css";
import eventImage from "../assets/landing-page-image.svg";

const LandingPage = () => {

    return (
        <div className="container-fluid landing-page">
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-2 order-md-2 order-lg-1">
                        <img src={eventImage} alt="" className='img-fluid landing-event-img' />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-md-1 order-lg-2 ">
                        <h1 className='landing-main-title'>Imagine if <br /><span>Snapchat</span><br /> had events.</h1>
                        <p className='landing-sub-title'>Easily host and share events with your friends across any social media.</p>
                        <Link to="/create" className='text-decoration-none'>
                            <button className='create-event-btn d-block ms-auto'>🎉Create my event</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LandingPage;