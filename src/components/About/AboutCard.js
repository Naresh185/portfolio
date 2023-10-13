import React from "react";
import Card from "react-bootstrap/Card";
import { ImTv,ImTrophy,ImAirplane,ImStarFull } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I have 
              <i>
                <b className="purple">
                  {" "}
                  3 years
                </b>
              </i>
              &nbsp; of full time work experience (2 years in Cognizant and 1 year in IBS software) and
              <i>
                <b className="purple"> 8 months </b>
              </i>
              of experience as an Intern
              <br />
              <br />
              I have completed my 
              <i>
                <b className="purple">
                  {" "}
                  Bachelor's of Engineering(B.E.)  in Electronics and Communication (ECE)
                </b>
              </i>
              &nbsp; in St. Joseph's College of Engineer
              <br />
              <br />
              I can code in the programming languages like
              <i>
                <b className="purple"> C, C++, Java, Javascript, Python and R. </b>
              </i>
              <br />
            <br />
            Additionally, I am currently pursuing <b><i className="purple"> Master's in Data Science from Daikin University (AUS) </i></b> as a part time course through online
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
              <ImTv /> Watching Series
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
