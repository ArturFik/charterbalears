import { Header } from "../header/header";
import { Footer } from "../footer/footer";
export const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};
