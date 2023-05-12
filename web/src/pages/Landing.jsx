import { useEffect } from "react";
import LandingFirst from "../components/Landing/LandingFirst";
import LandingFooter from "../components/Landing/LandingFooter";
import LandingSecond from "../components/Landing/LandingSecond";
import LandingThird from "../components/Landing/LandingThird";
import "../css/pageBack.css";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
export default function Landing() {
  useEffect(() => {
    document.body.classList.add("pageBack");
    return () => {
      document.body.classList.remove("pageBack");
    };
  }, []);
  return (
    <>
      <Navbar />
      <LandingFirst />
      <LandingFooter text="условия акции" />
      <LandingSecond />
      <LandingFooter text="Учавствовать" />
      <LandingThird />
      <Footer />
    </>
  );
}
