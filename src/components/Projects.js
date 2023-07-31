import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/FlightsApp.png";
import projImg2 from "../assets/img/sortingVisualizer.png";
import projImg3 from "../assets/img/campusPaths.png";
import projImg4 from "../assets/img/PokemonTowerDefense.png";
import projImg5 from "../assets/img/pokedex.png";
import projImg6 from "../assets/img/todolist.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Flight Service | CSE 344 - University of Washington",
      description: "Designed a database using SQL Azure server for a flight booking system, Implemented the flight booking application that allows users to create an account, log in, make reservations, pay, and more using Java and SQL",
      imgUrl: projImg1,
    },
    {
      title: "Sorting Visualizer | Personal Project ",
      description: "Designed a web application that visually showcases different sorting algorithms in action using HTML, CSS, JS",
      imgUrl: projImg2,
    },
    {
      title: "Campus Paths | CSE 331 - University of Washington",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Tower Defense Game",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Pokedex",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "To-do list",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience</h2>
                <p>Here's my work experience + some recent projects I've worked on!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Classes</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
