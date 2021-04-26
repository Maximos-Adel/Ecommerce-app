import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import Dropdown from "../Dropdown/Dropdown";
import Sidebar from "../Sidebar/Sidebar";
import CartSidebar from "../CartSidebar/CartSidebar";

// import navbar links from utils
import { navbarLinks } from "../../utils/navbarLinks";

// import logo from assets
import logo from "../../assets/images/hogash-logo-black.png";

// navbar styles
import "./Navbar.scss";

const Navbar = () => {
  const { cart } = useSelector((state) => state.products);
  const [cartCount, setCartCount] = useState(0);
  const { user } = useSelector((state) => state.auth);
  const [dropdown, setDropdown] = useState(false);
  const [sideCart, setSideCart] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="site-header__navbar">
          <div className="site-header__navbar-nav">
            <div className="site-header__logo-container">
              <Link to="/">
                <img
                  src={logo}
                  alt="company logo"
                  className="site-header__logo"
                />
              </Link>
            </div>
            <ul className="site-header__links">
              {navbarLinks.map((link) => {
                const { id, text, path } = link;
                return (
                  <li key={id}>
                    <Link to={path} className="site-header__link">
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <ul className="site-header__icons-list">
              <OutsideClickHandler
                onOutsideClick={() => {
                  setDropdown(false);
                }}
              >
                <li
                  style={{ cursor: user && "pointer", position: "relative" }}
                  onClick={() => setDropdown(!dropdown)}
                >
                  <span className="site-header__link">
                    Hello {!user ? "Guest" : user.displayName}
                  </span>

                  {user && <Dropdown dropdown={dropdown} />}
                </li>
              </OutsideClickHandler>

              <li className="site-header__icons-item">
                <Link to="/login" style={{ color: "black" }}>
                  <BiUser className="site-header__icon" />
                </Link>
              </li>
              <li
                className="site-header__icons-item"
                onClick={() => setSideCart(!sideCart)}
              >
                <CgShoppingBag style={{ cursor: "pointer" }} />
                <span className="site-header__cart-count">{cartCount}</span>
                <CartSidebar sideCart={sideCart} />
              </li>
              <li
                className="site-header__icons-item"
                onClick={() => setSideBar(!sideBar)}
              >
                <FaBars className="site-header__toggle" />
                {<Sidebar sideBar={sideBar} />}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
