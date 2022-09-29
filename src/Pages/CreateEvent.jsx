import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/CreateEvent.css";

const CreateEvent = () => {

    return (
        <div className="container-fluid create-event-page">

            <div className="container py-5">

                <div className="row justify-content-center ">
                    <div className="col-12 col-sm-12 col-md-7 col-lg-6 bg-white p-4 rounded">
                        <h1 className='create-event-header'>Create Event</h1>
                        <form className="row g-3">
                            <div className="col-12">
                                <label htmlFor="event_name" className="form-label form-label-title">Event name</label>
                                <input type="text" className="form-control event-input-field" id="event_name" placeholder="Type event name" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="host_name" className="form-label form-label-title">Host name</label>
                                <input type="password" className="form-control event-input-field" id="host_name" placeholder="Type host name" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="location" className="form-label form-label-title">Location </label>
                                <input type="text" className="form-control event-input-field" id="location" placeholder="Dhaka, Bangladesh" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="photo" className="form-label form-label-title">Event photo</label>
                                <input type="file" className="form-control event-input-field" id="photo" />
                            </div>


                            <div className="col-6 col-md-6 col-lg-6">
                                <button type="submit" className="submit-event-btn">Submit</button>
                            </div>

                            <div className="col-6 col-md-6 col-lg-6 text-end">
                                <Link to="/event">
                                    <button className="submit-event-btn">Next</button>
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CreateEvent;