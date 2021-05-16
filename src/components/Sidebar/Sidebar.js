import { Link } from 'react-router-dom';

import SocialIcons from '../SocialIcons/SocialIcons';

import { navbarLinks } from '../../utils/navbarLinks';
import welcome from '../../assets/images/welcome.png';

import './Sidebar.scss';

const Sidebar = ({ sideBar }) => (
  <div className={`${sideBar ? 'sidebar sidebar--show' : 'sidebar'}`}>
    <div
      className={`${
        sideBar ? 'sidebar__content sidebar__content--show' : 'sidebar__content'
      }`}
    >
      <ul className="sidebar__links">
        {navbarLinks.map((link) => {
          const { id, text, path } = link;
          return (
            <li key={id}>
              <Link to={path} className="sidebar__link">
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="sidebar__image-container">
        <img src={welcome} alt="welcome logo" className="sidebar__image" />
      </div>
      <div className="sidebar__footer">
        <SocialIcons />
      </div>
    </div>
  </div>
);

export default Sidebar;
