import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/FlightsApp.png";
import projImg2 from "../assets/img/sortingVisualizer.png";
import projImg3 from "../assets/img/campusPaths.png";
import projImg4 from "../assets/img/PokemonTowerDefense.png";
import projImg5 from "../assets/img/pokedex.png";
import projImg6 from "../assets/img/todolist.png";
import costcoLogo from "../assets/img/costcoLogo.svg";
import phenomenaLogo from "../assets/img/phenomenaLogo.svg";
import tutoringLogo from "../assets/img/tutoringLogo.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Flight Service | CSE 344 - University of Washington",
      description: "Designed a database using SQL Azure server for a flight booking system, Implemented the flight booking application that allows users to create an account, log in, make reservations, pay, and more using Java and SQL",
      imgUrl: projImg1,
      githubUrl: "https://github.com/rayoh102/Flights-App",
    },
    {
      title: "Sorting Visualizer | Personal Project ",
      description: "Designed a web application that visually showcases different sorting algorithms in action using HTML, CSS, JS",
      imgUrl: projImg2,
      githubUrl: "https://github.com/rayoh102/SortingVisualizer.github.io",
    },
    {
      title: "Campus Paths | CSE 331 - University of Washington",
      description: "Designed, implemented, tested, and optimized a directed, labeled graph ADT that stimulated UW Campus and allowed clients to find the shortest path between two buildings using Djikstra’s pathfinding algorithm",
      imgUrl: projImg3,
      githubUrl: "https://github.com/rayoh102/Software-Design-and-Implementation/tree/master/hw-campuspaths",
    },
    {
      title: "Tower Defense Game",
      description: "Designed a Poekon version Tower Defense Game modeled after the Bloons Tower Defense using python and pygame",
      imgUrl: projImg4,
      githubUrl: "https://github.com/rayoh102/Tower-Defense",
    },
    {
      title: "Pokedex",
      description: "Designed a pokedex using the RESTful Pokemon API for my Creative Assignment for CSE 154",
      imgUrl: projImg5,
      githubUrl: "https://github.com/rayoh102/Pokedex-Creative-Project",
    },
    {
      title: "To-do list",
      description: "Created a to-do list to start learning HTML, CSS, JS",
      imgUrl: projImg6,
      githubUrl: "https://github.com/rayoh102/to-do-list",
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
                      <div class="intern-item">
                        <div class ="leftContent">
                          <img src={costcoLogo} alt="Header Img" class ="internLogo"/>
                          <p>Costco IT - Full Stack Software Development Internship</p>
                        </div>
                        <div class ="rightContent">
                          <p>June 2023 - September 2023</p>
                          <ul>
                            <li>Supported the development of the new Costco Membership Global (MGLO) system in an Agile Scrum Team by resolving user stories, tasks, and bugs</li>
                            <li>Improved code quality of RESTful APIs by implementing logging, stylistic, and readability enhancements</li>
                        </ul>
                        </div>
                      </div>

                      <div class="intern-item">
                        <div class ="leftContent">
                          <img src={phenomenaLogo} alt="Header Img" class ="internLogo"/>
                          <p>Phenomena - Software Engineer Internship</p>
                        </div>
                        <div class ="rightContent">
                          <p>November 2022 - February 2023</p>
                          <ul>
                            <li>Developed 6 interactive digital experiences that communicate STEM concepts to middle and high school students</li>
                            <li>Created features and solved bug fixes in javascript for Phenomena’s block-based coding system</li>
                          </ul>
                        </div>
                      </div>

                      <div class="intern-item">
                        <div class ="leftContent">
                          <img src={tutoringLogo} alt="Header Img" class ="internLogo"/>
                          <p>Hiscore Learning Center - Tutor</p>
                        </div>
                        <div class ="rightContent">
                          <p>June 2019 - March 2023</p>
                          <ul>
                            <li>Taught English, math, and programming concepts to elementary and middle school students</li>
                            <li>Designed lesson plans/tests and created multi-step problems for students</li>
                          </ul>
                        </div>
                      </div>
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
                      <div class="classContainer">
                        <div class="class">
                          <h3>CSE 473: Artificial Intelligence</h3>
                          <p>Principal ideas and developments in AI: Problem solving and search, game playing, knowledge representation and reasoning, uncertainty, machine learning, natural language processing.</p>
                        </div>
                        <div class="class">
                          <h3>CSE 461: Computer Networks</h3>
                          <p>A dive into Computer network architectures, protocol layers, and network programming. Studied transmission media, encoding systems, switching, routing, congestion control, and much more.</p>
                        </div>
                        <div class="class">
                          <h3>CSE 333: Systems Programming</h3>
                          <p>Programming in languages that expose machine characteristics and low-level data representation. Learned explicit memory management, interacted with operating-system services, and more.</p>
                        </div>
                        <div class="class">
                          <h3>CSE 344: Data Management</h3>
                          <p>Learned database management systems and wrote applications that use such systems. Learned about data models, query languages, conceptual modeling, security, data warehousing, parallelism, web-data management, and more.</p>
                        </div>
                        <div class="class">
                          <h3>CSE 446: Machine Learning</h3>
                          <p>Designed efficient algorithms that learn from data. Topics included supervised learning, regression and classification, deep learning, kernel methods, and optimization.</p>
                        </div>
                        <div class="class">
                          <h3>CSE 154: Web Programming</h3>
                          <p>Covered the languages, tools, and techniques for developing interactive and dynamic web pages. Topics included client and server side scripting, web security, database interactions, and more.</p>
                        </div>
                        <div class="class">
                          <h3>CSE 427: Computational Biology </h3>
                          <p>Studied algorithmic and analytic techniques underlying analysis of large-scale biological data sets such as DNA, RNA, and protein sequences or structures, expression and proteomic profiling.</p>
                        </div>
                        <div class="class">
                          <h3>CSE 351: Hardware Software Interface</h3>
                          <p>Examined key computational abstraction levels below modern high-level languages. Covered assembly language, memory management, high-level machine architecture, high-level language implementation, and more.</p>
                        </div>
                        <div class="class">
                          <h3>CSE 332: Data Structures and Parallelism</h3>
                          <p>Covered abstract data types and structures (dictionaries, balanced trees, hash tables, priority queues, and graphs), sorting, fundamental graph algorithms, concurrency and synchronization, and parallelism.</p>
                        </div>
                        <div class="class">
                          <h3>CSE 312: Foundations of Computing II</h3>
                          <p>Learned the fundamentals of enumeration and discrete probability. Covered applications of randomness to computing, polynomial-time versus NP, and NP-completeness.</p>
                        </div>
                        <div class="class">
                          <h3>CSE 311: Foundations of Computing I</h3>
                          <p>Learned the fundamentals of logic, set theory, induction, and algebraic structures with applications to computing. Also covered finite state machines and limits of computability.</p>
                        </div>
                        <div class="class">
                          <h3>CSE 331: Software Design & Implementation</h3>
                          <p>Explored concepts and techniques for design/construction of reliable/maintainable software systems in modern high-level languages (program structure/design, program-correctness approaches, and event-driven programming)</p>
                        </div>
                      </div>
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
