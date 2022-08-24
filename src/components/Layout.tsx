import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <div className="scroll-smooth">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
