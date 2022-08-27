import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rating, Typography, Box, Button } from '@mui/material';
import { StarBorder } from '@mui/icons-material';
import arrowBack from "../../assets/icons/back-arrow.png";
import Logo from '../../assets/logo/logo.png';
import './DressDetails.scss';
import ".././DressForm/DressForm.scss";
import { AddShoppingCart } from "@mui/icons-material";
import { useParams, useHistory, NavLink } from "react-router-dom";

const DressDetails = ({ cart, addDressToCart }) => {

  const history = useHistory();

  const [dress, setDress] = useState([])
  useEffect(() => {
    singleDress()
  }, [])

  const { id } = useParams();

  const addToCart = (dress) => {
    addDressToCart(dress)
  }

  const openCart = () => {
    // Redirect to a page that shows a cart
    history.push(`/cart`)
  }

  const singleDress = () => {
    axios
      .get(`http://localhost:8080/dress/${id}`)
      .then(response => {
        setDress(response.data)
      })
      .catch(error => console.log(error))
  }

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

          <div className="dress-details__cart" onClick={openCart} style={{ color: "white", margin: "0px 20px" }}>
            <AddShoppingCart className="dress-details__cart" />
            {cart.reduce((acc, item) => acc + item.amount, 0)}
          </div>
          <div className='dress-details' style={{ marginLeft: 60 }}>
            <div><img className="dress-details__img" src={dress.image} alt="wedding gowns" /></div>
            <div className="dress-details__summary">
              <h2 className="dress-details__designer">{dress.dressname}</h2>
              <p className="dress-details__price">Original Price: ${dress.originalprice}</p>
              <p className="dress-details__sale-price">Sale Price: ${dress.buyprice}</p>
              <p className="dress-details__description">{dress.description}</p>
              <p className="dress-details__sale-price">Size: {dress.size}</p>
              <p className="dress-details__condition">Condition: {dress.condition}</p>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'left',
                }}
              >
                <Typography variant="h6" component="span">
                  {'Ratings: '}
                </Typography>
                <Rating
                  className="dress-details__condition"
                  name="room-ratings"
                  defaultValue={3.5}
                  precision={0.5}
                  emptyIcon={<StarBorder />}
                />
              </Box>
              <div className="form-group">
                <div className="dress-form-input1">
                  <button
                    onClick={() => addToCart(dress)}
                    type="submit"
                    value="submit"
                    className="dress-form-button"> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DressDetails;

