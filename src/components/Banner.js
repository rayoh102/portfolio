import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import resume from "../assets/img/resume.pdf"
import profilePic from "../assets/img/me.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "CS student at UW", "Software Engineer", "Fullstack Development" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Website!</span>
                <h1>{`Ray Oh`}</h1>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "CS student at UW", "Software Engineer", "Fullstack Development" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  I'm a computer science student with a passion for developing innovative software applications.
                  I'm currently pursuing my Bachelor's degree in Computer Science from the University of Washington Seattle and I’m expected to graduate in June 2024.
                  </p>
                  <br></br>
                  <span>
                    <a target="_blank" href={resume} rel="noreferrer">
                      <button className="vvd" target="_blank" href={resume}>Check out my Resume!</button>
                    </a>
                  </span>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={profilePic} alt="profile img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
