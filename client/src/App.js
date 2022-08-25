import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import DressList from "./components/DressList/DressList";
import DressDetails from "./components/DressDetails/DressDetails";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import AddDress from "./components/AddDress/AddDress";
// import EditDress from "./components/EditDress/EditDress";
// import RentList from "./components/RentList/RentList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
         <Route path="/" exact component={Home} />
        <Route path="/dress" exact component={DressList} />
        <Route path="/dress/:id" component={DressDetails} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/dress/add" component={AddDress} />
        {/* // <Route path="/dress/edit/:id" component={EditDress} />
        // <Route path="/dress/:id/rent" component={RentList} /> 
        // <Route path="/inventory/:inventoryId" component={InventoryItemDetails} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;