import React, { useEffect } from "react";
import style from "./Home.module.css";
import blogImg from "../../assets/blog-img.svg";
export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <section className="mt86 minH bg-green d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="text-center">
            <img
              src={blogImg}
              className={`${style.w250} mb-3`}
              alt="start framework image"
            />
          </div>
          <div className="mb-3">
            <h2 className="section-title text-uppercase pt-4 text-white text-center mb-3">
              start Framework
            </h2>
            <div
              className={`d-flex justify-content-center align-items-center ${style.textColor}`}
            >
              <div className={`line me-3 ${style.bg}`}></div>
              <i className="fa-solid fa-star"></i>
              <div className={`line ms-3 ${style.bg}`}></div>
            </div>
          </div>
          <p className="text-white text-center">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </section>
    </>
  );
}
