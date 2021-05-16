import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Title from '../components/Title/Title';
import Stars from '../components/Stars/Stars';

import {
  addToCart,
  removeFromCart,
  removeSingleFromCart,
} from '../redux/products/products_actions';
import { formatPrice } from '../utils/formatPrice';
import cartEmptyImg from '../assets/images/cart-empty.jpg';

const CartPage = () => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);

  const handleCheckout = () => {
    user ? history.push('/checkout') : history.push('/login');
  };

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

  return (
    <div className="container mt-5">
      <Title title="YOUR CART" />

      {cart.length > 0 ? (
        <>
          <div className="row ">
            <div className="col-lg-9" style={{ height: '100%' }}>
              <div
                className="cart-sidebar__content  "
                style={{ overflowY: 'hidden', padding: '4px' }}
              >
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="cart-sidebar__products product mb-4 p-3"
                    style={{ border: '1px solid #eee' }}
                  >
                    <div className="cart-sidebar__product-image-container">
                      <img
                        className="cart-sidebar__product-image "
                        src={item.image}
                        alt="product"
                        style={{ width: '125px' }}
                      />
                    </div>
                    <div className="cart-sidebar__product-info">
                      <p
                        className="cart-sidebar__product-name"
                        style={{ fontSize: '1.2rem' }}
                      >
                        {item.name}
                      </p>
                      <div className="product__footer-prices m-0 ">
                        <span>
                          <span className="product__footer-price">
                            {formatPrice(item.price)}
                          </span>
                          <span className="product__footer-price--old">
                            {formatPrice(item.oldPrice)}
                          </span>
                        </span>
                      </div>
                      <Stars stars={item.stars} />
                      <div className="d-flex align-items-center mt-2">
                        <button
                          className="btn btn-primary m-0 p-0 "
                          onClick={() => dispatch(addToCart(item.id))}
                          style={{ width: '30px', height: '23px' }}
                        >
                          +
                        </button>
                        <p
                          className="cart-sidebar__product-qty mx-2"
                          style={{
                            fontSize: '1.1rem',
                            width: '20px',
                            textAlign: 'center',
                          }}
                        >
                          {item.qty}
                        </p>

                        <button
                          className="btn btn-secondary m-0 p-0 "
                          onClick={() =>
                            dispatch(removeSingleFromCart(item.id))
                          }
                          style={{ width: '30px', height: '23px' }}
                        >
                          -
                        </button>

                        <MdDelete
                          className="cart-sidebar__delete ml-2 "
                          onClick={() => dispatch(removeFromCart(item.id))}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="col-lg-3 contact-form"
              style={{
                height: '168px',
              }}
            >
              <div className="cart-sidebar__footer mt-1">
                Total Items: <strong>{cartCount}</strong>
              </div>
              <div className="cart-sidebar__footer">
                Total Price: <strong>{formatPrice(totalPrice)}</strong>
              </div>
              <Link
                className="btn btn-secondary mb-3"
                style={{ width: '100%', textAlign: 'center' }}
                onClick={handleCheckout}
              >
                Checkout
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="cart-sidebar__empty-image-container mb-4">
          <img
            className="cart-sidebar__empty-image"
            src={cartEmptyImg}
            alt="cart is empty"
            style={{ width: '40%', margin: 'auto' }}
          />
        </div>
      )}
    </div>
  );
};

export default CartPage;
