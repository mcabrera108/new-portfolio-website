import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import layout from "../styles/layout.module.scss";

function BaseLayout() {
  return (
    <div className={layout.mainContainer}>
      <Header />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default BaseLayout;
