import { FaGithub } from "react-icons/fa"; 
import "./ProjectItem.css";
import  "../SocialLinks/SocialLinks.css";
interface ProjectItemProps {
  image: string;
  title: string;
  description: string;
  link: string;
  id : string;
}
function ProjectItem({ image, title, description, link, id }: ProjectItemProps) { 
  return (
    <div className="projectItem">
      <img className="bgImage" src={image} alt={`Project ${id}`} key={id} />
      <h3 className="blue_text">{title}</h3>
      <h4>{description}</h4>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link giticon"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default ProjectItem;
