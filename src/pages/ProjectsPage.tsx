import Cartridge from "../components/layout/Cartridge";
import style from "../styles/layout.module.scss";
function ProjectsPage() {
  return (
    <div className={style.projectContainer}>
      <div className={style.contactTitle} style={{ marginBottom: "1em" }}>
        My Projects
      </div>
      <div className={style.projectWrapper}>
        <Cartridge
          backLabelText={"Play Me!"}
          title={"Figure-Chan"}
          labelUrl="url(https://i.imgur.com/q49bg7y.png)"
          projectDesc={
            "A comprehensive, community-driven database dedicated to the documentation of Japanese anime figures, American action figures, and Chinese Resin statues."
          }
          projectLink={"https://github.com/mcabrera108/figure-chan"}
        />

        {/* <Cartridge
          backLabelText={"Hello!"}
          title={"Project In-Progress"}
          projectDesc={"Currently updating my portfolio projects!"}
          labelUrl="url(https://i.imgur.com/cFeTQdO.jpeg)"
          projectLink="https://github.com/mcabrera108"
        />

        <Cartridge
          backLabelText={"Insert secret message here"}
          title={"Project In-Progress"}
          projectDesc={"Currently updating my portfolio projects!"}
          labelUrl="url(https://i.imgur.com/cFeTQdO.jpeg)"
          projectLink="https://github.com/mcabrera108"
        />

        <Cartridge
          backLabelText={"Fun Fact: I like to draw!"}
          title={"Project In-Progress"}
          projectDesc={"Currently updating my portfolio projects!"}
          labelUrl="url(https://i.imgur.com/cFeTQdO.jpeg)"
          projectLink="https://github.com/mcabrera108"
        /> */}
      </div>
    </div>
  );
}
export default ProjectsPage;
