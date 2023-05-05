import { useEffect } from "react";
import LandingFirst from "../components/LandingFirst";
import LandingFooter from "../components/LandingFooter";
import LandingSecond from "../components/LandingSecond";
import LandingThird from "../components/LandingThird";
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
