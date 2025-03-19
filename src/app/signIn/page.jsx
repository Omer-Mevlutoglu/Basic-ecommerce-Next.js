import React from "react";
import Link from "next/link";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import "./signIn.css";

const SignIn = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="sign-in-container">
        <h1>Sign In</h1>
        <form className="sign-in-form">
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
          <button type="submit" className="btn">
            Sign In
          </button>
        </form>
        <p className="redirect">
          Don't have an account? <Link href="/register">Register here</Link>.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
