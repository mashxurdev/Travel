import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Portfolio"
        buttonText="Bosh Sahifa"
        btnClass="show"
        url="/"
      />
      <Trip/>
      <Footer/>
    </>
  );
}

export default Service;
