import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rating, Typography, Box } from '@mui/material';
import { StarBorder } from '@mui/icons-material';
import './DressDetails.scss';
import { AddShoppingCart } from "@mui/icons-material";
import { useParams, useHistory } from "react-router-dom";
import Header from "../Header/Header";

const DressDetails = ({cart, addDressToCart}) => {

  const history = useHistory();

  // const [cartSize, setCartSize] = useState(0)

  const [dress, setDress] = useState([])
  useEffect(() => {
    singleDress()
  }, [])

  const { id } = useParams();

  const addToCart = (dress) => {
    // setCartSize(cartSize + 1)
    addDressToCart(dress)
  }

  const openCart = () => {
    // Redirect to a page that shows a cart
    // `/dress/${id}/cart`
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
    <Header/>
      <div className="dress-details__cart" onClick={openCart}>
        <AddShoppingCart className="dress-details__cart" />
        {cart.length > 0 && cart.length}
      </div>
      <div className='dress-details'>
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
          <button
            onClick={() => addToCart(dress)}
            type="submit"
            value="submit"
            className="dress-details__button"> Add To Cart
          </button>

        </div>
      </div>

    </>
  );
};

export default DressDetails;

