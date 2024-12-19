"use client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//relativwe path import
import Footer from "../Footer/page";
import ScrollToTop from "../ScrollToTop/page";

export default function Layout({ childern }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("bootstrap-icons/font/bootstrap-icons.css");
    // Disable right-click
    // disableRightClick();
  }, []);

  const disableRightClick = () => {
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    function ctrlShiftKey(e, keyCode) {
      return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }

    document.onkeydown = (e) => {
      // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
      if (
        event.keyCode === 123 ||
        ctrlShiftKey(e, "I") ||
        ctrlShiftKey(e, "J") ||
        ctrlShiftKey(e, "C") ||
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
      )
        return false;
    };
  };

  return (
    <div>
      <div>{childern}</div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
