import Paragraph from "../../components/Paragraph/Paragraph";
import{VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import { MdSchool, MdWork } from "react-icons/md";
import 'react-vertical-timeline-component/style.min.css';
import "./Experience.css"; 
function Experience() {
  return (
    <div className="Experience first-paragraph">
      <Paragraph
        title="Experience"
        content="People says the three years you spend studying in Germany are the most valuable five years of your life. "
      ></Paragraph>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="Okt. 2016-Sep. 2021"
          iconStyle={{
            background: "rgb(255, 255, 255)",
            color: "#1e1e1e",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          contentStyle={{ background: "rgb(33, 150, 243)", color: "white" }}
          icon={<MdSchool className="timeline-icon" />}
          className="timeline-element"
        >
          <h3>University of Konstanz, Konstanz, Germany</h3>
          <h5>B.Sc. Information Engineering</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Nov.2022-May.2023"
          iconStyle={{
            background: "rgb(255, 255, 255)",
            color: "#1e1e1e",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          contentStyle={{ background: "rgb(33, 150, 243)", color: "white" }}
          icon={<MdWork className="timeline-icon" />}
          className="timeline-element"
        >
          <h3>HTWG Hochschule Konstanz, Konstanz, Germany</h3>
          <h5>Mathetutor Lineare Algebra</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Mar.2022-May.2024"
          iconStyle={{
            background: "rgb(255, 255, 255)",
            color: "#1e1e1e",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          contentStyle={{ background: "rgb(33, 150, 243)", color: "white" }}
          icon={<MdWork className="timeline-icon" />}
          className="timeline-element"
        >
          <h3>Human-Computer Interaction Group, Konstanz, Germany</h3>
          <h5>Hiwi Student</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="June 2024-Okt.2024"
          iconStyle={{
            background: "rgb(255, 255, 255)",
            color: "#1e1e1e",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          contentStyle={{ background: "rgb(33, 150, 243)", color: "white" }}
          icon={<MdWork className="timeline-icon" />}
          className="timeline-element"
        >
          <h3>Collective Behavior Group, Konstanz, Germany</h3>
          <h5>Hiwi Student</h5>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Mar.2021-Nov.2024"
          iconStyle={{
            background: "rgb(255, 255, 255)",
            color: "#1e1e1e",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          contentStyle={{ background: "rgb(33, 150, 243)", color: "white" }}
          icon={<MdSchool className="timeline-icon" />}
          className="timeline-element"
        >
          <h3>University of Konstanz, Konstanz, Germany</h3>
          <h5>M.Sc. Computer and Information Science</h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
export default Experience;
