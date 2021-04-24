/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

// pages
import {
  Home,
  Shirts,
  Shoes,
  HeadPhones,
  About,
  Contact,
  Cart,
  AllProducts,
  SingleProduct,
  Error,
  Login,
  UserProfile,
  Checkout,
  Order,
} from "./pages";

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// scroll to top component
import ScrollToTop from "./utils/ScrollToTop";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Auth
import { auth } from "./firebase";

const App = () => {
  const promise = loadStripe(
    "pk_test_51I8Qc3CNnSQFkNa2e4JIe0XNojLB1g5Nl1sOTqRd4quwn9C70jPLrGfRj4XPPOwvDOqoMwaskkEdG5D0rk5EV3l300wwVVMoki"
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SETUSER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SETUSER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shirts">
          <Shirts />
        </Route>
        <Route exact path="/shoes">
          <Shoes />
        </Route>
        <Route exact path="/headphones">
          <HeadPhones />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <AllProducts />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route exact path="/checkout">
          <Elements stripe={promise}>
            <Checkout />
          </Elements>
        </Route>
        <Route exact path="/user">
          <UserProfile />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
