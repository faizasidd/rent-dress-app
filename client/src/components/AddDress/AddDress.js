import React, { useState } from "react";
// import "./AddDress.scss";
import ".././DressForm/DressForm.scss"
import ".././DressContainer/DressContainer.scss"
import arrowBack from "../../assets/icons/back-arrow.png";
import Logo from '../../assets/logo/logo.png'
import DressForm from "../DressForm/DressForm";
import useForm from "../../utils/useForm";
import axios from 'axios';
import { NavLink, useHistory } from 'react-router-dom';

const AddDress = (props) => {
  const [dress, setDress] = useState({
  });

  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
      axios
        .post(
          'http://localhost:8080/dress/',
          dress,
          {
            "Content-Type": "application/json",
          }
        )
        .then((response) => {
          console.log(response);
          history.push(response.data)
        });
  };
  const { handleChange, values, errors } = useForm();
  const handleInputChange = (e) => {
    handleChange(e);
    setDress({ ...dress, [e.target.name]: e.target.value });
  };

  return (       
    <>
     <div className="dress-container__background2">
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
          <DressForm    
          handleInputChange={handleInputChange}
          dress={dress}
          setDress={setDress}
          errors={errors}
          handleSubmit={handleSubmit} 
          />
           {/* <button
          onClick={addDress}
          type="submit"
          value="submit"
          className="dress-form-button"
        >
          + Add Dress
        </button> */}
        </div>
        </div>
        </>
  );
};

export default AddDress;
