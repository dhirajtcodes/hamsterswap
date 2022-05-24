import React from "react";
import { Suspense } from "react";
import LandingPage from "./page/LandingPage";

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LandingPage />
    </Suspense>
  );
};

export default App;
