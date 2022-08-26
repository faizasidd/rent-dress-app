import React, { useState, useEffect } from "react";
import ".././DressForm/DressForm.scss"
import arrowBack from "../../assets/icons/back-arrow.png";
import DressForm from "../DressForm/DressForm";
import useForm from "../../utils/useForm";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useParams} from "react-router-dom";
import Header from "../Header/Header";

const EditDress = (props) => {
  const [dress, setDress] = useState({});

  const { id } = useParams();

  const fetchDress = () => {
    axios
      .get(`http://localhost:8080/dress/${id}`)
      .then((response) => {
        setDress(response.data.dress);
      });
  };

  useEffect(() => {
    fetchDress();
  }, []);


  const updateFetchedDress = (e) => {
    e.preventDefault();
    if (handleSubmit(e, dress)) {
      axios
        .put(
          `http://localhost:8080/dress/${id}`,
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
    <>
    <div className="edit-dress">
      <div className="edit-dress__title-dress">
        <NavLink className="edit-dress__back-icon" to='/'>
        <img src={arrowBack} />
        </NavLink>
        <h1 className="edit-dress__title">Edit Dress</h1>
      </div>
      <div className="edit-dress__form-container">
        <DressForm
          handleInputChange={handleInputChange}
          dress={dress}
          setDress={setDress}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </div>
        <button
          onClick={updateFetchedDress}
          type="submit"
          value="submit"
          className="edit-dress__button--save"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditDress;