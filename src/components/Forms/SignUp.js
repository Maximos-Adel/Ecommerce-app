import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import Title from '../Title/Title';
import { auth } from '../../firebase';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          console.log(auth);
          history.push('/');
          return (
            // set name for user
            auth.user.updateProfile({
              displayName: name,
            })
          );
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <Title title="SIGN-UP" />
      <form>
        <div>
          <span className="singleProduct__brand--span">Username</span>
          <div className="d-flex align-items-center contact-form__input-field p-1 my-2">
            <BiUser className="site-header__icons-item ml-2" />
            <input
              className="contact-form__input-field ml-2"
              type="text"
              placeholder="your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ outline: 'none', border: 'none' }}
            />
          </div>
          <span className="singleProduct__brand--span ">E-mail</span>
          <div className="d-flex align-items-center contact-form__input-field p-1 my-2">
            <HiOutlineMail className="site-header__icons-item ml-2" />
            <input
              className="contact-form__input-field ml-2"
              type="email"
              placeholder="your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ outline: 'none', border: 'none' }}
            />
          </div>
          <span className="singleProduct__brand--span">Password</span>
          <div className="d-flex align-items-center contact-form__input-field p-1 my-2">
            <RiLockPasswordLine className="site-header__icons-item ml-2" />
            <input
              className="contact-form__input-field ml-2"
              type="password"
              placeholder="your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ outline: 'none', border: 'none' }}
            />
          </div>
        </div>
        <button
          onClick={register}
          className="btn btn-secondary my-2 "
          style={{ width: '100%' }}
        >
          Sign-Up
        </button>
      </form>
      <p style={{ textAlign: 'justify', color: '#666' }}>
        By signing-up you agree to the Conditions of Use & Sale. Please see our
        Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
      </p>
    </div>
  );
};

export default SignUp;
