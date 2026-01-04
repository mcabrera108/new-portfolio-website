import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import style from "../styles/layout.module.scss";
import { useLocation } from "react-router-dom";
function ErrorPage() {
  const location = useLocation();

  const state = location.state.message as
    | { message: string }
    | undefined
    | null;
  console.log(state);
  return (
    <div className={style.mainContainer}>
      <Header />
      <main>
        <div>
          <div className={style.subBanner} style={{ textAlign: "center" }}>
            {state ? state.message : "404 Not Found"}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default ErrorPage;
