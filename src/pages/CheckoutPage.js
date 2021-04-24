import React, { useEffect, useState } from "react";
import Title from "../components/Title/Title";
import CheckoutForm from "../components/Forms/Checkout";
import { formatPrice } from "../utils/formatPrice";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { cart } = useSelector((state) => state.products);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.qty * item.price;
    });

    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);

  return (
    <div className="container my-5">
      <Title title="checkout" />
      <div className="row">
        <div className="col-md-6">
          <CheckoutForm />
        </div>
        <div className="col-md-6 contact-form">
          <label
            style={{
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Your Order
          </label>
          <hr className="mb-3 mt-2" />
          <div
            className="cart-sidebar__content my-3"
            style={{ height: "250px" }}
          >
            {cart.length > 0 &&
              cart.map((item) => {
                return (
                  <div key={item.id} className="cart-sidebar__products">
                    <div className="cart-sidebar__product-image-container">
                      <img
                        className="cart-sidebar__product-image"
                        src={item.image}
                        alt="product"
                      />
                    </div>
                    <div className="cart-sidebar__product-info">
                      <p className="cart-sidebar__product-name">{item.name}</p>
                      <div className="cart-sidebar__prices">
                        <p className="cart-sidebar__product-qty">
                          {item.qty} X
                        </p>
                        <p className="cart-sidebar__product-price">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <hr className="my-3" />
          <div className="mb-1">
            <label>Subtotal:</label>
            <p style={{ float: "right", fontSize: "1rem", fontWeight: "600" }}>
              {formatPrice(totalPrice)}
            </p>
          </div>
          <div className="mb-1">
            <label>Tax: </label>
            <p style={{ float: "right", fontSize: "1rem", fontWeight: "600" }}>
              $0.00
            </p>
          </div>
          <div className="mb-1">
            <label>Shipping Method:</label>
            <p style={{ float: "right", fontSize: "1rem", fontWeight: "600" }}>
              No shipping method selected
            </p>
          </div>
          <div className="mb-1">
            <label>Discount Code:</label>
            <p style={{ float: "right", fontSize: "1rem", fontWeight: "600" }}>
              No discount code applied
            </p>
          </div>
          <hr className="my-3" />
          <div className="mb-1">
            <label style={{ fontSize: "1.3rem", fontWeight: "600" }}>
              Total Amount:
            </label>
            <p
              style={{ float: "right", fontSize: "1.3rem", fontWeight: "600" }}
            >
              {formatPrice(totalPrice)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
