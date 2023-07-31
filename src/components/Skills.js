import skill1 from "../assets/img/skill1.svg";
import skill2 from "../assets/img/skill2.svg";
import skill3 from "../assets/img/skill3.svg";
import skill4 from "../assets/img/skill4.svg";
import skill5 from "../assets/img/skill5.svg";
import skill6 from "../assets/img/skill6.svg";
import skill7 from "../assets/img/skill7.svg";
import skill8 from "../assets/img/skill8.svg";
import skill9 from "../assets/img/skill9.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My areas of expertise include the following: </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skill1} alt="Image" />
                                <h5>Frontend Development</h5>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="Image" />
                                <h5>Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={skill4} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={skill5} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={skill6} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={skill7} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={skill8} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={skill9} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
