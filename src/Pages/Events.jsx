import React from 'react';
import cakeImg from "../assets/birthday-cake.png";
import { BsCalendarWeek } from 'react-icons/bs';
import { MdOutlineLocationOn, MdKeyboardArrowRight } from 'react-icons/md';
import "../styles/Events.css";

const Events = () => {

    return (
        <div className="container-fluid event-page">
            <div className="container">
                <div className="row ">

                    <div className="col-12 col-sm-12 col-md-12 pt-lg-0 pt-4 pt-md-4 col-lg-6 order-2 order-md-2 order-lg-1">

                        <div className="event-header">
                            <h1 className='event-title'>Birthday Bash</h1>
                            <p className='event-author-title'>Hosted by <strong>Elysia</strong></p>
                        </div>

                        <div className="event-date d-flex  align-items-center  justify-content-between py-3">
                            <div className="d-flex align-items-center">
                                <div className="event-icon">
                                    <BsCalendarWeek className='event-icon-style'></BsCalendarWeek>
                                </div>
                                <div className="event-date-details">
                                    <h1 className='event-title-style'>18 August 6:00PM</h1>
                                    <p className='event-title-sub-style'>to <strong>19 August 1:00PM</strong> UTC +10</p>
                                </div>
                            </div>
                            <div className="">
                                <MdKeyboardArrowRight className='fs-4 event-arrow-icon' ></MdKeyboardArrowRight>
                            </div>
                        </div>

                        <div className="event-date d-flex  align-items-center  justify-content-between py-3">
                            <div className="d-flex align-items-center">
                                <div className="event-icon">
                                    <MdOutlineLocationOn className='event-icon-style'></MdOutlineLocationOn>
                                </div>
                                <div className="event-address-details">
                                    <h1 className='event-title-style'>Street name</h1>
                                    <p className='event-title-sub-style'>Suburb, State, Postcode</p>
                                </div>
                            </div>
                            <div className="">
                                <MdKeyboardArrowRight className='fs-4 event-arrow-icon' ></MdKeyboardArrowRight>
                            </div>
                        </div>




                    </div>
                    <div className="p-0 p-lg-1 p-md-1 col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-md-1 order-lg-2 ">
                        <img src={cakeImg} alt="" className='img-fluid event-cake-img' />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Events;