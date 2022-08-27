import './ShoppingCart.scss';
import ".././DressForm/DressForm.scss";
import ".././DressContainer/DressContainer.scss";
import arrowBack from "../../assets/icons/back-arrow.png";
import Logo from '../../assets/logo/logo.png';
import { NavLink } from 'react-router-dom';

const ShoppingCart = ({ cart, removeDressFromCart, addDressToCart }) => {

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

          <div className="shopping-cart">
            <h2>Your Cart</h2>
            <h2>Total: $ {cart.reduce((acc, item) => acc + item.amount * item.buyprice, 0)}</h2>
          </div>
          <div className="shopping-cart-container">
            {cart.map((dress, idx) => {
              return (
                <div key={idx} className="shopping-cart-container-flex">
                  <div className="shopping-cart-container-grow">
                    <div><img style={{ width: 220, height: 220 }} className="shopping-cart__img" src={dress.image} /></div>
                    <div className="shopping-cart__summary">
                      <div className="shopping-cart__summary-container">
                        <div className="shopping-cart__summary-name"><h3>{dress.dressname}</h3></div>
                        <div className="shopping-cart__summary-price"><h4>${dress.buyprice}</h4></div>
                      </div>
                    </div>
                    <div className="dress-form-input1">
                      <button className="dress-form-button"
                        size="small"
                        disableElevation
                        variant="contained"
                        onClick={() => removeDressFromCart(dress.id)}
                      >
                        -
                      </button>
                      <h4>{dress.amount}</h4>

                      <button className="dress-form-button"
                        size="small"
                        disableElevation
                        variant="contained"
                        onClick={() => addDressToCart(dress)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;