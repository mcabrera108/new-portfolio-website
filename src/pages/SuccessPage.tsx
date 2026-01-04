import style from "../styles/layout.module.scss";
function SuccessPage() {
  return (
    <div className={style.subBanner} style={{ textAlign: "center" }}>
      Successfully Submitted Form!
    </div>
  );
}
export default SuccessPage;
