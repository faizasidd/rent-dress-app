import React, { useState } from "react";
import "./AddDress.scss";
import arrowBack from "../../assets/icons/back-arrow.png";
import DressForm from "../DressForm/DressForm";
import useForm from "../../utils/useForm";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddDress = (props) => {
  const [dress, setDress] = useState({
  });

  const AddDress = (e) => {
    e.preventDefault();
    if (handleSubmit(e, dress)) {
      axios
        .post(
          'http://localhost:8080/dress/',
          dresses,
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
    setDress({ ...dresses, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-dress">
      <div className="add-dress__title-container">
        <Link to="/">
        <img className="add-dress__back-icon"src={arrowBack} />
        </Link>
        <h1 className="add-dress__title">Add Dress</h1>
      </div>
      <div className="add-dress__form-container">
        <DressForm
          handleInputChange={handleInputChange}
          dresses={dresses}
          setDress={setDress}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="add-dress__button-container">
        <Link to='/'>
        <button className="add-dress__button">Cancel</button>
        </Link>
        <button
          onClick={AddDress}
          type="submit"
          value="submit"
          className="add-dress__button--save"
        >
          + Add Dress
        </button>
      </div>
    </div>
  );
};

export default AddDress;
