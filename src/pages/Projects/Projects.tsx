import Paragraph from "../../components/Paragraph/Paragraph";
import ProjectItem from "../../components/Projectitem/ProjectItem";
import "./Projects.css";
function Projects() {
  return (
    <div className="Projects first-paragraph">
      <Paragraph title="Projects" content=" "></Paragraph>
      <div className="projectList">
        <ProjectItem
          image={"/images/Projects/ThisHomepage/RaspberryHost.jpg"}
          title="This Homepage"
          description={`The homepage is built with React and TypeScript and is hosted on a Raspberry Pi running Apache on my desk. `}
          link="https://github.com/ZaoTX/ZaoTXHomepage"
          id="0"
        ></ProjectItem>
        <ProjectItem
          image={"/images/Projects/DynamicCDRatio/DynamicSpeedExample.png"}
          title="Dynamic CD Ratio"
          description={`Implemented and compared object manipulation techniques in handheld augmented reality.`}
          link="https://github.com/ZaoTX/DynamicCDRatio"
          id="1"
        ></ProjectItem>
        <ProjectItem
          image={"/images/Projects/Vichess/Vichess.jpg"}
          title="Vichess"
          description={`Send chess move to user with vibration inspired by Carlsen–Niemanncontroversy. `}
          link="https://github.com/ZaoTX/ViChess-PC"
          id="2"
        ></ProjectItem>
        <ProjectItem
          image={"/images/Projects/Fishschooling/Fishschooling.png"}
          title="Fish Schooling"
          description={`Fish Schooling Simulation in Unity. Use different colors to represent current fish behavior: attraction, repulsion, orientation, mixed behavior.`}
          link="https://github.com/ZaoTX/FishSchool"
          id="3"
        ></ProjectItem>
      </div>
    </div>
  );
}
export default Projects;
