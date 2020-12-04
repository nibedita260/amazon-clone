import React, { useState } from "react";
import "./SignIn.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  console.log("email is", email);
  const [password, setPassword] = useState("");
  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };
  const SignUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="signin">
      <Link to="/">
        <img
          className="signin_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt=""
        />
      </Link>
      <div className="signin_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signinButton" type="submit" onClick={SignIn}>
            SignIn
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON CLONE Condition of Use
          &Sale.Please see our Privacy Notice,our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <button className="login_signupButton" onClick={SignUp}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default SignIn;
