import React from "react";
import SignInForm from "../components/Forms/SignIn";
import SignUpForm from "../components/Forms/SignUp";

function Login() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-5 mx-auto ">
          <div className="my-5">
            <SignInForm />
          </div>
        </div>
        <div className="col-md-5 mx-auto">
          <div className="my-5">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
