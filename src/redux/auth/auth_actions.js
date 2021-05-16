import { CHECKOUT } from './auth_types';

export const checkout = (
  firstName,
  lastName,
  email,
  address,
  country,
  city,
  mobile
) => ({
  type: CHECKOUT,
  firstName,
  lastName,
  email,
  address,
  country,
  city,
  mobile,
});
