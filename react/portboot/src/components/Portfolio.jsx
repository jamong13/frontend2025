import React from "react";
import "./Portfolio.css";
export default function Portfolio() {
  // const images = ["paris.jpg", "newyork.jpg", "sanfran.jpg"];
  // 여기 선언하거나 아래에 선언해도 됨.
  return (
    <div>
      <div className="container-fluid text-center bg-light py-5" id="portfolio">
        <h2>Portfolio</h2>
        <br />
        <h4>What we have created</h4>

        <div className="row justify-content-center gy-4 slideanim">
          {["paris.jpg", "newyork.jpg", "sanfran.jpg"].map((img, i) => (
            <div key={i} className="col-md-4">
              <div
                className="card shadow-sm"
                style={{ width: "80%", margin: "0 auto" }}
              >
                <img className="card-img-top" src={`img/${img}`} alt="{img}" />
                <div className="card-body">
                  <h5 className="card-title">{img.split(".")[0]}</h5>
                  <p className="card-text">Yes, we built Paris </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="container py-5 text-center">
        <h2 className="mb-4">What our customers say</h2>
        <div id="carouselExampleCaptions" className="carousel slide py-3">
          {/* <div className="carousel-indicators">
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div> */}
          <div className="carousel-indicators">
            {[0, 1, 2].map((n) => (
              <button
                key={n}
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={n}
                className={n === 0 ? "active" : ""}
                aria-current={n === 0 ? "true" : undefined}
                aria-label={`Slide ${n + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h4>
                "This company is the best. I am so happy with the result!"
              </h4>
              <p className="text-muted">
                — Michael Roe, Vice President, Comment Box
              </p>
            </div>
            <div className="carousel-item">
              <h4>"One word... WOW!!"</h4>
              <p className="text-muted">— John Doe, Salesman, Rep Inc</p>
            </div>
            <div className="carousel-item">
              <h4>"Could I... BE any more happy with this company?"</h4>
              <p className="text-muted">— Chandler Bing, Actor, FriendsAlot</p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
}
