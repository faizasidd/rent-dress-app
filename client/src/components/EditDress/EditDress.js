import React, { useState, useEffect } from "react";
import ".././DressForm/DressForm.scss";
import ".././DressContainer/DressContainer.scss";
import arrowBack from "../../assets/icons/back-arrow.png";
import Logo from '../../assets/logo/logo.png';
import DressForm from "../DressForm/DressForm";
import useForm from "../../utils/useForm";
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';

const EditDress = (props) => {
  const [dress, setDress] = useState({});

  const { id } = useParams();

  const fetchDress = () => {
    axios
      .get(`http://localhost:8080/dress/${id}`)
      .then((response) => {
        console.log({ response })
        setDress(response.data);
      });
  };

  useEffect(() => {
    fetchDress();
  }, []);


  const updateFetchedDress = (e) => {

    e.preventDefault();
    if (handleSubmit(e, dress)) {
      let formobj = {
        dressDetails: {
          dressname: dress.dressname,
          description: dress.description,
          condition: dress.condition,
          designer: dress.designer,
          size: dress.size,
          image: dress.image,
          category_id: dress.category_id,
        },
        listingDetails: {
          originalprice: dress.originalprice,
          buyprice: dress.buyprice,
          rentprice: dress.rentprice,
        }
      }
      axios
        .put(
          `http://localhost:8080/dress/${id}`,
          formobj,
          {
            "Content-Type": "application/json",
          }
        )
        .then((response) => {
          console.log({ response });
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
          <DressForm
            handleInputChange={handleInputChange}
            dress={dress}
            setDress={setDress}
            errors={errors}
            handleSubmit={handleSubmit}
          />
          <button
            onClick={updateFetchedDress}
            type="submit"
            value="submit"
            className="dress-form-button "
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EditDress;