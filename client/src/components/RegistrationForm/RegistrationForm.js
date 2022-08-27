import React from "react";
import ".././DressForm/DressForm.scss";
import ".././DressContainer/DressContainer.scss";
import arrowBack from "../../assets/icons/back-arrow.png";
import Logo from '../../assets/logo/logo.png';
import { NavLink } from 'react-router-dom';

const RegistrationForm = (props) => {


    return (
        <>

            <div className="dress-container__background1">
                <img
                    src={Logo}
                    width="230"
                    className="top-centered-logo"
                    alt="Say Yes To A Dress Logo"
                />
                <div className="back-arrow-box">
                    <NavLink to="/">
                        <img
                            width="30"
                            src={arrowBack}
                            alt="back-arrow"
                        />
                    </NavLink>
                </div>
                <div className='overlay'>
                    <div className="centered">
                        <form className="dress-form"
                        // onSubmit={props.handleOnSubmit}
                        >
                            <input className="dress-form-input" id="username" type="text" placeholder="Username"
                            // onChange={e => handleOnChange(e)} 
                            />
                            <input className="dress-form-input" id="password" type="text" placeholder="Password"
                            // onChange={e => handleOnChange(e)} 
                            />
                            <input className="dress-form-input" id="name" type="text" placeholder="Full Name"
                            // onChange={e => handleOnChange(e)} 
                            />
                            <input className="dress-form-input" id="email" type="text" placeholder="Email"
                            // onChange={e => handleOnChange(e)} 
                            />
                            <input className="dress-form-input" id="location" type="text" placeholder="Location"
                            // onChange={e => handleOnChange(e)} 
                            />
                            <button className="dress-form-button" type="submit">Create Account</button>
                        </form>
                        <NavLink to="/login">
                            <button className="dress-form-button"
                            >Switch to Login</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegistrationForm;