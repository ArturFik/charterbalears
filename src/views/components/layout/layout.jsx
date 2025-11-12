import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-content" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};
