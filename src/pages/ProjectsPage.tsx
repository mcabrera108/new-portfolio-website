import Cartridge from "../components/layout/Cartridge";
import style from "../styles/layout.module.scss";
function ProjectsPage() {
  return (
    <div className={style.projectContainer}>
      <div className={style.projectWrapper}>
        <Cartridge
          backLabelText={"Play Me!"}
          title={"Figure-Chan"}
          projectLink={"https://github.com/mcabrera108/figure-chan"}
        />

        <Cartridge
          backLabelText={"Hello!"}
          title={"Example Project"}
          projectLink="https://github.com/mcabrera108"
        />

        <Cartridge
          backLabelText={"Insert secret message here"}
          title={"Example Project"}
          projectLink="https://github.com/mcabrera108"
        />

        <Cartridge
          backLabelText={"Fun Fact: I like to draw!"}
          title={"Example Project"}
          projectLink="https://github.com/mcabrera108"
        />
      </div>
    </div>
  );
}
export default ProjectsPage;
