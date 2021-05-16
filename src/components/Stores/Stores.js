import './Stores.scss';

const Stores = ({ image, title }) => (
  <div className="store">
    <img src={image} alt="our store" className="store__image" />
    <div className="store__overlay" />
    <p className="store__title">{title}</p>
  </div>
);

export default Stores;
