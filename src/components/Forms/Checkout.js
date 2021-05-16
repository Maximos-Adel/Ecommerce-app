import React, { useEffect, useState } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkout } from '../../redux/auth/auth_actions';

import { checkoutSchema } from '../../utils/ValidationSchema';

const URL = 'https://countriesnow.space/api/v0.1/countries';

const Checkout = () => {
  const history = useHistory();
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await axios.get(URL);
        setCountries(response.data.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
    fetchCountries();
  }, [URL]);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: '',
        city: '',
        mobile: '',
      }}
      validationSchema={checkoutSchema}
      onSubmit={({
        firstName,
        lastName,
        email,
        address,
        country,
        city,
        mobile,
      }) => {
        dispatch(
          checkout(firstName, lastName, email, address, country, city, mobile)
        );
        history.push('/order');
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, values }) => (
        <form>
          <div className="form-group row" style={{ marginRight: '0' }}>
            <label className="col-lg-3">First name</label>
            <input
              className="col-lg-9 contact-form__input-field"
              name="firstName"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
            />
            {errors.firstName && (
              <p
                className=" offset-lg-3 col-lg-9 p-0"
                style={{
                  fontSize: 12,
                  color: 'red',
                }}
              >
                {errors.firstName}
              </p>
            )}

            <label className="col-lg-3 mt-3">Last name</label>
            <input
              className="col-lg-9 contact-form__input-field mt-3"
              name="lastName"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
            />
            {errors.lastName && (
              <p
                className=" offset-lg-3 col-lg-9 p-0"
                style={{
                  fontSize: 12,
                  color: 'red',
                }}
              >
                {errors.lastName}
              </p>
            )}

            <label className="col-lg-3 mt-3 ">Email</label>
            <input
              className="col-lg-9 contact-form__input-field mt-3"
              name="email"
              type="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && (
              <p
                className=" offset-lg-3 col-lg-9 p-0"
                style={{
                  fontSize: 12,
                  color: 'red',
                }}
              >
                {errors.email}
              </p>
            )}
            <label className="col-lg-3 mt-3 ">Mobile</label>
            <input
              className="col-lg-9 contact-form__input-field mt-3"
              name="mobile"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.mobile}
            />
            {errors.mobile && (
              <p
                className=" offset-lg-3 col-lg-9 p-0"
                style={{
                  fontSize: 12,
                  color: 'red',
                }}
              >
                {errors.mobile}
              </p>
            )}

            <label className="col-lg-3 mt-3 ">Address</label>
            <input
              className="col-lg-9 contact-form__input-field mt-3"
              name="address"
              placeholder="street"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address}
            />
            {errors.address && (
              <p
                className=" offset-lg-3 col-lg-9 p-0"
                style={{
                  fontSize: 12,
                  color: 'red',
                }}
              >
                {errors.address}
              </p>
            )}

            <select
              className="offset-lg-3 col-lg-4 contact-form__input-field mt-3"
              name="country"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.country}
              onClick={(e) =>
                setCities(
                  countries.findIndex((x) => x.country === e.target.value)
                )
              }
            >
              {countries.map((country, i) => (
                <option key={i}>{country.country}</option>
              ))}
            </select>

            <select
              className="offset-lg-1 col-lg-4 contact-form__input-field mt-3"
              name="city"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.city}
            >
              {countries[cities]?.cities.map((city, i) => (
                <option key={i}>{city}</option>
              ))}
            </select>
            {errors.country && (
              <p
                className=" offset-lg-3 col-lg-4 p-0"
                style={{
                  fontSize: 12,
                  color: 'red',
                }}
              >
                {errors.country}
              </p>
            )}

            <p
              className="col-lg-12 mt-4"
              style={{ fontSize: '1rem', fontWeight: '600' }}
            >
              Payment Method
            </p>
            <CardElement className="col-lg-12 mb-3 mt-2" />
          </div>
          <Link
            to="/order"
            className="col-lg-12 btn btn-secondary"
            style={{ textAlign: 'center' }}
            onClick={handleSubmit}
          >
            Order Now
          </Link>
        </form>
      )}
    </Formik>
  );
};

export default Checkout;
