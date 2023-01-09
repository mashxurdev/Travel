import { Component } from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div>
        <div className={this.props.className}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
          <div className="image">
            <img alt="image" src={this.props.img1} />
            <img alt="image" src={this.props.img2} />
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationData;