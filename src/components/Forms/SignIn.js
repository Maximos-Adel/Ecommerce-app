import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import firebase from 'firebase';
import { auth } from '../../firebase';
import SocialIcons from '../SocialIcons/SocialIcons';
import Title from '../Title/Title';

const SignIn = () => {
  const history = useHistory();
  const [loginemail, setLoginEmail] = useState('');
  const [loginpassword, setLoginPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(loginemail, loginpassword)
      .then(() => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        history.push('/');
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const signInWithFacebook = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((res) => {
        history.push('/');
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Title title="SIGN-IN" />
      <SocialIcons
        onClickGoogle={signInWithGoogle}
        onClickFacebook={signInWithFacebook}
        onClickTwitter={signInWithGoogle}
      />
      <form>
        <div className="mt-3">
          <span className="singleProduct__brand--span ">E-mail</span>
          <div className="d-flex align-items-center contact-form__input-field p-1 my-2">
            <HiOutlineMail className="site-header__icons-item ml-2" />
            <input
              className="contact-form__input-field ml-2"
              type="email"
              placeholder="your email"
              value={loginemail}
              onChange={(e) => setLoginEmail(e.target.value)}
              style={{
                outline: 'none',
                border: 'none',
              }}
            />
          </div>
          <span className="singleProduct__brand--span">Password</span>
          <div className="d-flex align-items-center contact-form__input-field p-1 my-2">
            <RiLockPasswordLine className="site-header__icons-item ml-2" />
            <input
              className="contact-form__input-field ml-2"
              type="password"
              placeholder="your password"
              value={loginpassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              style={{ outline: 'none', border: 'none' }}
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={signIn}
          className="btn btn-primary my-2"
          style={{ width: '100%' }}
        >
          Sign-In
        </button>
      </form>
      <p style={{ textAlign: 'justify', color: '#666' }}>
        By signing-in you agree to the Conditions of Use & Sale. Please see our
        Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
      </p>
    </div>
  );
};

export default SignIn;
