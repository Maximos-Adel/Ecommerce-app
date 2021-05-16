import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CgCloseO } from 'react-icons/cg';

import { formatPrice } from '../../utils/formatPrice';

import cartEmptyImg from '../../assets/images/cart-empty.jpg';

import './CartSidebar.scss';

const CartSidebar = ({ sideCart }) => {
  const { cart } = useSelector((state) => state.products);
  const [totalPrice, setTotalPrice] = useState(0);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.qty * item.price;
    });

    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);

  return (
    <div
      className={sideCart ? 'cart-overlay cart-overlay--show' : 'cart-overlay'}
    >
      <div
        className={
          sideCart ? 'cart-sidebar cart-sidebar--show' : 'cart-sidebar'
        }
      >
        <div className="cart-sidebar__heading">
          <p className="cart-sidebar__title">your cart</p>
          <span className="cart-sidebar__close">
            <CgCloseO />
          </span>
        </div>
        <div className="cart-sidebar__content">
          {cart.length > 0 ? (
            cart.map((item) => (
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
                    <p className="cart-sidebar__product-qty">{item.qty} X</p>
                    <p className="cart-sidebar__product-price">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="cart-sidebar__empty-image-container">
              <img
                className="cart-sidebar__empty-image"
                src={cartEmptyImg}
                alt="cart is empty"
              />
            </div>
          )}
        </div>
        <div className="cart-sidebar__footer">
          Total: {formatPrice(totalPrice)}
        </div>
        <div>
          <Link to="/cart" className="btn btn-primary mr-2">
            Your Cart
          </Link>
          <Link
            to={user ? '/checkout' : '/login'}
            className="btn btn-secondary ml-2"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
