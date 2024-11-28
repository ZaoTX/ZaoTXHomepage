import Paragraph from "../../components/Paragraph/Paragraph";
import ProjectItem from "../../components/Projectitem/ProjectItem";
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
          image={"/images/Projects/ThisHomepage/RaspberryHost.jpg"}
          title="This Homepage"
          description={`The homepage is built with React and TypeScript and is hosted on a Raspberry Pi running Apache on my desk. `}
          link="https://github.com/ZaoTX/ZaoTXHomepage"
          id="0"
        ></ProjectItem>
      </div>
    </div>
  );
}
export default Projects;
