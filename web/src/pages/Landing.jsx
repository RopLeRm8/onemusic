import LandingFirst from "../components/Landing/LandingFirst";
import LandingFooter from "../components/Landing/LandingFooter";
import LandingSecond from "../components/Landing/LandingSecond";
import LandingThird from "../components/Landing/LandingThird";
import "../css/pageBack.css";
import Footer from "../lib/ui/layouts/Footer";
import Navbar from "../lib/ui/layouts/Navbar";
export default function Landing() {
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
