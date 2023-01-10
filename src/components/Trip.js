import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/port1.png";
import Trip2 from "../assets/port2.png";
import Trip3 from "../assets/port3.png";

function Trip() {
  return (
    <div className="trip">
      <h1>Recents Project</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Uzbekistan"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a "
        />

        <TripData
          image={Trip2}
          heading="Trip in Tashkent"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a "
        />

        <TripData
          image={Trip3}
          heading="Trip in Andijon"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a "
        />
      </div>
    </div>
  );
}

export default Trip;
