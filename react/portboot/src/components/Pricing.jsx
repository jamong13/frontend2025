import React from "react";

export default function Pricing() {
  return (
    <div id="pricing" className="container py-5">
      <div className="text-center mb-5">
        <h2>Pricing</h2>
        <h4>Choose a payment plan that works for you</h4>
      </div>
      <div className="row justify-content-center gy-4 slideanim">
        <div className="col-12 col-md-4">
          <div className="card text-center shadow-sm h-100">
            <div className="card-header">
              <h1 className="my-0">Basic</h1>
            </div>
            <div className="card-body">
              <p>
                <strong>20</strong> Lorem
              </p>
              <p>
                <strong>15</strong> Ipsum
              </p>
              <p>
                <strong>5</strong> Dolor
              </p>
              <p>
                <strong>2</strong> Sit
              </p>
              <p>
                <strong>Endless</strong> Amet
              </p>
            </div>
            <div className="card-footer">
              <h3>$19</h3>
              <h4>per month</h4>
              <button className="btn my-btn btn-lg">Sign Up</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card text-center shadow-sm h-100">
            <div className="card-header">
              <h1 className="my-0">Pro</h1>
            </div>
            <div className="card-body">
              <p>
                <strong>50</strong> Lorem
              </p>
              <p>
                <strong>25</strong> Ipsum
              </p>
              <p>
                <strong>10</strong> Dolor
              </p>
              <p>
                <strong>5</strong> Sit
              </p>
              <p>
                <strong>Endless</strong> Amet
              </p>
            </div>
            <div className="card-footer">
              <h3>$29</h3>
              <h4>per month</h4>
              <button className="btn my-btn btn-lg">Sign Up</button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card text-center shadow-sm h-100">
            <div className="card-header">
              <h1 className="my-0">Premium</h1>
            </div>
            <div className="card-body">
              <p>
                <strong>100</strong> Lorem
              </p>
              <p>
                <strong>50</strong> Ipsum
              </p>
              <p>
                <strong>25</strong> Dolor
              </p>
              <p>
                <strong>10</strong> Sit
              </p>
              <p>
                <strong>Endless</strong> Amet
              </p>
            </div>
            <div className="card-footer">
              <h3>$49</h3>
              <h4>per month</h4>
              <button className="btn my-btn btn-lg">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
