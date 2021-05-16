import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { profileSchema } from '../../utils/ValidationSchema';

const URL = 'https://countriesnow.space/api/v0.1/countries';

const Profile = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState('');

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
        userName: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={profileSchema}
      // onSubmit={({
      //   firstName,
      //   lastName,
      //   email,
      //   address,
      //   country,
      //   city,
      //   mobile,
      //   userName,
      //   password,
      //   confirmPassword,
      // }) => {
      // dispatch({
      //   type: "SET_USER",
      //   user: firstName,
      // });
      // }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, values }) => (
        <form>
          <div className="form-group row">
            <label className="col-lg-3  ">First name</label>
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

            <label className="col-lg-3 mt-3 mt-3">Last name</label>
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
                className=" offset-lg-3 col-lg-9 p-0"
                style={{
                  fontSize: 12,
                  color: 'red',
                }}
              >
                {errors.country}
              </p>
            )}

            <label className="col-lg-3 mt-3 ">Username</label>
            <input
              className="col-lg-9 contact-form__input-field mt-3"
              name="userName"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.userName}
            />
            {errors.userName && (
              <p
                className=" offset-lg-3 col-lg-9 p-0"
                style={{
                  fontSize: 12,
                  color: 'red',
                }}
              >
                {errors.userName}
              </p>
            )}

            <label className="col-lg-3 mt-3 ">Password</label>
            <input
              className="col-lg-9 contact-form__input-field mt-3"
              name="password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && (
              <p
                className=" offset-lg-3 col-lg-9 p-0"
                style={{
                  fontSize: 12,
                  color: 'red',
                }}
              >
                {errors.password}
              </p>
            )}

            <label className="col-lg-3 mt-3 ">Confirm password</label>
            <input
              className="col-lg-9 contact-form__input-field mt-3"
              name="confirmPassword"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirmPassword}
            />
            {errors.confirmPassword && (
              <p
                className=" offset-lg-3 col-lg-9 p-0"
                style={{
                  fontSize: 12,
                  color: 'red',
                }}
              >
                {errors.confirmPassword}
              </p>
            )}

            <input
              type="submit"
              value="Save"
              className="offset-lg-10 col-lg-2 btn btn-primary my-3"
              style={{ float: 'right' }}
              onClick={handleSubmit}
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Profile;
