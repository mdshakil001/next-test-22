import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <Header />
      <main className="min-h-screen bg-white text-typo font-general">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
