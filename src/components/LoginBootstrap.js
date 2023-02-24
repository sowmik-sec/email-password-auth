import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../firebase/firebase.init";

const auth = getAuth(app);

const LoginBootstrap = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      alert("Please type your email to reset password");
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-50 mx-auto">
      <h3 className="text-success">Please login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Your Password"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      {success && (
        <p className="text-success">Successfully logged into the account</p>
      )}
      <p>
        <small>
          New to this website? Please <Link to="/register">Register</Link>
        </small>
      </p>
      <p>
        <small>
          {" "}
          Forget Password?{" "}
          <button
            type="button"
            onClick={handleForgetPassword}
            class="btn btn-link"
          >
            Reset Password
          </button>
        </small>
      </p>
    </div>
  );
};

export default LoginBootstrap;
