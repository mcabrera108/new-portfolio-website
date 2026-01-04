import style from "../styles/layout.module.scss";
function AboutPage() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.contactTitle} style={{ marginBottom: "1em" }}>
        About Me
      </div>
      <div className={style.aboutWrapper}>
        <div className={style.aboutDesc}>
          <p>
            Hello! My name is Martin and I'm a Houston based Software Engineer
            with a focus on Full-Stack Development.
          </p>
          <p>
            I graduated from the University of Houston in 2019 with a B.S. in
            Computer Science and a Minor in Mathematics. I like to develop web
            applications,draw, and workout in my free time.
          </p>
          <p>
            {" "}
            I work with a variety of tech stacks with an emphasis on React,
            Node.js, and SQL. But I am always open to learning new technologies
            in the industry.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
