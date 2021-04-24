import * as Yup from "yup";
const phoneRegExp = /^01[0125][0-9]{8}$/;

export const checkoutSchema = Yup.object().shape({
  firstName: Yup.string().max(8).required("First Name is required"),
  lastName: Yup.string().max(8).required("Last Name is required"),
  email: Yup.string()
    .max(255)
    .required("Email is required")
    .email("Must be a valid email"),
  address: Yup.string().max(25).required("Address is required"),
  country: Yup.string().max(25).required("Country is required"),
  city: Yup.string().max(25).required("City is required"),
  mobile: Yup.string()
    .matches(phoneRegExp, "Mobile number is not valid")
    .required("Mobile is required"),
});

export const profileSchema = Yup.object().shape({
  firstName: Yup.string().max(8).required("First Name is required"),
  lastName: Yup.string().max(8).required("Last Name is required"),
  email: Yup.string()
    .max(255)
    .required("Email is required")
    .email("Must be a valid email"),
  address: Yup.string().max(25).required("Address is required"),
  country: Yup.string().max(25).required("Country is required"),
  city: Yup.string().max(25).required("City is required"),
  mobile: Yup.string()
    .matches(phoneRegExp, "Mobile number is not valid")
    .required("Mobile is required"),
  userName: Yup.string().max(8).required("User Name is required"),
  password: Yup.string()
    .min(5, "Password should be at least 5 characters")
    .max(25, "Password should be maximum of 25 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .when("password", {
      is: (val) => !!(val && val.length > 0),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
});
