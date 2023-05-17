import "../css/pageBack.css";
import LandingFirst from "../lib/ui/components/Landing/LandingFirst";
import LandingFooter from "../lib/ui/components/Landing/LandingFooter";
import LandingSecond from "../lib/ui/components/Landing/LandingSecond";
import LandingThird from "../lib/ui/components/Landing/LandingThird";
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
