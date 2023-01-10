import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Cloud1 from '../assets/Clouds/cloud1.png'
import Cloud2 from '../assets/Clouds/cloud2.png'
import Cloud3 from '../assets/Clouds/cloud3.png'
import Cloud4 from '../assets/Clouds/cloud4.png'
import Cloud5 from '../assets/Clouds/cloud5.png'
import nasa from '../assets/nas.jpg'
import logo from '../assets/logo.png'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    logoimg={logo}
    cName="hero"
    heroImg={nasa}
    title="Raqamli yechimlarni taklif qilamiz"
    img12={Cloud1}
    img22={Cloud2}
    img32={Cloud3}
    img42={Cloud4}
    img52={Cloud5}
    text="HAR QANDAY MURAKKABLIKDA"
    buttonText="Bizning Portfolio"
    buttonText2="Qo‘ng‘iroq"
    btnClass="show"
    url="/service"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  );
}

export default Home;
