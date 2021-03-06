import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoSignOut } from 'react-icons/go';
import { auth } from '../../firebase';
import './Dropdown.scss';

// import dropdown links from utils
import { dropdownLinks } from '../../utils/dropdownLinks';

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
            const { id, path, icon, text } = link;
            return (
              <li key={id}>
                <Link to={path}>
                  <div className="dropdown__links">
                    {icon}
                    {text}
                  </div>
                </Link>
              </li>
            );
          })}
          <li onClick={handleAuthenticaton}>
            <div className="dropdown__links">
              <GoSignOut />
              Sign-out
            </div>
          </li>
        </ul>
      )}
    </>
  );
}

export default Dropdown;
