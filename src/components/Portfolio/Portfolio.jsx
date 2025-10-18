import React, { useEffect, useState } from "react";
import style from "./Portfolio.module.css";
import portfolioImg1 from "../../assets/portfolio-img1.png";
import portfolioImg2 from "../../assets/portfolio-img2.png";
import portfolioImg3 from "../../assets/portfolio-img3.png";
export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);
  const handleOpen = (img) => {
    setSelectedImg(img);
  };
  const handleClose = () => {
    setSelectedImg(null);
  };
  const images = [
    portfolioImg1,
    portfolioImg2,
    portfolioImg3,
    portfolioImg1,
    portfolioImg2,
    portfolioImg3,
  ];
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <>
      <section className="mt86 minH bg-white d-flex justify-content-center align-items-center mb-4">
        <div className="container">
          <div className="mb-3">
            <h2
              className={`section-title text-uppercase pt-5 ${style.textColor} text-center mb-3`}
            >
              portfolio component
            </h2>
            <div
              className={`d-flex justify-content-center align-items-center ${style.textColor}`}
            >
              <div className={`line me-3 ${style.bg}`}></div>
              <i className="fa-solid fa-star"></i>
              <div className={`line ms-3 ${style.bg}`}></div>
            </div>
          </div>
          <div className="row g-5">
            {images.map((img, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="inner position-relative"
                  onClick={() => handleOpen(img)}
                >
                  <img src={img} className="w-100 rounded-3" alt="" />
                  <div
                    className={`${style.layer} d-flex justify-content-center align-items-center rounded-3`}
                  >
                    <i class="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedImg && (
        <div
          className="z-index-9999 d-flex justify-content-center align-items-center position-fixed top-0 left-0 w-100 h-100 bg-primary bg-opacity-25"
          onClick={handleClose}
        >
          <img
            src={selectedImg}
            className="portfolio-img"
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
