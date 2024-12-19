"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function ScrollToTop() {
  useEffect(() => {
    let scrollTop = document.querySelector(".scroll-top");
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      }
    }
    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);
  }, []);

  const handleTopToScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        onClick={handleTopToScroll}
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center cursor-pointer"
      >
        <i className="bi bi-arrow-up-short"></i>
      </div>
      <div className="social_sticky_btns">
        <a
          href="https://wa.me/919537630281"
          rel="noreferrer"
          target="_blank"
          aria-label="whatsapp-logo"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="nfgdlth7la"
              >
                <stop stopColor="#00E676" offset="0%"></stop>
                <stop stopColor="#00AD59" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fillRule="nonzero" fill="none">
              <path
                d="m6.584 21.622.408.202a10.722 10.722 0 0 0 5.508 1.487c5.966-.014 10.868-4.89 10.868-10.81 0-2.862-1.145-5.61-3.182-7.636a10.87 10.87 0 0 0-7.707-3.2c-5.939 0-10.825 4.85-10.825 10.743v.14a11.025 11.025 0 0 0 1.634 5.675l.273.405-1.09 3.987 4.113-.993z"
                fill="url(#nfgdlth7la)"
              ></path>
              <path
                d="M21.398 3.649A12.306 12.306 0 0 0 12.588 0h-.02C5.747 0 .134 5.57.134 12.338l.001.095A12.978 12.978 0 0 0 1.77 18.58L0 25l6.597-1.69a12.213 12.213 0 0 0 5.95 1.487C19.393 24.76 25.005 19.16 25 12.365a12.223 12.223 0 0 0-3.602-8.716m-8.81 19.054a10.168 10.168 0 0 1-5.235-1.42l-.409-.202-3.928 1.014 1.021-3.852-.272-.405a10.192 10.192 0 0 1-1.548-5.397c0-5.623 4.663-10.25 10.328-10.25 5.666 0 10.328 4.627 10.328 10.25 0 3.54-1.848 6.84-4.879 8.708a9.97 9.97 0 0 1-5.372 1.554m5.985-7.5-.75-.338s-1.088-.473-1.77-.81c-.067 0-.135-.068-.203-.068a.993.993 0 0 0-.477.135c-.145.084-.068.067-1.021 1.148a.375.375 0 0 1-.34.203h-.069a.52.52 0 0 1-.272-.135l-.34-.135a6.615 6.615 0 0 1-1.975-1.284c-.136-.135-.34-.27-.476-.405a7.569 7.569 0 0 1-1.294-1.622l-.068-.135a.98.98 0 0 1-.136-.27.503.503 0 0 1 .068-.338c.062-.102.272-.338.476-.54.205-.203.205-.339.34-.474a.827.827 0 0 0 .137-.675 26.273 26.273 0 0 0-1.09-2.568.791.791 0 0 0-.476-.338h-.749c-.136 0-.272.068-.408.068l-.068.067c-.137.068-.273.203-.409.27-.136.068-.204.271-.34.406a3.429 3.429 0 0 0-.75 2.095c.008.535.124 1.063.341 1.554l.068.202a11.267 11.267 0 0 0 2.52 3.446l.272.27c.198.163.38.344.544.541a12.187 12.187 0 0 0 4.895 2.568c.205.067.477.067.681.135h.681c.356-.018.704-.11 1.021-.27.167-.076.326-.166.477-.27l.136-.136c.136-.135.272-.203.408-.338a1.79 1.79 0 0 0 .34-.405c.132-.303.224-.62.273-.946v-.473a.856.856 0 0 0-.204-.135"
                fill="#FFF"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}
