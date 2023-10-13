import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> Introduction </span> about me
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
              <br />
              <br />
              <br />
            </p>
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
