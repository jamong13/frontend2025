import React from "react";

export default function Contact() {
  return (
    <div>
      <div id="contact" className="container-fluid bg-grey py-5">
        <h2 className="text-center mb-4">CONTACT</h2>
        <div className="row">
          <div className="col-md-5">
            <p>Contact us and we'll get back to you within 24 hours.</p>
            <p>
              <i className="fa fa-map-marker fa-fw"></i> Chicago, US
            </p>
            <p>
              <i className="fa fa-phone fa-fw"></i> +00 1515151515
            </p>
            <p>
              <i className="fa fa-envelope fa-fw"></i> myemail@something.com
            </p>
          </div>
          <div className="col-md-7 slideanim">
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                placeholder="Comment"
                rows="5"
              ></textarea>
            </div>
            <div className="text-end">
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="img/map.png"
        className="w3-image w3-greyscale-min"
        style={{ width: "100%" }}
      />
    </div>
  );
}
