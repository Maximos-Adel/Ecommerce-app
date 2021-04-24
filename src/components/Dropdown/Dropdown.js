import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
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
        <ul className="dropdown__links">
          {dropdownLinks.map((link) => {
            const { id, text, path } = link;
            return (
              <li key={id}>
                <Link to={path} style={{ color: "black" }}>
                  {text}
                </Link>
              </li>
            );
          })}
          <li style={{ cursor: "pointer" }} onClick={handleAuthenticaton}>
            SignOut
          </li>
        </ul>
      )}
    </>
  );
}

export default Dropdown;
