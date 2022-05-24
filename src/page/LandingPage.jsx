import React from "react";
import { Header, Wallet, Footer, BottomContainer } from "../routes/routes";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Header />
      <Wallet />
      <Footer />
      <BottomContainer />
    </div>
  );
};

export default LandingPage;
