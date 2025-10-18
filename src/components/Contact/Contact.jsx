import React, { useEffect, useState } from "react";
import style from "./Contact.module.css";

export default function Contact() {
  const [isTypingName, setIsTypingName] = useState(false);
  const [isTypingAge, setIsTypingAge] = useState(false);
  const [isTypingEmail, setIsTypingEmail] = useState(false);
  const [isTypingPassword, setIsTypingPassword] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <section className="mt86 minH bg-white d-flex justify-content-center align-items-center mb-4">
      <div className="container">
        <div className="mb-3">
          <h2
            className={`section-title text-uppercase pt-5 ${style.textColor} text-center mb-3`}
          >
            contact section
          </h2>
          <div
            className={`d-flex justify-content-center align-items-center ${style.textColor}`}
          >
            <div className={`line me-3 ${style.bg}`}></div>
            <i className="fa-solid fa-star"></i>
            <div className={`line ms-3 ${style.bg}`}></div>
          </div>
        </div>

        <form className="w-50 mx-auto mt-5 p-3" onSubmit={handleForm}>
          <div className="mb-4 position-relative">
            <label
              htmlFor="userName"
              className={`text-green form-label mb-0 position-absolute start-0 ${
                style.transitionBottom
              } ${isTypingName ? "bottom-100" : "bottom-50"}`}
            >
              User Name:
            </label>
            <input
              type="text"
              className="form-control border-0 border-bottom py-3 position-relative"
              id="userName"
              placeholder="User Name"
              onInput={(e) => setIsTypingName(e.target.value.trim() !== "")}
            />
          </div>
          <div className="mb-4 position-relative">
            <label
              htmlFor="userAge"
              className={`text-green form-label mb-0 position-absolute start-0 ${
                style.transitionBottom
              } ${isTypingAge ? "bottom-100" : "bottom-50"}`}
            >
              Age:
            </label>
            <input
              type="number"
              className="form-control border-0 border-bottom py-3 position-relative"
              id="userAge"
              placeholder="Your Age"
              onInput={(e) => setIsTypingAge(e.target.value.trim() !== "")}
            />
          </div>
          <div className="mb-4 position-relative">
            <label
              htmlFor="userEmail"
              className={`text-green form-label mb-0 position-absolute start-0 ${
                style.transitionBottom
              } ${isTypingEmail ? "bottom-100" : "bottom-50"}`}
            >
              Email:
            </label>
            <input
              type="email"
              className="form-control border-0 border-bottom py-3 position-relative"
              id="userEmail"
              placeholder="someone@example.com"
              onInput={(e) => setIsTypingEmail(e.target.value.trim() !== "")}
            />
          </div>
          <div className="mb-4 position-relative">
            <label
              htmlFor="userPassword"
              className={`text-green form-label mb-0 position-absolute start-0 ${
                style.transitionBottom
              } ${isTypingPassword ? "bottom-100" : "bottom-50"}`}
            >
              Password:
            </label>
            <input
              type="password"
              className="form-control border-0 border-bottom py-3 position-relative"
              id="userPassword"
              placeholder="Password"
              onInput={(e) => setIsTypingPassword(e.target.value.trim() !== "")}
            />
          </div>
          <button type="submit" className="btn btn-green text-white bg-green">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
