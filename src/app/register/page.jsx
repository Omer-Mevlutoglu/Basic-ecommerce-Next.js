import React from "react";
import Link from "next/link";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import "./register.css";

const Register = () => {
  return (
    <>
      <Header />
      <main className="register-container">
        <h1>Create Account</h1>
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="btn">
            Register
          </button>
        </form>
        <p className="redirect">
          Already have an account? <Link href="/signIn">Sign in here</Link>.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Register;
