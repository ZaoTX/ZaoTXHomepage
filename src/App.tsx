import { Fragment } from "react/jsx-runtime";
import HomePageNav from "./components/HomepageNav/HomePageNav";
 
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Someposts from "./pages/SomePosts/Someposts";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Fragment>
      <div className="App">
        <Router>
          <HomePageNav /> {/* Navigation component */}
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />} />

            {/* Education page */}
            <Route path="/experience" element={<Experience />} />

            {/* Projects page */}
            <Route path="/projects" element={<Projects />} />

            {/* Someposts page */}
            <Route path="/someposts" element={<Someposts />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </Fragment>
  );
}
export default App;
