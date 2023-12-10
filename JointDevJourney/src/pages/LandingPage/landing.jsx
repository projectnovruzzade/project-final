import "./landing.scss"
import ProjectFirstSection from "./ProjectFirst/index";
import ProjectAboutSection from "./ProjectAbout/index";

const LandingPage = () => {
  return (
    <section id="main-wrapper">
        <ProjectFirstSection />
        <ProjectAboutSection />
    </section>
  )
}

export default LandingPage