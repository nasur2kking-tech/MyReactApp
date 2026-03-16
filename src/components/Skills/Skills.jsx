import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

const Skills = () => {
  return (
<section id="skills" className="py-5 bg-dark text-white">
      <div className="container">

        <h2 className="text-center mb-5">My Skills</h2>

        <div className="row">

          <div className="col-md-6">

            <h5>
              <FaHtml5 style={{color:"#e34c26",marginRight:"10px"}}/>
              HTML
            </h5>

            <div className="progress mb-4">
              <div className="progress-bar bg-info" style={{width:"90%"}}>
                90%
              </div>
            </div>

            <h5>
              <FaCss3Alt style={{color:"#264de4",marginRight:"10px"}}/>
              CSS
            </h5>

            <div className="progress mb-4">
              <div className="progress-bar bg-success" style={{width:"85%"}}>
                85%
              </div>
            </div>

          </div>

          <div className="col-md-6">

            <h5>
              <FaJs style={{color:"#f7df1e",marginRight:"10px"}}/>
              JavaScript
            </h5>

            <div className="progress mb-4">
              <div className="progress-bar bg-warning" style={{width:"80%"}}>
                80%
              </div>
            </div>

            <h5>
              <FaReact style={{color:"#61DBFB",marginRight:"10px"}}/>
              React
            </h5>

            <div className="progress mb-4">
              <div className="progress-bar bg-danger" style={{width:"75%"}}>
                75%
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;