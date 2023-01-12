import "./HeroStyles.css";
import Cloud1 from '../assets/Clouds/cloud1.png'
import Cloud2 from '../assets/Clouds/cloud2.png'
import Cloud3 from '../assets/Clouds/cloud3.png'
import Cloud4 from '../assets/Clouds/cloud4.png'
import Cloud5 from '../assets/Clouds/cloud5.png'


function Hero(props) {

  return (
    <>

      <div className={props.cName}>
        

        <img alt="HeroImg" className="HeroImg" src={props.heroImg} />

        <div className="clouds">
        <img alt="i" src={Cloud1} />
        <img alt="i" src={Cloud2} />
        <img alt="i" src={Cloud3} />
        <img alt="i" src={Cloud4} />
        <img alt="i" src={Cloud5} />
        </div>

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
        </div>
      </div>

    </>
  );
}

export default Hero;
