import { useEffect } from "react";
import LandingFirst from "../components/LandingFirst";
import LandingSecond from "../components/LandingSecond";
import "../css/pageBlack.css";
import Navbar from "../layouts/Navbar";
export default function Landing() {
  useEffect(() => {
    document.body.classList.add("pageBlack");
    return () => {
      document.body.classList.remove("pageBlack");
    };
  }, []);
  return (
    <>
      <Navbar />
      <LandingFirst />
      <LandingSecond />
    </>
  );
}
