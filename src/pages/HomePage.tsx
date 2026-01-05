import style from "../styles/layout.module.scss";
import Marquee from "react-fast-marquee";
import {
  HTML5,
  ChakraUI,
  React,
  CSS3,
  Sass,
  Netlify2,
  CSharp,
  Figma,
  ExpressJsLight,
  PostgreSQL,
  MongoDB,
  Jest,
  Playwright,
  Redux,
  Prisma,
  Heroku,
  LinkedIn,
  GitHubLight,
  MaterialUI,
} from "developer-icons";

function HomePage() {
  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.bannerContainer}>
          <div className={style.banner}>
            <h1 className={style.bannerTitle}>
              Hello, I'm <span className={style.name}>Martin!</span>
            </h1>
          </div>
          <div className={style.subBanner}>
            <h2 className={style.subBannerTitle}>
              I make responsive web apps using these tools:
            </h2>
          </div>
          <div className={style.holder}>
            <Marquee
              speed={50}
              gradient={false}
              pauseOnHover={true}
              style={{ maxWidth: "80%" }}
            >
              <div className={style.devIcon}>
                <React />
              </div>
              <div className={style.devIcon}>
                <HTML5 />
              </div>
              <div className={style.devIcon}>
                <CSS3 />
              </div>
              <div className={style.devIcon}>
                <ChakraUI />
              </div>
              <div className={style.devIcon}>
                <Sass />
              </div>
              <div className={style.devIcon}>
                <Netlify2 />
              </div>
              <div className={style.devIcon}>
                <CSharp />
              </div>
              <div className={style.devIcon}>
                <Figma />
              </div>
              <div className={style.devIcon}>
                <ExpressJsLight />
              </div>
              <div className={style.devIcon}>
                <PostgreSQL />
              </div>
              <div className={style.devIcon}>
                <MongoDB />
              </div>
              <div className={style.devIcon}>
                <Jest />
              </div>
              <div className={style.devIcon}>
                <Playwright />
              </div>
              <div className={style.devIcon}>
                <Prisma />
              </div>
              <div className={style.devIcon}>
                <Redux />
              </div>
              <div className={style.devIcon}>
                <Heroku />
              </div>
              <div className={style.devIcon}>
                <MaterialUI />
              </div>
            </Marquee>
          </div>
          <div className={style.holder}>
            <div className={style.socialIcon}>
              <a href="https://github.com/mcabrera108" target="_blank">
                <GitHubLight size={40} />
              </a>
            </div>
            <div className={style.socialIcon}>
              <a
                href="https://www.linkedin.com/in/martin-cabrera-b83ab1148/"
                target="_blank"
              >
                <LinkedIn size={40} />
              </a>
            </div>
          </div>
          <div className={style.holder}>
            <a
              className={style.downloadLink}
              target="_blank"
              href="https://docs.google.com/document/d/1IKb0X4ig8myxFRLJWxYjAXTYDmlLwQPOmFlgnbm9ifo/edit?usp=sharing"
              download
            >
              My resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
