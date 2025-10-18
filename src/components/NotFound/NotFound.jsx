import React, { useEffect } from "react";
import style from "./NotFound.module.css";
import { Link } from "react-router-dom";
export default function NotFound() {
    useEffect(() => {
      document.title = "404 | Page Not Found";
    }, []);
  return (
    <>
      <section className="mt86 minH bg-white d-flex justify-content-center align-items-center mb-4">
        <div className="container">
          <div className="mb-3">
            <h2
              className={`section-title text-uppercase pt-5 ${style.textColor} text-center mb-3`}
            >
              Not Found 404
            </h2>
            <div className="text-center">
              <Link className="btn btn-green text-white bg-green" to={"/"}>
                404 | Page Not Found
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
