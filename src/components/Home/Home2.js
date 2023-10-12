import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Gamer🎮 and a Tech enthu👨‍💻. I have been in love with computers since I was a kid and that's what drew me and made me fall in love with programming.
              <br />
              <br />I can code in the programming languages like
              <i>
                <b className="purple"> C, C++, Java, Javascript, Python and R. </b>
              </i>
              <br />
              <br />
              My field of Interest's are in &nbsp;
              <i>
                <b className="purple"> Fullstack Development, Cloud technologies, IoT, AI and ML techniques </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain and Gaming (Unreal engine).
                </b>
              </i>
              <br />
              <br />
              I am currently working as an Senior Product Engineer with 
              <i>
                <b className="purple">
                  {" "}
                  3 years
                </b>
              </i>
              &nbsp; of full time work experience and
              <i>
                <b className="purple"> 8 months </b>
              </i>
              of experience as an Intern
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Naresh185"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/naresh-kumar-manohar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/naresh_kumar_05/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
