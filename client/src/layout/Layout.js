import React from "react";
import Routers from "../routes/Routers";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import Chatbot from "../components/chatbot/Chatbot";

const Layout = () => {
  return (
    <>
      <>
        <Header />
        <main>
          <Routers />
        </main>
      </>
      <Footer />
      {/* <Chatbot/> */}
    </>
  );
};

export default Layout;
