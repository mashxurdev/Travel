import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Destination from "../components/Destination";


function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Biz Haqimizda"
        buttonText="Bosh Sahifa"
        btnClass="show"
        url="/"
      />
      <Destination/>
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;
