import React from "react";

export default function About() {
  return (
    <div>
      <div id="about" className="container-fluid py-5">
        <div className="row align-item-center">
          <div className="col-sm-8">
            <h2 className="mb-4">About Company Page</h2>
            <h4 className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h4>
            <br />
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <button className="btn btn-secondary btn-lg">Get in Touch</button>
          </div>
          <div className="col-sm-4">
            <i className="fa fa-signal graph"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
