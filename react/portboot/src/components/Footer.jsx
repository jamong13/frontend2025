import React from "react";

export default function Footer() {
  return (
    <footer className="container-fluid text-center py-4 bg-light">
      <a
        href="#myPage"
        title="To Top"
        className="d-inline-block mb-2"
        style={{ color: "#f4511e", fontSize: "24px" }}
      >
        <i className="fa fa-chevron-up"></i>
      </a>
      <p>
        Bootstrap Theme Made By
        <a
          href="https://www.w3schools.com"
          title="Visit w3schools"
          className="text-decoration-none"
          style={{ color: "#f4511e" }}
        >
          www.w3schools.coms
        </a>
      </p>
    </footer>
  );
}
