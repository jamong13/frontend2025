import React from "react";

export default function Header() {
  return (
    <div className="text-center py-5 header" style={{ marginTop: 56 }}>
      <div className="container-fluid">
        <h1 className="display-4">Company</h1>
        <p className="lead">We specialize in blablabla</p>

        <form className="d-flex justify-content-center mt-4" action="">
          <div className="input-group input-group-lg w-50">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              aria-label="Email Address"
              required
            />
            <button className="btn btn-danger" type="submit">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
