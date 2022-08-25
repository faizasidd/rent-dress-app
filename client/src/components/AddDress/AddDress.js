import React, { useState } from "react";
// import "./AddDress.scss";
import ".././DressForm/DressForm.scss"
import arrowBack from "../../assets/icons/back-arrow.png";
import DressForm from "../DressForm/DressForm";
import useForm from "../../utils/useForm";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Header from "../Header/Header";

const AddDress = (props) => {
  const [dress, setDress] = useState({
  });

  const AddDress = (e) => {
    e.preventDefault();
    if (handleSubmit(e, dress)) {
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
        });
    }
  };
  const { handleChange, values, errors, handleSubmit } = useForm();
  const handleInputChange = (e) => {
    handleChange(e);
    setDress({ ...dress, [e.target.name]: e.target.value });
  };

  return (
<div className='dress-container'>           
    <div className="dress-container__background">

        <Header />
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
          handleSubmit={handleSubmit} />
           <button
          onClick={AddDress}
          type="submit"
          value="submit"
          className="dress-form-button"
        >
          + Add Dress
        </button>
        </div>
    </div> 
    </div>
  );
};

export default AddDress;
