import './Title.scss';

const Title = ({ title }) => (
  <div className="title pb-5">
    <div className="title__line" />
    <h3 className="title__heading">{title}</h3>
    <div className="title__line" />
  </div>
);

export default Title;
