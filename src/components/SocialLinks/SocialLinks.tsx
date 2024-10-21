import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import "./SocialLinks.css";
function SocialLinks() {
  return (
    <div className="social-icons">
      <a
        href="https://github.com/ZaoTX"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ziyao-he-a5867b202/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <FaLinkedin />
      </a>
      {/* <a
        href="https://linkedin.com/in/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <MdOutlineMail />
      </a>
      <a
        href="https://linkedin.com/in/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <FaYoutube />
      </a> */}
    </div>
  );
}

export default SocialLinks;