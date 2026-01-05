import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import style from "../styles/layout.module.scss";
function ErrorPage() {
  return (
    <div className={style.mainContainer}>
      <Header />
      <main>
        <div>
          <div className={style.subBanner} style={{ textAlign: "center" }}>
            404 Not Found
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default ErrorPage;
