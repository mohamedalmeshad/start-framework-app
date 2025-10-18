import React, { useEffect } from "react";
import style from "./About.module.css";
export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <section className="mt86 minH bg-green d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="mb-3">
            <h2 className="section-title text-uppercase pt-4 text-white text-center mb-3">
              about component
            </h2>
            <div
              className={`d-flex justify-content-center align-items-center ${style.textColor}`}
            >
              <div className={`line me-3 ${style.bg}`}></div>
              <i className="fa-solid fa-star"></i>
              <div className={`line ms-3 ${style.bg}`}></div>
            </div>
          </div>
          <div className="row px-5 text-white">
            <div className="col-md-6 ps-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 pe-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
