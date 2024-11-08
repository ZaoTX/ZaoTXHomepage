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
      <h3>{title}</h3>
      <h5>{description}</h5>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default ProjectItem;
