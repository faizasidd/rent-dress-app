import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import './ShoppingCart.scss';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";


const ShoppingCart = () => {

  const [dress, setDress] = useState([])
  // useEffect(() => {
  //   singleDress()
  // }, [])

  // const { id } = useParams();

  // const singleDress = () => {
  //   axios
  //     .get(`http://localhost:8080/dress/${id}`)
  //     .then(response => {
  //       setDress(response.data)
  //     })
  //     .catch(error => console.log(error))
  // }

  return (
    <>
    <Header/>
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      <h2>Total: $</h2>
    </div>
    <div className="shopping-cart-container">
      <div className="shopping-cart-container-flex">
        <div className="shopping-cart-container-grow">
          <div><img className="shopping-cart__img">{dress.image}</img></div>
          <div className="shopping-cart__summary">
          <div className="shopping-cart__summary-container">
          <div className="shopping-cart__summary-name">{dress.dressname}</div>
          <div className="shopping-cart__summary-price">{dress.buyprice}</div>
            </div>
          </div>
          <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            // onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{}</p> 
          //amount sum gets added here
          <Button
            size="small"
            disableElevation
            variant="contained"
            // onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ShoppingCart;