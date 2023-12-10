// ! Project About Section
import "./style.scss";
import TeamWork from "../../../assets/images/vector/team-work-vector.svg";
import HiringTeam from "../../../assets/images/vector/hiring-team-vector.svg";
import HiringTeamMate from "../../../assets/images/vector/developer-coding-vector.svg";

const ProjectAboutSection = () => {
  return (
    <section className="about-project-section">
        <div className="section-title">
            About Project
        </div>
        <div className="main-part">
           <div className="part__about_1">
            <div className="box-group">
              <div className="box box-1">
                  <div className="image-part">
                      <img src={TeamWork} alt="" />
                  </div>
                  <div className="text-part">
                     <div className="heading_text">
                        The purpose of the project   
                     </div>
                     <div className="normal_text">
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Porro, harum?
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Porro, harum?
                     </div>
                  </div>
              </div>
              <div className="box box-2">
                  <div className="image-part">
                      <img src={HiringTeam} alt="" />
                  </div>
                  <div className="text-part">
                     <div className="heading_text">
                       Team search  
                     </div>
                     <div className="normal_text">
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Porro, harum?
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Porro, harum?
                     </div>
                  </div>
              </div>
              <div className="box box-3">
                  <div className="image-part">
                      <img src={HiringTeamMate} alt="" />
                  </div>
                  <div className="text-part">
                     <div className="heading_text">
                        Teammate search  
                     </div>
                     <div className="normal_text">
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Porro, harum?
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Porro, harum?
                     </div>
                  </div>
              </div>
            </div>
           </div>
           <div className="part__about_2">
               <div className="box-heading-title">
                  
               </div>
               <div className="wrapper-box-group">
                     
               </div>
           </div>
        </div>
    </section>
  )
}

export default ProjectAboutSection