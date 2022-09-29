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
                        <form class="row g-3">
                            <div class="col-12">
                                <label for="event_name" class="form-label form-label-title">Event name</label>
                                <input type="text" class="form-control event-input-field" id="event_name" placeholder="Type event name" />
                            </div>
                            <div class="col-12">
                                <label for="host_name" class="form-label form-label-title">Host name</label>
                                <input type="password" class="form-control event-input-field" id="host_name" placeholder="Type host name" />
                            </div>
                            <div class="col-12">
                                <label for="location" class="form-label form-label-title">Location </label>
                                <input type="text" class="form-control event-input-field" id="location" placeholder="Dhaka, Bangladesh" />
                            </div>
                            <div class="col-12">
                                <label for="photo" class="form-label form-label-title">Event photo</label>
                                <input type="file" class="form-control event-input-field" id="photo" />
                            </div>


                            <div class="col-6 col-md-6 col-lg-6">
                                <button type="submit" class="submit-event-btn">Submit</button>
                            </div>

                            <div class="col-6 col-md-6 col-lg-6 text-end">
                                <Link to="/event">
                                    <button class="submit-event-btn">Next</button>
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