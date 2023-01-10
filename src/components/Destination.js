import DestinationData from "./DestinationData";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/44.jpg";
import "./DestinationStyles.css";

const Destination = (props) => {
  return (
    <div className="destination">
      <h1>Biz haqimizda</h1>
      <p>BIR SO‘Z BILAN AYTGANDA</p>
      <DestinationData
      className="first-des"
        heading="Tezkor yechimlar"
        text="Har bir yirik kompaniya faqatgina oʻziga emas, balki yonida yelkadosh boʻlgan hamda ishonganlarga minnatdorchilik bildirishi lozim. Axir, bizning ishda eng muhim prinsip - bu ishonch."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
      className="first-des-reverse"
        heading="Takrorlanmas loyihalar"
        text="Ishonch nafaqat mijoz va hamkorlar sadoqatini ta’minlaydi, qolversa, o’zimizga bo’lgan talabchanligimizni oshiradi. Biz uzoq yillik insoniylik an’analari ustiga qurilgan munosabatlar asosida hamkorlik qilamiz."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
