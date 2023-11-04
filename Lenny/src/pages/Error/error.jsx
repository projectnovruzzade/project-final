import React from 'react'
import { NavLink } from 'react-router-dom';
import "./error.scss";

const Error = () => {
    return (
        <section id='error'>
            <h1>
                Wrong Page!
            </h1>
            <h3>
                <NavLink to={"/"}>
                  Return to Home
                </NavLink>
            </h3>
        </section>
    )
}

export default Error