import "./Home.css";
import Paragraph from "../../components/Paragraph/Paragraph";
import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "react-bootstrap";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Carousel from "../../components/Carousel/Carousel";
const motivation_content =
  "I heard a story from my senior. He had a roommate who was not so outgoing and didn’t interact much with others during college. " +
  "His daily routine was just tweaking a pink webpage he made. After graduation, he landed the best job in their dormitory. Although " +
  "the reason he got the good job might not necessarily be due to the pink webpage, I also want to create a personal homepage for someone to laugh at, and it " +
  "doesn’t have to be pink.";
const welcome_content =
  "I'm a graduate student from University of Konstanz and currently a PhD candidate at Otto-von-Guericke University. " +
  "This is a simple homepage created by me. The theme of my hompage is inspired by the dark theme of Visual Studio Code. " +
  "So you can have the feeling of debugging even when reading my homepage, I hope you like it!";
function Home() {
  return (
    <Fragment>
      <div className="home">
        <Container>
          <Row>
            <div className="image-container">
              <img
                src="/images/Home/Ziyao_Profilfoto.jpg"
                alt="my Photo"
                className="profile-photo"
              />
            </div>
          </Row>
          <Row>
            <div className="link-container">
              <SocialLinks></SocialLinks>
            </div>
          </Row>
          <Row>
            <Paragraph
              title="Welcome to my homepage"
              content={welcome_content}
            ></Paragraph>
          </Row>
          <Row>
            <div className="skills">
              <h1 className="green_text paragraph-title-container"> Skills</h1>
              <p className="paragraph-container">
                {" "}
                My main focus is Unity development. To make it looks more
                professional (or maybe uglier), I listed all the programming
                related skills I've gathered during the study. It's pretty funny
                that implmenting a homepage with react can help me fill 5 blanks
                in the progamming part.
              </p>
              <ol className="list ">
                <li className="item ">
                  <h2 className="pink_text paragraph-container">Programming</h2>
                  <p className="paragraph-container">
                    Unity C#, Python, Arduino, TypeScript, React, HTML, CSS,
                    JavaScript, PostgreSQL, Kotlin, JavaFX, MatLab
                  </p>
                </li>
                <li className="item">
                  <h2 className="pink_text paragraph-container">Softwares</h2>
                  <p className="paragraph-container">
                    Unity, Blender, Visual Studio Code, figma, photoshop
                  </p>
                </li>
                <li className="item">
                  <h2 className="pink_text paragraph-container">Languages</h2>
                  <p className="paragraph-container">
                    Chinese (Native), English (C2), German (C2)
                  </p>
                </li>
              </ol>
            </div>
          </Row>
          <Row>
            <div id="someposts" className="News">
              <Paragraph
                title="Some Posts"
                content={
                  "For now, there are just some photos of me and the university of Konstanz. Look at my face, what a relief after the submission of my master thesis. " +
                  "Maybe I will replace some of them with photos personal projects I'm currently working on. "
                }
              ></Paragraph>
              <div className="carousel-image-container">
                <Carousel
                  imageurls={[
                    "/images/Home/Foto1.jpg",
                    "/images/Home/Foto2.jpg",
                    "/images/Home/UniFoto3.jpg",
                  ]}
                ></Carousel>
              </div>
            </div>
          </Row>
          <Row>
            <div className="last-paragraph">
              <Paragraph
                title="Motivation to build this homepage"
                content={motivation_content}
              ></Paragraph>
            </div>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}
export default Home;
