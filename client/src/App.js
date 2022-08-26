import "./App.scss";
import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import DressList from "./components/DressList/DressList";
import DressDetails from "./components/DressDetails/DressDetails";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import AddDress from "./components/AddDress/AddDress";
import EditDress from "./components/EditDress/EditDress";
// import RentList from "./components/RentList/RentList";

function App() {

  const [cart, setCart] = useState([])

  const addDressToCart = (dress) => {
    setCart(prev => [...prev, dress])
  }

  return (
    <BrowserRouter>
      <Switch>
         <Route path="/" exact component={Home} />
        <Route path="/dress" exact component={DressList} />
        <Route path="/dress/:id" component={() => <DressDetails cart={cart} addDressToCart={addDressToCart}/>} />
        <Route path="/cart" component={() => <ShoppingCart cart={cart}/>} />
        <Route path="/add" exact component={AddDress} />
        <Route path="/edit/:id" exact component={EditDress} />
         {/* <Route path="/dress/:id/rent" component={RentList} />  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;