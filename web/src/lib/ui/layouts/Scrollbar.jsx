// import $ from "jquery";
// import { useEffect } from "react";
import "../../../css/Scrollbar.css";

export default function Scrollbar() {
  //   useEffect(() => {
  //     function handleScroll() {
  //       const scrollTop =
  //         document.documentElement.scrollTop || document.body.scrollTop;

  //       console.log(scrollTop);

  //       const scrollHeight =
  //         document.documentElement.scrollHeight || document.body.scrollHeight;
  //       const clientHeight =
  //         document.documentElement.clientHeight || document.body.clientHeight;

  //       const scrollbarThumb = $("body::-webkit-scrollbar-thumb");

  //       if (scrollTop < 20) {
  //         scrollbarThumb.cz
  //         scrollbarThumb.addClass("fade-scrollbar-top");
  //       } else {
  //         scrollbarThumb.removeClass("fade-scrollbar-top");
  //       }

  //       if (scrollTop + clientHeight === scrollHeight) {
  //         scrollbarThumb.addClass("fade-scrollbar-bottom");
  //       } else {
  //         scrollbarThumb.removeClass("fade-scrollbar-bottom");
  //       }
  //     }

  //     $(window).on("scroll", handleScroll); // Use jQuery event listener

  //     return () => {
  //       $(window).off("scroll", handleScroll); // Remove jQuery event listener
  //     };
  //   }, []);

  return null;
}
