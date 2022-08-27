import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import DressList from "./components/DressList/DressList";
import DressDetails from "./components/DressDetails/DressDetails";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import AddDress from "./components/AddDress/AddDress";
import EditDress from "./components/EditDress/EditDress";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
// import RentList from "./components/RentList/RentList";

function App() {

  const [cart, setCart] = useState([])

  const addDressToCart = (dress) => {
    setCart((prev) => {
      const isItemInCart = prev.find((item) => item.id === dress.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === dress.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...dress, amount: 1 }];
    });
  }

  const removeDressFromCart = (id) => {
    setCart((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dress" exact component={DressList} />
        <Route path="/dress/:id" component={() => <DressDetails cart={cart} addDressToCart={addDressToCart} />} />
        <Route path="/cart" component={() => <ShoppingCart cart={cart} removeDressFromCart={removeDressFromCart} addDressToCart={addDressToCart} />} />
        <Route path="/add" exact component={AddDress} />
        <Route path="/edit/:id" exact component={EditDress} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/register" exact component={RegistrationForm} />
        {/* <Route path="/:id/rent" component={RentList} />  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;