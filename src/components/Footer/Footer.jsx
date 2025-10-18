import React from "react";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="p-5 bg-light-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="text-white text-center py-5">
                  <h2 className={`text-uppercase ${style.title}`}>Location</h2>
                  <p>2215 John Daniel Drive</p>
                  <span>Clark, MO 65243</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="text-white text-center py-5">
                  <h2 className={`text-uppercase ${style.title}`}>
                    AROUND THE WEB
                  </h2>
                  <div className={style.icons}>
                    <div className={`${style.circle} mx-1`}>
                      <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className={`${style.circle} mx-1`}>
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className={`${style.circle} mx-1`}>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className={`${style.circle} mx-1`}>
                      <i className="fa-solid fa-globe"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="text-white text-center py-5">
                  <h2 className={`text-uppercase ${style.title}`}>
                    ABOUT FREELANCER
                  </h2>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark text-center p-3">
          <p className="text-white pt-2">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
