import { Fragment, useState } from "react";
import "./HomePageNav.css"; 
import { HashLink } from "react-router-hash-link";
function HomePageNav() {
  const [expandNav, setExpandNav] = useState(false);
  return (
    <Fragment>
      <div className="header">
        <div className="title-container">
          {/* my name as title */}
          <h1 className="page-title">Hi, My Name is:</h1>
          <h1 className="blue_text myname">Ziyao He</h1>
        </div>
        {/* nav education, projects, home, some posts  etc.*/}
        <div className="navbar" id={expandNav ? "open" : "close"}>
          <div className="toggleButton">
            <button
              onClick={() => {
                setExpandNav((prev) => !prev);
              }}
            >
              <span className="material-symbols-outlined">reorder</span>
            </button>
          </div>

          <div className="links">
            <HashLink className="nav-link" smooth to="/#home">
              Home
            </HashLink>
            <HashLink className="nav-link" smooth to="/experience">
              Experience
            </HashLink>
            <HashLink className="nav-link" smooth to="/projects">
              Projects
            </HashLink>
            <HashLink className="nav-link" smooth to="/#someposts">
              Some posts
            </HashLink>{" "}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePageNav;
