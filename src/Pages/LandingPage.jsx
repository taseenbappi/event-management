import React from 'react';
import "../styles/LandingPage.css";
import eventImage from "../assets/landing-page-image.svg";

const LandingPage = () => {

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                        <img src={eventImage} alt="" className='img-fluid landing-event-img' />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                        <h1 className='landing-main-title'>Imagine if <span>Snapchat</span> had events.</h1>
                        <p className='landing-sub-title'>Easily host and share events with your friends across any social media.</p>
                        <button className='create-event-btn d-block ms-auto'>🎉Create my event</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LandingPage;