import React from "react";
import { render } from "react-dom";
import LeaderboardTable from "./LeaderboardTable";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const App = () => (
  <div style={styles}>
    <LeaderboardTable />
  </div>
);

render(<App />, document.getElementById("root"));
