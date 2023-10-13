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
              Hello<span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> , I am <span className="purple">Naresh Kumar M 😎 </span>
              from <span className="purple"> Chennai, India.</span>
              <br/>
              <br/>
              I am currently working as <b><i className="purple">Senior Product Engineer</i></b> in IBS software and I have 
              <i>
                <b className="purple">
                  {" "}
                  Bachelor's degree in Engineering
                </b>
              </i>
              &nbsp; in ECE
              <br />
              <br/>
              I am a Gamer <span className="wave" role="img" aria-labelledby="wave">
              🎮
                </span> and a Tech enthu👨‍💻. I have been in love with computers since I was a kid and that's what drew me and made me fall in love with programming.
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
            <h1>CONNECT WITH <span className="purple">ME</span> ON</h1>
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
