import { ImGoogle, ImFacebook, ImTwitter } from 'react-icons/im';

import './SocialIcons.scss';

const SocialIcons = (props) => {
  const { onClickGoogle, onClickFacebook, onClickTwitter } = props;
  return (
    <div className="socila-icons">
      <span className="socila-icons__icon" onClick={onClickGoogle}>
        <ImGoogle />
      </span>
      <span className="socila-icons__icon" onClick={onClickFacebook}>
        <ImFacebook />
      </span>
      <span className="socila-icons__icon" onClick={onClickTwitter}>
        <ImTwitter />
      </span>
    </div>
  );
};

export default SocialIcons;
