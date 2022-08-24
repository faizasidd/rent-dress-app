import React, { useState, useEffect} from "react";
import axios from "axios";
import { Rating, Typography, Box, ListSubheader} from '@mui/material';
import { StarBorder } from '@mui/icons-material';
import './DressDetails.scss';
import { AddShoppingCart } from "@mui/icons-material";
import { useParams, useHistory } from "react-router-dom";
import Header from "../Header/Header";

const DressDetails = () => {
  
const history = useHistory();
 
const [cartSize, setCartSize] = useState(0)

const [dress, setDress] = useState([])
    useEffect(() => {
    singleDress()
    }, [])

const addToCart = () => {
  setCartSize(cartSize + 1)
}
const openCart = () => {
  console.log("opening cart")
  // redirect to a page that shows a cart
   history.push("/cart")

}

  const {id }  = useParams();

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
     <div onClick={openCart}>
      <AddShoppingCart />
      {cartSize > 0 && cartSize}
    </div>
     <div className='dress-details'>
       <div><img className="dress-details__img" src={dress.image} alt="wedding gowns"/></div>
       <div className="dress-details__summary">
            <h2 className="dress-details__designer">{dress.dressname}</h2>
            <p className="dress-details__price">Original Price: ${dress.originalprice}</p>
            <p className="dress-details__price">Sale Price: ${dress.buyprice}</p>
            <p className="dress-details__description">{dress.description}</p>
            <p className="dress-details__price">Size: {dress.size}</p>
            <p className="dress-details__description">Condition: {dress.condition}</p>
            <button 
            onClick={addToCart} 
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

{/* <Box
sx={{
  display: 'flex',
  alignItems: 'left',
}}
>
<Typography variant="h6" component="span">
  {'Ratings: '}
</Typography>
<Rating
  name="room-ratings"
  defaultValue={3.5}
  precision={0.5}
  emptyIcon={<StarBorder />}
/>
</Box> */}