import React from "react";
import ".././DressForm/DressForm.scss";
import ".././DressContainer/DressContainer.scss";
import arrowBack from "../../assets/icons/back-arrow.png";
import Logo from '../../assets/logo/logo.png';
import { NavLink } from 'react-router-dom';

const LoginForm = (props) => {


    return (
        <>

            <div className="dress-container__background3">
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
                        //  onSubmit={handleOnSubmit}
                        >
                            <input className="dress-form-input" type="text" placeholder="Username"
                            // onChange={e => handleOnChange(e)} 
                            />
                            <input className="dress-form-input" type="text" placeholder="Password"
                            // onChange={e => handleOnChange(e)} 
                            />
                            <button className="dress-form-button" type="submit">Login</button>
                        </form>
                        <NavLink to="/register">
                            <button className="dress-form-button"
                            >Switch to Registration</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginForm;