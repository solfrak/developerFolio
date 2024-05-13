import {Fade} from "react-reveal";
import "./PersonalProject.scss"
import PersonalProjectItem from "../../components/PersonalProject/PersonalProjectItem";
import {personalProject} from "../../portfolio";

export default function PersonalProject() {
  return (

    <Fade bottom duration={1000} distance="40px">
      <div className="personal-project">
        <h1>{" "}Personal Projects{" "}</h1>
        <div>
          {personalProject.projects.map((item, index) => (
            <div>
              <PersonalProjectItem key={index} project={item} />
              <hr />
            </div>
          ))}
        </div>
      </div>

    </Fade>
  )
}