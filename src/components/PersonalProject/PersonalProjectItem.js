import {personalProject} from "../../portfolio";

export default function PersonalProjectItem({ project }) {
  return (
    <div>
      <h2>{project.title}</h2>
      {project.descriptions.map((item, index) => (
          <p>{item}</p>
      ))}
      <div>
        <h3>Key Features</h3>
        <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between' }}>
          {project.features.map((item, index) => (
            <div style={{flexBasis: "calc(50% - 20px", paddingLeft: "20px"}}>
              <p>{item.desc}</p>
              <img src={item.url}  width="100%"/>
            </div>
          ))}

        </div>
      </div>
      <div>
        <h3>{project.result.desc}</h3>
        <img src={project.result.url} width="100%" />
      </div>
    </div>
  )
}