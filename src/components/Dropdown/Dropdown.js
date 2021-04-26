import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { GoSignOut } from "react-icons/go";
import "./Dropdown.scss";

// import dropdown links from utils
import { dropdownLinks } from "../../utils/dropdownLinks";

function Dropdown({ dropdown }) {
  const { user } = useSelector((state) => state.auth);
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      {dropdown && (
        <ul className="dropdown">
          {dropdownLinks.map((link) => {
            const { id, icon, text, path } = link;
            return (
              <li key={id}>
                <Link
                  to={path}
                  style={{ color: "black" }}
                  className="dropdown__links"
                >
                  <icon className="dropdown__icon">{icon}</icon>
                  <label>{text}</label>
                </Link>
              </li>
            );
          })}
          <li onClick={handleAuthenticaton}>
            <div className="dropdown__links">
              <icon className="dropdown__icon">
                <GoSignOut />
              </icon>
              <label>Sign-out</label>
            </div>
          </li>
        </ul>
      )}
    </>
  );
}

export default Dropdown;
