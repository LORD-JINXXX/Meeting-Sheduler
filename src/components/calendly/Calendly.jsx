import React from 'react';
import './calendly.css';
import { InlineWidget } from "react-calendly";
import { useAuth0 } from "@auth0/auth0-react";


const Calendly = () => {
    const {isAuthenticated } = useAuth0();
    return (
        <>
            <div className="main">
                {
                    isAuthenticated ?
                    <InlineWidget url="https://calendly.com/mustafamdsajid1" />
                    : <h1>Please login to schedule your meeting </h1>
                }
            </div>
        </>
    )
}

export default Calendly;
