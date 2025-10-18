import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-light-dark ${
          scrolled ? "py-2" : "py-4"
        } fixed-top ${style.transitionPadding}`}
      >
        <div className="container">
          <Link className="navbar-brand text-uppercase text-white" to={"/"}>
            Start FrameWork
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars fa-lg"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-white fw-bolder rounded-3 px-2"
                  to={"about"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-white fw-bolder rounded-3 px-2"
                  to={"portfolio"}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-white fw-bolder rounded-3 px-2"
                  to={"contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
