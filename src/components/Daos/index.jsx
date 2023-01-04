import React from "react";
import Autonomous from "./Autonomous";
import DaoDifference from "./DaoDifference";
// import Defi from "./Defi";
import MainSection from "./MainSection";

function Main() {
  return (
    <div>
      <MainSection />
      <DaoDifference />
      <Autonomous />
      {/* <Defi /> */}
    </div>
  );
}

export default Main;
