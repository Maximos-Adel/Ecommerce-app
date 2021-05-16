import './Banner.scss';

const Banner = ({ image }) => (
  <div
    style={{
      backgroundImage: `url(${image})`,
    }}
    className="product-banner"
  />
);

export default Banner;
