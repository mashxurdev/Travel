import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        buttonText="Khoshimov Plan"
        btnClass="hide"
        url="/"
      />
    </>
  );
}

export default About;
