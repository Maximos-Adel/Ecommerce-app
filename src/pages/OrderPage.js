import React, { useEffect, useState } from "react";
import Title from "../components/Title/Title";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils/formatPrice";
import ReviewData from "../components/ReviewData/ReviewData";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Loading from "../components/Loading/Loading";

const Order = () => {
  const { cart } = useSelector((state) => state.products);
  const [totalPrice, setTotalPrice] = useState(0);
  const auth = useSelector((state) => state.auth);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.qty * item.price;
    });

    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  const reviewDetailsFieldsList = [
    {
      key: "email",
      label: "Email:",
    },
    { key: "mobile", label: "Mobile:" },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="py-5">
        <div className="container">
          <Title title="your order" />
          <div className="row">
            <div className="col-10 mx-auto col-md-6">
              <Loading />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="container mt-5">
      <Title title="your order" />
      <div className="row  mb-5 pb-5">
        <div className="col-lg-6 m-auto " style={{ textAlign: "center" }}>
          <IoIosCheckmarkCircle
            style={{ fontSize: "100px", color: "#3BBC9A" }}
          />
          <h2 className="my-2" style={{ textTransform: "uppercase" }}>
            Thank you for your purchase!
          </h2>
          <p>Your order completed successfully</p>
          <p className="my-2">
            Here is your order number for reference: CMMRC-149535
          </p>
          <Link to="/" className="btn btn-primary ">
            Go Back Home
          </Link>
        </div>
        <div className="col-md-6 contact-form">
          <label
            style={{
              fontSize: "1rem",
              fontWeight: "600",
            }}
            className="singleProduct"
          >
            Order Details
          </label>
          <hr className="mb-3 mt-2" />
          <div className="row">
            {/* <ReviewData 
            {Object.keys(auth).map((key) => {
              return  value={auth[key]} 
            })}
            /> */}

            <ReviewData
              label="Full Name:"
              value={`${auth.firstName} ${auth.lastName}`}
            />
            {reviewDetailsFieldsList.map((oneItem) => {
              if (auth[oneItem.key]) {
                return (
                  <>
                    <ReviewData
                      label={oneItem.label}
                      value={auth[oneItem.key]}
                    />
                  </>
                );
              }
              return null;
            })}

            <ReviewData
              label="Address:"
              value={`${auth.address}, ${auth.city}, ${auth.country}`}
            />
          </div>
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

export default Order;
