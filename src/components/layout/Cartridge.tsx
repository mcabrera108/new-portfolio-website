import style from "../../styles/_cartridge.module.scss";
function Cartridge(props: {
  backLabelText: string;
  title: string;
  projectDesc: string;
  projectLink: string;
  labelUrl: string;
}) {
  return (
    <div className={style.cartContainer}>
      <div className={style.cartWrapper}>
        <section className={style.cartridge} title={`${props.title} Live App`}>
          <div className={style.case}>
            <figure className={style.front}>
              <figure className={`${style.base} ${style.tall}`}></figure>
              <figure className={`${style.base} ${style.wide}`}></figure>
              <figure className={`${style.linebase}`}></figure>
              <figure className={`${style.darkgap} ${style.zero}`}></figure>
              <figure className={`${style.darkline} ${style.darkone}`}></figure>
              <figure className={`${style.darkline} ${style.darktwo}`}></figure>
              <figure
                className={`${style.darkline} ${style.darkthree}`}
              ></figure>
              <figure className={`${style.line} ${style.one}`}></figure>
              <figure className={`${style.line} ${style.two}`}></figure>
              <figure className={`${style.line} ${style.three}`}></figure>
              <figure className={`${style.line} ${style.four}`}></figure>
              <figure className={`${style.line} ${style.five}`}></figure>
              <figure className={`${style.line} ${style.six}`}></figure>
              <figure className={`${style.line} ${style.seven}`}></figure>
              <figure className={`${style.line} ${style.eight}`}></figure>
              <figure className={`${style.line} ${style.nine}`}></figure>
              <figure className={`${style.line} ${style.ten}`}></figure>
              <figure className={`${style.line} ${style.eleven}`}></figure>
              <figure className={`${style.line} ${style.twelve}`}></figure>
              <figure className={`${style.line} ${style.thirteen}`}></figure>
              <figure className={`${style.line} ${style.fourteen}`}></figure>
              <figure className={`${style.line} ${style.fifteen}`}></figure>
              <figure className={`${style.line} ${style.sixteen}`}></figure>
              <figure className={`${style.line} ${style.seventeen}`}></figure>
              <figure className={`${style.line} ${style.eighteen}`}></figure>
              <figure className={`${style.line} ${style.nineteen}`}></figure>
              <figure className={`${style.line} ${style.twenty}`}></figure>
              <figure className={`${style.line} ${style.twentyone}`}></figure>
              <figure className={`${style.gap} ${style.twentytwo}`}></figure>
              <figure className={`${style.leftindent}`}></figure>
              <figure className={`${style.rightindent}`}></figure>
              <figure className={`${style.triangleDown}`}></figure>
              <figure
                className={`${style.label}`}
                style={{
                  backgroundImage: `${props.labelUrl}`,
                }}
              ></figure>
            </figure>
            <figure className={`${style.back}`}>
              <figure className={`${style.base} ${style.tall}`}></figure>
              <figure className={`${style.base} ${style.wide}`}></figure>
              <figure className={`${style.darkgap} ${style.zero}`}></figure>
              <figure className={`${style.darkline} ${style.darkone}`}></figure>
              <figure className={`${style.darkline} ${style.darktwo}`}></figure>
              <figure
                className={`${style.darkline} ${style.darkthree}`}
              ></figure>
              <figure className={`${style.leftindent}`}></figure>
              <figure className={`${style.rightindent}`}></figure>

              <figure className={`${style.backlabel}`}>
                <span className={`${style.labelText}`}>
                  {props.backLabelText}
                </span>
              </figure>
              <figure className={`${style.backbottomlabel}`}></figure>
            </figure>
            <figure className={`${style.rightside}`}>
              <figure className={`${style.bottom}`}></figure>
              <figure className={`${style.sideline} ${style.darkone}`}></figure>
              <figure className={`${style.ceiling} ${style.darkone}`}></figure>
              <figure className={`${style.floor} ${style.darkone}`}></figure>
              <figure className={`${style.sideline} ${style.darktwo}`}></figure>
              <figure className={`${style.ceiling} ${style.darktwo}`}></figure>
              <figure className={`${style.floor} ${style.darktwo}`}></figure>
              <figure
                className={`${style.sideline} ${style.darkthree}`}
              ></figure>
              <figure
                className={`${style.ceiling} ${style.darkthree}`}
              ></figure>
              <figure className={`${style.floor} ${style.darkthree}`}></figure>
              <figure
                className={`${style.sideline} ${style.darkfour}`}
              ></figure>
              <figure className={`${style.ceiling} ${style.darkfour}`}></figure>
              <figure className={`${style.floor} ${style.darkfour}`}></figure>
              <figure
                className={`${style.sideline} ${style.darkfive}`}
              ></figure>
              <figure className={`${style.ceiling} ${style.darkfive}`}></figure>
              <figure className={`${style.floor} ${style.darkfive}`}></figure>
            </figure>

            <figure className={style.leftside}>
              <figure className={`${style.bottom}`}></figure>
              <figure className={`${style.sideline} ${style.darkone}`}></figure>
              <figure className={`${style.ceiling} ${style.darkone}`}></figure>
              <figure className={`${style.floor} ${style.darkone}`}></figure>
              <figure className={`${style.sideline} ${style.darktwo}`}></figure>
              <figure className={`${style.ceiling} ${style.darktwo}`}></figure>
              <figure className={`${style.floor} ${style.darktwo}`}></figure>
              <figure
                className={`${style.sideline} ${style.darkthree}`}
              ></figure>
              <figure
                className={`${style.ceiling} ${style.darkthree}`}
              ></figure>
              <figure className={`${style.floor} ${style.darkthree}`}></figure>
              <figure
                className={`${style.sideline} ${style.darkfour}`}
              ></figure>
              <figure className={`${style.ceiling} ${style.darkfour}`}></figure>
              <figure className={`${style.floor} ${style.darkfour}`}></figure>
              <figure
                className={`${style.sideline} ${style.darkfive}`}
              ></figure>
              <figure className={`${style.ceiling} ${style.darkfive}`}></figure>
              <figure className={`${style.floor} ${style.darkfive}`}></figure>
            </figure>

            <figure className={style.topside}>
              <figure className={style.left}></figure>
              <figure className={style.right}></figure>
            </figure>
          </div>
        </section>
      </div>
      <div>
        <a
          href={props.projectLink}
          target="_blank"
          title={`${props.title} Repo`}
        >
          <div className={style.cartTitle}>{props.title}</div>
          <div className={style.cartSubTitle}>{props.projectDesc}</div>
        </a>
      </div>
    </div>
  );
}
export default Cartridge;
