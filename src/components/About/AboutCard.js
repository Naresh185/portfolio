import React from "react";
import Card from "react-bootstrap/Card";
import { ImTv,ImTrophy,ImAirplane,ImStarFull } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello👋 , I am <span className="purple">Naresh Kumar M 😎 </span>
            from <span className="purple"> Chennai, India.</span>
            <br/>
            <br /> I am currently working as a <i className="purple">Senior Product Engineer</i> in IBS software
            <br />
            <br />
            Additionally, I am currently pursuing<i className="purple"> Master's in Data Science from Daikin University (AUS) </i> as a part time course on weekends through online
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImTrophy /> Playing Games
            </li>            
            <li className="about-activity">
              <ImAirplane /> Travelling
            </li>
            <li className="about-activity">
              <ImStarFull /> Star Gazing
            </li>
            <li className="about-activity">
              <ImTv /> Watching Anime and Series
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
