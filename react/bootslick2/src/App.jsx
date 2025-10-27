import { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      id: 1,
      src: "https://via.placeholder.com/800x400/FF6B6B/FFFFFF?text=Image+1",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/800x400/4ECDC4/FFFFFF?text=Image+2",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/800x400/45B7D1/FFFFFF?text=Image+3",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://via.placeholder.com/800x400/96CEB4/FFFFFF?text=Image+4",
      alt: "Image 4",
    },
    {
      id: 5,
      src: "https://via.placeholder.com/800x400/FFEAA7/FFFFFF?text=Image+5",
      alt: "Image 5",
    },
    {
      id: 6,
      src: "https://via.placeholder.com/800x400/DDA15E/FFFFFF?text=Image+6",
      alt: "Image 6",
    },
  ];

  // 커스텀 화살표
  const CustomPrev = ({ onClick }) => (
    <button className="custom-arrow custom-prev" onClick={onClick}>
      <FaArrowLeft />
    </button>
  );

  const CustomNext = ({ onClick }) => (
    <button className="custom-arrow custom-next" onClick={onClick}>
      <FaArrowRight />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: true,
    fade: false,
    prevArrow: <CustomPrev />,
    nextArrow: <CustomNext />,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="text-center mb-4">이미지 슬라이더</h2>
          <div className="slider-wrapper">
            <Slider {...settings}>
              {images.map((image) => (
                <div key={image.id} className="slide-item">
                  <div className="px-2">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="img-fluid w-100"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <div className="slide-caption mt-2">
                      <h6>{image.alt}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="text-center mt-3">
            <p className="text-muted">
              현재 이미지: {currentSlide + 1} / {images.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
